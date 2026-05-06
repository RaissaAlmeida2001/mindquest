// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Import Auth and Firestore
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyl9BlWGKeKE9ItiBOR3l0vXzH99qJCyI",
  authDomain: "mindquest-4c577.firebaseapp.com",
  projectId: "mindquest-4c577",
  storageBucket: "mindquest-4c577.firebasestorage.app",
  messagingSenderId: "746045508539",
  appId: "1:746045508539:web:6b9089cf6266fbe6fc929e",
  measurementId: "G-5D1V80WNZ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;