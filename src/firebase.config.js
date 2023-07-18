// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLixeW7nwt7o3E_hsOWU26pSIpr1xXPW0",
  authDomain: "chat-proj-3d054.firebaseapp.com",
  projectId: "chat-proj-3d054",
  storageBucket: "chat-proj-3d054.appspot.com",
  messagingSenderId: "526407811794",
  appId: "1:526407811794:web:c846eae33407e40ea9e30b",
  measurementId: "G-YMP1MN0WQ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

