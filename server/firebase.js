require('dotenv').config();

const admin = require('firebase-admin');

const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);
const googleCredentials = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS)

// Initialize Firebase
const app = admin.initializeApp({
  credential: admin.credential.cert(googleCredentials)
});

module.exports = app;
