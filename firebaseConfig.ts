// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPc_vrxUV2iFh2Wip8Wwf3M5CR_RlCmyU",
  authDomain: "chat-college-project.firebaseapp.com",
  projectId: "chat-college-project",
  storageBucket: "chat-college-project.appspot.com",
  messagingSenderId: "875759850034",
  appId: "1:875759850034:web:cb88e92fc9dd83c24e222b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);

export const usersRef = collection(db, "users");
export const roomRef = collection(db, "room");
