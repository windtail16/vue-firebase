// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOTm7-ITpru-Y9549B8qEbKCqM7qKixaA",
  authDomain: "portfolio-184808.firebaseapp.com",
  databaseURL: "https://portfolio-184808.firebaseio.com",
  projectId: "portfolio-184808",
  storageBucket: "portfolio-184808.appspot.com",
  messagingSenderId: "814298444468",
  appId: "1:814298444468:web:b4296a1f57a8624b"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
const firebaseAuth = firebaseApp.auth()

export {
  firebaseApp,
  firebaseAuth
}