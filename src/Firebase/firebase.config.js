// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSdDPpQrMT3L_4vIGd4MW9j4o6HoxmPTU",
  authDomain: "assignment-10-da97e.firebaseapp.com",
  projectId: "assignment-10-da97e",
  storageBucket: "assignment-10-da97e.appspot.com",
  messagingSenderId: "459731606828",
  appId: "1:459731606828:web:ee45c548160680aebca089",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
