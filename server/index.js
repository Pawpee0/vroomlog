const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const path = require('path');

const auth = require('./authentication.js');
const users = require('./routes/users.js');
const miles = require('./routes/miles.js');
const vehicleData = require('./routes/vehicleData.js');
const parts = require('./routes/parts.js');
const maintenance = require('./routes/maintenance.js');

const fireBaseApp = require('./firebase.js');
const { getAuth } = require('firebase-admin/auth');


var sessionVal = function (req, res, next){
  const sessionCookie = req.cookies.session || '';
      console.log('cookies', sessionCookie);
      // Verify the session cookie. In this case an additional check is added to detect
      // if the user's Firebase session was revoked, user deleted/disabled, etc.
      getAuth(fireBaseApp)
        .verifySessionCookie(sessionCookie, true /** checkRevoked */)
        .then((decodedClaims) => {
          next();
        })
        .catch((error) => {
          // Session cookie is unavailable or invalid. Force user to login.
          res.redirect('/login/');
        });
};


app.use(bodyParser.json())
app.use(cookieParser());
app.use((req, res, next)=>{console.log(req.originalUrl); next()})

app.use('/login', express.static(path.join(__dirname, '../client/dist/login')))
app.use('/', auth);

app.use(sessionVal);
app.use('/', express.static(path.join(__dirname, '../client/dist')));





app.use('/users', users);
app.use('/', miles);
app.use('/', vehicleData);
app.use('/', parts);
app.use('/', maintenance);


app.get('/vehicleList', (req, res)=>{
  database.getVehiclesList()
  .then((results)=>{
    res.send(results);
  });
});

/*
{
  year: int,
  make: text,
  model: text
}
*/

app.post('/vehicleList', (req, res)=>{
  database.addVehicle(req.body)
  .then(()=>{
    res.send('success');
  });
});


app.listen(port, ()=>{
  console.log('server running')
});