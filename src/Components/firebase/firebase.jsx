import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDwFzx7cZ7SRs_4IsKdsg8Ahh0Nuh52QIc",
  authDomain: "filmyverse-11236.firebaseapp.com",
  projectId: "filmyverse-11236",
  storageBucket: "filmyverse-11236.appspot.com",
  messagingSenderId: "619860671564",
  appId: "1:619860671564:web:3b8384e726dda6a05048e9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const movieRef= collection(db, "Movies")
export const reviewsRef= collection(db, "reviews")

export default app;