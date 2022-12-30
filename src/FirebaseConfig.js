import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyAU8LGxeAg54dCyW2N_vslKk2Z_GotwvM4",
  authDomain: "lrnr-firestore-student.firebaseapp.com",
  projectId: "lrnr-firestore-student",
  storageBucket: "lrnr-firestore-student.appspot.com",
  messagingSenderId: "840716394912",
  appId: "1:840716394912:web:2e439642a2ec429ed444c5",
  measurementId: "G-6P4H3QQTPE",
};

const app = initializeApp(config);
const db = getFirestore(app);

export default db;
