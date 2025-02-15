import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrp5aslfZL9q-LIDsWpKLD_Bdi-EcQNlk",
  authDomain: "react-final-exam-a405e.firebaseapp.com",
  projectId: "react-final-exam-a405e",
  storageBucket: "react-final-exam-a405e.firebasestorage.app",
  messagingSenderId: "916559665632",
  appId: "1:916559665632:web:15a84dabe90d45aa46b385"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);