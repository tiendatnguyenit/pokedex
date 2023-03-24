// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhrLfbZRg4FVeZZ89ZtmvFxF2J73i0RT4",
  authDomain: "pokedex-ae1f3.firebaseapp.com",
  projectId: "pokedex-ae1f3",
  storageBucket: "pokedex-ae1f3.appspot.com",
  messagingSenderId: "522670802312",
  appId: "1:522670802312:web:179f705202ed91ca86263d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;