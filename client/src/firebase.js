
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);

const app = initializeApp(firebaseConfig);

module.exports = {cool: 'qwer'};

