// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut  } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc,updateDoc } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";


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

export function logout(){
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