// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVZmD-9NYzrHdeJadckrSNzyzWZmTEyUk",
  authDomain: "watches-d85ff.firebaseapp.com",
  projectId: "watches-d85ff",
  storageBucket: "watches-d85ff.appspot.com",
  messagingSenderId: "726775014691",
  appId: "1:726775014691:web:4e1b46872b2f7f79709896"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;