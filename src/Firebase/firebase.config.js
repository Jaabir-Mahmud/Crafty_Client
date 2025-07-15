import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDpCkGc1VXxnEAm8IBS5EBSnGehVE1jbio",
  authDomain: "creative-corner-8bdd6.firebaseapp.com",
  projectId: "creative-corner-8bdd6",
  storageBucket: "creative-corner-8bdd6.appspot.com",
  messagingSenderId: "416302676100",
  appId: "1:416302676100:web:7a20eefc391787966aead1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;