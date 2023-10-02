// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAVufAaz3SbjNJCGfQdUAPouNvcIp8dogg",
    authDomain: "rahul-digital-studio.firebaseapp.com",
    projectId: "rahul-digital-studio",
    storageBucket: "rahul-digital-studio.appspot.com",
    messagingSenderId: "305654201432",
    appId: "1:305654201432:web:1fc43f7617cd212bf35e2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;