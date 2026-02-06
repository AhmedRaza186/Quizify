// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, updateDoc,getDocs,collection } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";
import { quizCards, quizCategories } from "./quizApp/quizData.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAwpwTgLSBB4lgF84EdKQblfeF_vU8Hc0",
  authDomain: "quizify-ac1a0.firebaseapp.com",
  projectId: "quizify-ac1a0",
  storageBucket: "quizify-ac1a0.firebasestorage.app",
  messagingSenderId: "308285457079",
  appId: "1:308285457079:web:02acdd054c93f0a80b4332"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);


export async function signupUsers(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    return userCredential.user
  } catch (error) {
    throw error
  }
}
export async function signinUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    // Signed in 
    return userCredential.user
    // ...
  }
  catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    throw error
  }
}


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export async function addUserDetails(uid, userDetails) {
  await setDoc(doc(db, "users", uid), (userDetails)
  );
}
export async function updateUserDetails(uid, userDetails) {
  await updateDoc(doc(db, "users", uid), (userDetails)
  );
}

export async function getUserDetails(uid) {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
}

let isSigningUp = false;

export function setSigningUp(value) {
  isSigningUp = value;
}

export function getLoggedInUser() {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      const path = window.location.pathname;

      if (user) {
        resolve(user.uid);

        // ONLY redirect if we are NOT in the middle of a signup process
        if (!isSigningUp) {
          if (path === '/login/login.html' || path === '/index.html') {
            window.location.href = '../quizApp/index.html';
          }
        }
      } else {
        resolve(null);
        if (path.includes('/quizApp/')) {
          window.location.href = '../login/login.html';
        }
      }
    });
  });
}

export function logout() {
  const path = window.location.pathname;
  signOut(auth).then(() => {
    if (path.includes('/quizApp/')) {
      window.location.href = '../login/login.html';
    }
    console.log('hogyaaaaaa')
    // Sign-out successful.
  }).catch((error) => {
    console.log('nhi hogyaaaaaa')

    // An error happened.
  });
}


// quiz Data
// --- ONE-TIME DATA MIGRATION FUNCTION ---
export async function uploadQuizDataToFirestore() {

  try {
    console.log("🚀 Starting data upload with Progress tracking...");

    // --- STEP A: UPLOAD CATEGORIES ---
quizCategories.forEach(async (cat, index) => {
    const catId = cat.title.toLowerCase().replace(/\s+/g, '_');
    await setDoc(doc(db, "categories", catId), {
        ...cat,
        order: index // Adds 0 for first, 1 for second, etc.
    });
    console.log(`✅ Category with order: ${catId}`);
})

    // --- STEP B: UPLOAD QUIZ CARDS (With New Properties) ---
    const cardEntries = Object.entries(quizCards);

    for (const [subCatName, cards] of cardEntries) {

      // MAP through the cards to add the new tracking properties
      const updatedCards = cards.map((card,index) => ({
        ...card,               // Keep all existing properties (title, img, etc.)
        percentage: 0,         // Default: 0% completion
        quizCompleted: false, 
        order: index  // Default: Not finished
      }));

      const quizDocRef = doc(db, "quizzes", subCatName);

      // Upload the updated array
      await setDoc(quizDocRef, {
        data: updatedCards
      });

      console.log(`✅ Progress-ready cards uploaded for: ${subCatName}`);
    }

    console.log("🎉 SUCCESS: Data is live with tracking properties!");

  } catch (error) {
    console.error("❌ Migration failed:", error);
  }
}
export async function fetchCategories() {
    const querySnapshot = await getDocs(collection(db, "categories"));
    const categories = [];
    
    querySnapshot.forEach((doc) => {
        categories.push(doc.data());
    });

    // Sort based on the index we saved
    return categories.sort((a, b) => a.order - b.order);
}

export async function getQuizCardsBySub(subName) {
    const docRef = doc(db, "quizzes", subName);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const cards = docSnap.data().data;
        // Sort by the 'order' property we just added
        return cards.sort((a, b) => a.order - b.order);
    } else {
        return [];
    }
}
// uploadQuizDataToFirestore()