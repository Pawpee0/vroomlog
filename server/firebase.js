const { initializeApp } = require('firebase-admin/app');

// Initialize Firebase
const app = initializeApp({
  credential: process.env.GOOGLE_APPLICATION_CREDENTIALS
});
