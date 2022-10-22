import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STRG_BUCKET,
  messagingSenderId: process.env.REACT_APP_MSG_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

export const firebaseInstance = initializeApp(firebaseConfig);
export const authService = getAuth(firebaseInstance)
// export const firebaseInstance = initializeApp(firebaseConfig);

// export const authService = getAuth(firebaseInstance);
// export const authService = {
//   loginGoogle() {
//     const auth = getAuth();
//     const provider = new GoogleAuthProvider();
//     return signInWithPopup(auth, provider);
//   },
// };

// export const auth = firebaseInstance.auth();
// export const provider = new firebaseInstance.auth.GoogleAuthProvider();
// export const signInWithGoogle = () => auth.signInWithPopup(provider)

export const fireStore = getFirestore(firebaseInstance);
export const dbService = getFirestore(firebaseInstance);
export const analytics = getAnalytics(firebaseInstance);
