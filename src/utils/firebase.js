// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIJy3EC876HvgU07wBO65mEtQAsCNKYUY",
  authDomain: "netflixgpt-be9f7.firebaseapp.com",
  projectId: "netflixgpt-be9f7",
  storageBucket: "netflixgpt-be9f7.firebasestorage.app",
  messagingSenderId: "488534564219",
  appId: "1:488534564219:web:7ae16fd87b9ad674e8f1de",
  measurementId: "G-VBDT80TKLJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);