// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth' ;
import 'firebase/storage' ;
import 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyClqGoIH0mbQ-hpxVa3ITddgIgVhZ-VJW8",
    authDomain: "react-messenger-app-818c9.firebaseapp.com",
    projectId: "react-messenger-app-818c9",
    storageBucket: "react-messenger-app-818c9.appspot.com",
    messagingSenderId: "350019679461",
    appId: "1:350019679461:web:7f017a897ca6342541100c"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);