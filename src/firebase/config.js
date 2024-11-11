import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAJpDV6oGImOHZShSuvIa4kFTvFSjHzsZE",
  authDomain: "som-exchange.firebaseapp.com",
  projectId: "som-exchange",
  storageBucket: "som-exchange.firebasestorage.app",
  messagingSenderId: "842503095412",
  appId: "1:842503095412:web:26ca6e34e4cbfa36de7d21",
  measurementId: "G-JNPD310G7Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
