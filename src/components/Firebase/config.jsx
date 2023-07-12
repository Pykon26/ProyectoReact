// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIxx12vWbUZ-KzS5hRpYv7J6Mbmt5i-ks",
  authDomain: "frescosclub-d58c4.firebaseapp.com",
  projectId: "frescosclub-d58c4",
  storageBucket: "frescosclub-d58c4.appspot.com",
  messagingSenderId: "935211215587",
  appId: "1:935211215587:web:dc72aa46fd0777a95d73d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);