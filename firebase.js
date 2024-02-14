import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqArC5KzNwWEqVzl5dYSrL3Cszu-G5bVE",
  authDomain: "remotelelo.firebaseapp.com",
  projectId: "remotelelo",
  storageBucket: "remotelelo.appspot.com",
  messagingSenderId: "991820401543",
  appId: "1:991820401543:web:581ffee83b428877326122",
  measurementId: "G-K0EMBWJL1Z",
  databaseURL: "https://remotelelo-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
