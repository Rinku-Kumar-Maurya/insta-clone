// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFireStore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBDkt2fwOvc4azoypdjNCWa-CVEq0JW2Gs",
    authDomain: "insta-clone-e3ecf.firebaseapp.com",
    projectId: "insta-clone-e3ecf",
    storageBucket: "insta-clone-e3ecf.appspot.com",
    messagingSenderId: "630308202272",
    appId: "1:630308202272:web:0fcfa5f649b6351cea9945"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps();
const db = getFireStore();
const storage = getStorage();

export { app, db, storage };