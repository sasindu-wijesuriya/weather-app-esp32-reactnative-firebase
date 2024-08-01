import { initializeApp } from "firebase/app";
import { ref, onValue, getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDz4WYG7prfLAr5nMdTUBLLuVEXPs7TzEM",
  authDomain: "weather-reactnative-esp.firebaseapp.com",
  projectId: "weather-reactnative-esp",
  storageBucket: "weather-reactnative-esp.appspot.com",
  messagingSenderId: "1052195366492",
  appId: "1:1052195366492:web:1e7f2f6ad827d4b1f66899",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

export { db, ref, onValue };
