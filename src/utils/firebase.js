// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUeOYfoKcVc9PBJ1AmjMWJogCpFIWK9Q0",
  authDomain: "shopclues-aea18.firebaseapp.com",
  projectId: "shopclues-aea18",
  storageBucket: "shopclues-aea18.appspot.com",
  messagingSenderId: "60606044615",
  appId: "1:60606044615:web:973f5f2d7d21f1ad1121e2",
  measurementId: "G-D8XB7EEDHP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };