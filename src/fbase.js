import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider,signOut } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyApgNPlLPCFVW31djyTDU02EatbE4t1uJk",
  authDomain: "test5-ef943.firebaseapp.com",
  projectId: "test5-ef943",
  storageBucket: "test5-ef943.appspot.com",
  messagingSenderId: "488957392172",
  appId: "1:488957392172:web:9eba172ebd61f96a312889",
  measurementId: "G-FNRVCGL6HW"
};

const app = initializeApp(firebaseConfig);

export {getAuth, GoogleAuthProvider,signOut};






