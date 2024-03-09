import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlSU0XnrYbqUrezkivn7I3X-lVIUilanA",
  authDomain: "remotelelo-4bf98.firebaseapp.com",
  projectId: "remotelelo-4bf98",
  storageBucket: "remotelelo-4bf98.appspot.com",
  messagingSenderId: "503472852878",
  appId: "1:503472852878:web:be4b46d82da8970a789edf",
  measurementId: "G-56V293V2WJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
