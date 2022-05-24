// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAttUQfApxg63ivzk_0LZK9CUyKRMqBjas",
    authDomain: "manufacturer-720ca.firebaseapp.com",
    projectId: "manufacturer-720ca",
    storageBucket: "manufacturer-720ca.appspot.com",
    messagingSenderId: "473164185255",
    appId: "1:473164185255:web:1aea617661da0278eba582"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;