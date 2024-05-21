// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "yatlec-official.firebaseapp.com",
  projectId: "yatlec-official",
  storageBucket: "yatlec-official.appspot.com",
  messagingSenderId: "963048735453",
  appId: "1:963048735453:web:b413c89d3b7a5c7e3a5134"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);