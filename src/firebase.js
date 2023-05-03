import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCOOlaDGCPI7-XnUhJX60CGJw9F79e8W8",
  authDomain: "chats-d8dd8.firebaseapp.com",
  projectId: "chats-d8dd8",
  storageBucket: "chats-d8dd8.appspot.com",
  messagingSenderId: "557630989369",
  appId: "1:557630989369:web:a880060d1dbd6e08f8d9e8",
  measurementId: "G-WYQCKQM28X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// const appCheck = initializeAppCheck(app, {
//   provider: new ReCaptchaV3Provider(process.env.RECAPTCHA),
//   isTokenAutoRefreshEnabled: true,
// });

export { auth, db };
