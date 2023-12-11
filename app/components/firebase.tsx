// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXAqicop3qI3IYSZBA07W-zfre7O-I_ak",
  authDomain: "portfolio-c5b1c.firebaseapp.com",
  projectId: "portfolio-c5b1c",
  storageBucket: "portfolio-c5b1c.appspot.com",
  messagingSenderId: "8539112944",
  appId: "1:8539112944:web:09f5b29886a66c80f90935",
  measurementId: "G-CYXZ1ZEJER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);