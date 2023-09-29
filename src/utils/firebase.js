// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOVJf1uIUCk8ENAI0ti7Z7x6YnvMiL2T4",
  authDomain: "netflix-f8696.firebaseapp.com",
  projectId: "netflix-f8696",
  storageBucket: "netflix-f8696.appspot.com",
  messagingSenderId: "1948615810",
  appId: "1:1948615810:web:3819fcf5d0b25586c1209b",
  measurementId: "G-JCCR52M42K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
