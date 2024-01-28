// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxeNRlVEV-xgkHAA9hC9ZQF1y1zcgWKuI",
  authDomain: "book-inventory-7d7f2.firebaseapp.com",
  projectId: "book-inventory-7d7f2",
  storageBucket: "book-inventory-7d7f2.appspot.com",
  messagingSenderId: "654251945945",
  appId: "1:654251945945:web:14a90cf9c198dfb9ddb3c8",
  measurementId: "G-5K8DHR12S7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;
