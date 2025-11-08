// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqAScjpDcsxZZ3B8zFrLcMsMyDjQPMPbU",
  authDomain: "travelease-b4b15.firebaseapp.com",
  projectId: "travelease-b4b15",
  storageBucket: "travelease-b4b15.firebasestorage.app",
  messagingSenderId: "142712300841",
  appId: "1:142712300841:web:1e6faaeb8dbba088654338",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
