// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFGEjdDWHWQ8F_1y4Ve5vdwKyxLkVNkr8",
  authDomain: "ema-john-router-18a5d.firebaseapp.com",
  projectId: "ema-john-router-18a5d",
  storageBucket: "ema-john-router-18a5d.appspot.com",
  messagingSenderId: "156583059402",
  appId: "1:156583059402:web:8556019ec1b9988150b933",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
