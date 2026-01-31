import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBEiIwD1C89EOH7c25sA0vwLDzFt8LCBMM",
  authDomain: "edwrd-portfolio.firebaseapp.com",
  projectId: "edwrd-portfolio",
  appId: "1:248788652461:web:308f83d45a74f3483d9124"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)