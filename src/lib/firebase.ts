import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBkzTNNTqJL0imYsgjSKRz6pHp3RwkDwZM",
  authDomain: "creatormatch-2024.firebaseapp.com",
  projectId: "creatormatch-2024",
  storageBucket: "creatormatch-2024.firebasestorage.app",
  messagingSenderId: "842462385837",
  appId: "1:842462385837:web:fb58d636bb3a70da79d824",
  measurementId: "G-DZTGPNXVJN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);