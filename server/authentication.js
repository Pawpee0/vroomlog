const express = require('express');
const router = express.Router();

const app = require('./firebase.js');
const { getAuth } = require('firebase-admin/auth');

const database = require('../database/functions/users.js');
const {addUser} = require('../database/functions/users.js');


/*
{
  id: string(128)
  username: String
}
*/

//adds a user to our database
router.post(`/users/addUser`, async (req, res)=>{

  //verify that the id is valid
  getAuth(app)
  .verifyIdToken(req.body.id)
  .then((decodedToken)=>{
    const uid = decodedToken.uid;

    //add the user to our database
    addUser({id: decodedToken.uid, username: req.body.username})
    .then((response)=>{
      res.sendStatus(response);
    })
    .catch((err)=>{
      res.send(err);
    })
  })
  .catch((err)=>{res.send(err)});
});

//gets a session cookie token
router.post('/sessionLogin', (req, res)=>{
  // Get the ID token passed and the CSRF token.
  const idToken = req.body.idToken.toString();
  // Set session expiration to 5 days.
  const expiresIn = 60 * 60 * 24 * 5 * 1000;
  // Create the session cookie. This will also verify the ID token in the process.
  // The session cookie will have the same claims as the ID token.
  // To only allow session cookie setting on recent sign-in, auth_time in ID token
  // can be checked to ensure user was recently signed in before creating a session cookie.
  getAuth(app)
    .createSessionCookie(idToken, { expiresIn })
    .then(
      (sessionCookie) => {
        // Set cookie policy for session cookie.
        const options = { maxAge: expiresIn, httpOnly: true, secure: true };
        res.cookie('session', sessionCookie, options);
        res.end(JSON.stringify({ status: 'success' }));
      },
      (error) => {
        res.status(401).send('UNAUTHORIZED REQUEST!');
      }
    );
});

//deletes cookie
router.get('/sessionLogout', (req, res) => {
  res.clearCookie('session');
  res.redirect('/login');
});

//verify if the request is from a computer that is logged in
router.use((req, res, next) => {

  const sessionCookie = req.cookies.session || '';
      // Verify the session cookie. In this case an additional check is added to detect
      // if the user's Firebase session was revoked, user deleted/disabled, etc.
      getAuth(app)
        .verifySessionCookie(sessionCookie, true /** checkRevoked */)
        .then((decodedClaims) => {
          req.body.id_Users = decodedClaims.uid;
          next();
        })
        .catch((error) => {
          // Session cookie is unavailable or invalid. Force user to login.
          res.redirect('/login/');
        });
});





module.exports = router;