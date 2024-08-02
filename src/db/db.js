import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDEjdiUzRjHGUGGG0kbkkWaoRdHi52m73Q",
  authDomain: "ecommerce-clothes-f042a.firebaseapp.com",
  projectId: "ecommerce-clothes-f042a",
  storageBucket: "ecommerce-clothes-f042a.appspot.com",
  messagingSenderId: "578691931515",
  appId: "1:578691931515:web:e8d8da9629ac2d2533b1de"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db