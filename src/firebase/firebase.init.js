// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcu89PNrmjTkfHqLadj4OCp58IQ3WctQI",
  authDomain: "your-online-tutor.firebaseapp.com",
  projectId: "your-online-tutor",
  storageBucket: "your-online-tutor.appspot.com",
  messagingSenderId: "680477637611",
  appId: "1:680477637611:web:4fe8bd4a0b3447bb2177ae"
  // apiKey: process.env.local.REACT_APP_apiKey,
  // authDomain: process.env.local.REACT_APP_authDomain,
  // projectId: process.env.local.REACT_APP_projectId,
  // storageBucket: process.env.local.REACT_APP_storageBucket,
  // messagingSenderId: process.env.local.REACT_APP_messagingSenderId,
  // appId: process.env.local.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;