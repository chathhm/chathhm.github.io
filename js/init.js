// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEJ31xnZMlER5JuCpll758hgI-gMayyWs",
  authDomain: "chathhm43.firebaseapp.com",
  projectId: "chathhm43",
  storageBucket: "chathhm43.appspot.com",
  messagingSenderId: "775335829921",
  appId: "1:775335829921:web:a6355c3e0c19e01ad62be0",
  measurementId: "G-5RKB2N55JN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
