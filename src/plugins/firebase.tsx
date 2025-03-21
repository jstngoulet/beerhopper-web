// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import DEFAULT_KEYS from "../models/utilities/config";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: DEFAULT_KEYS.FIREBASE_API_KEY,
  authDomain: DEFAULT_KEYS.FIREBASE_AUTH_DOMAIN,
  databaseURL: DEFAULT_KEYS.FIREBASE_DB_URL,
  projectId: DEFAULT_KEYS.FIRBASE_PROKECT_ID,
  storageBucket: DEFAULT_KEYS.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: DEFAULT_KEYS.FIREBASE_MESSAGE_SENDER_ID,
  appId: DEFAULT_KEYS.FIREBASE_APP_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
