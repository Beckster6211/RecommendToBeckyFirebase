// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// auth code
import {getAuth} from "firebase/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBY_yXwgSoQyLfXyg7JURP8uXr-_pT-H8o",
    authDomain: "recommend-to-becky.firebaseapp.com",
    projectId: "recommend-to-becky",
    storageBucket: "recommend-to-becky.appspot.com",
    messagingSenderId: "756383732483",
    appId: "1:756383732483:web:271d2d5e688fb0b76d8f36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const db = getFirestore(app) // was export const {db} = Firestore(app)
// auth code 
export const authentication = getAuth(app)
export const db = getFirestore(app)