// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDx8p5fJH_f6zpJz9rN7KwLBtfjgFKaIa4",
  authDomain: "chat-app-with-react-c1bd0.firebaseapp.com",
  projectId: "chat-app-with-react-c1bd0",
  storageBucket: "chat-app-with-react-c1bd0.appspot.com",
  messagingSenderId: "817174071823",
  appId: "1:817174071823:web:9827a26284aacb4bd6717a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);