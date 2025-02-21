// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIYAh05UzWhUrbddcoIn4grojLOjpbnZM",
  authDomain: "regist-ygbenar.firebaseapp.com",
  projectId: "regist-ygbenar",
  storageBucket: "regist-ygbenar.firebasestorage.app",
  messagingSenderId: "71282341234",
  appId: "1:71282341234:web:ddc2a5eedd00a25d7459eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;

