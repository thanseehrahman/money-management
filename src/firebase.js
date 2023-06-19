import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDK6A25efHNx7itvQyHSaXN1fjB_zxSpUc",
  authDomain: "money-management-app-31e62.firebaseapp.com",
  projectId: "money-management-app-31e62",
  storageBucket: "money-management-app-31e62.appspot.com",
  messagingSenderId: "79586139429",
  appId: "1:79586139429:web:b65eb11930876fc0718ecc",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
