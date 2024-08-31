// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVkDSfro1HL34UNqZvO_zWEAirwt2mgzU",
  authDomain: "netflixgpt-6d224.firebaseapp.com",
  projectId: "netflixgpt-6d224",
  storageBucket: "netflixgpt-6d224.appspot.com",
  messagingSenderId: "799460783082",
  appId: "1:799460783082:web:05016a35747408a6663893",
  measurementId: "G-63833P3HLZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();