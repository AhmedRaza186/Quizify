// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, updateDoc,getDocs,collection } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";
import { quizCards, quizCategories } from "./quizApp/quizData.js";

import { collectionGroup, query, where} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";


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

export async function uploadQuizDataToFirestore() {
  try {
    console.log("🚀 Starting data upload with Progress tracking...");


    const categoryEntries = quizCategories;
    for (let i = 0; i < categoryEntries.length; i++) {
        const cat = categoryEntries[i];
        const catId = cat.title.toLowerCase().replace(/\s+/g, '_');
        
        await setDoc(doc(db, "categories", catId), {
            ...cat,
            order: i // Preserves your intended list order
        });
        console.log(`✅ Category uploaded: ${catId}`);
    }


    const cardEntries = Object.entries(quizCards);

    for (const [subCatName, cards] of cardEntries) {
      
      const updatedCards = cards.map((card, index) => {
 
        const cleanHints = card.hints === Infinity ? -1 : (card.hints || 0);

        return {
          ...card,
          hints: cleanHints,        // Fixed Infinity issue
          percentage: 0,            // Default progress
          quizCompleted: false,     // Default state
          order: index              // Default sorting
        };
      });

      const quizDocRef = doc(db, "quizzes", subCatName);

      // Upload the array wrapped in a data object
      await setDoc(quizDocRef, {
        data: updatedCards
      });

      console.log(`✅ Progress-ready cards uploaded for: ${subCatName}`);
    }

    console.log("🎉 SUCCESS: Data is live with tracking properties and clean numeric hints!");

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
export async function saveUserProgress(subName, quizId, percentage) {
    const user = auth.currentUser;

    if (!user) {
        console.error("No user logged in! Progress not saved.");
        return;
    }

    // Path: userProgress / [UID] / [SubCategory] / [QuizId]
    // This keeps the database organized by user
    const progressRef = doc(db, "userProgress", user.uid, subName, String(quizId));

    try {
        await setDoc(progressRef, {
            percentage: percentage,
            isCompleted: true,
            completedAt: new Date()
        }, { merge: true });

        console.log(`Saved progress for ${user.email}`);
    } catch (error) {
        console.error("Error saving progress:", error);
    }
}
export async function getUserProgressBySub(userId, subName) {
    // 1. Critical Check: If the path is incomplete, Firestore will crash.
    if (!userId || !subName) {
        console.warn("getUserProgressBySub blocked: Missing userId or subName");
        return {}; 
    }

    try {
        // This targets: userProgress (collection) -> userId (doc) -> subName (sub-collection)
        const progressRef = collection(db, "userProgress", userId, subName);
        const querySnapshot = await getDocs(progressRef);
        
        let progressData = {};
        querySnapshot.forEach((doc) => {
            // doc.id will be your quizId (e.g., "0", "1")
            progressData[doc.id] = doc.data();
        });

        console.log(`Fetched progress for ${subName}:`, progressData);
        return progressData;
    } catch (error) {
        // If the sub-collection doesn't exist yet, it might throw an error or return empty
        console.error("Error in getUserProgressBySub:", error);
        return {};
    }
}


export async function calculateAndStoreAvgProgress(uid) {
    try {
        // This looks for EVERY document in any collection named 'userProgress' (or its sub-collections)
        // But we need to filter it by the specific User's path. 
        // A simpler way: Fetch the user's progress summary.
        
        // For now, let's use your existing structure.
        // We'll fetch all quizzes across all sub-categories.
        const userProgressRef = collection(db, "userProgress", uid);
        // Note: Firestore doesn't let you fetch "all subcollections" easily without knowing names.
        // So, we will update the stats in quizpage.js instead!
    } catch (e) { console.error(e); }
}