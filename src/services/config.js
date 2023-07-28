import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";



const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "libreria-online12.firebaseapp.com",
  projectId: "libreria-online12",
  storageBucket: "libreria-online12.appspot.com",
  messagingSenderId: "122626544064",
  appId: "1:122626544064:web:805ac77b5154ce7cbaf825"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

