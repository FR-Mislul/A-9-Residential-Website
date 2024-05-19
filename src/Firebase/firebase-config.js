// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt8WHDPjSyi8j1tPJCoeIgN6KrsP2waQM",
  authDomain: "a-9-residential-website.firebaseapp.com",
  projectId: "a-9-residential-website",
  storageBucket: "a-9-residential-website.appspot.com",
  messagingSenderId: "843670278836",
  appId: "1:843670278836:web:987ba8bc98e519894afde1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;