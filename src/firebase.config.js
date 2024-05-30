// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2s2z0mvqbECOU9Y9HXMTDWvkbfY7GWZw",
  authDomain: "job-finder-app-fccca.firebaseapp.com",
  projectId: "job-finder-app-fccca",
  storageBucket: "job-finder-app-fccca.appspot.com",
  messagingSenderId: "1071224487231",
  appId: "1:1071224487231:web:cf94e7e1fa88e56644a78a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};