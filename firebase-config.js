// Firebase configuration for Zoom

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";

import {
  getAuth
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyCvu3_4yEA03T9XD6MpJIdcQUplp2B2SCc",
  authDomain: "zoom-5ff91.firebaseapp.com",
  projectId: "zoom-5ff91",
  storageBucket: "zoom-5ff91.firebasestorage.app",
  messagingSenderId: "811034741528",
  appId: "1:811034741528:web:88fdaa6ca16ac5bc512c6d"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Firebase Authentication
const auth = getAuth(app);


// Firestore Database
const db = getFirestore(app);


// Make them available to other files
export {
  app,
  auth,
  db
};