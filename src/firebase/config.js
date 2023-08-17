// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJOZTZ1qi5VYM5p-RPmJmXFlWJHqI7b10",
  authDomain: "todolist-21daa.firebaseapp.com",
  projectId: "todolist-21daa",
  storageBucket: "todolist-21daa.appspot.com",
  messagingSenderId: "493957406683",
  appId: "1:493957406683:web:822eef8a944dc18593d1fe",
  measurementId: "G-1RDW753NW9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}