import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD496180fbnLvlQV9_Em0V05mYL5cvkd40",
  authDomain: "chat-with-pdfai.firebaseapp.com",
  projectId: "chat-with-pdfai",
  storageBucket: "chat-with-pdfai.firebasestorage.app",
  messagingSenderId: "351014072458",
  appId: "1:351014072458:web:43dda9fba7a9ec5542fd73"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getFirestore(app);

export {db,storage};