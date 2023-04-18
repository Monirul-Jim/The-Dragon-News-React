// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3qK5pZItdMqF6ZV9_W_9oRPvzHrMCHhA",
  authDomain: "the-dragon-news-react.firebaseapp.com",
  projectId: "the-dragon-news-react",
  storageBucket: "the-dragon-news-react.appspot.com",
  messagingSenderId: "689926126506",
  appId: "1:689926126506:web:298fdbdc859cd3ddcc89d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;