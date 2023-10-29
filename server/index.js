const express = require('express');
const https = require('https');
const http = require('http');
const app = express();
const port = 3000;

require('dotenv').config();

const fs = require('node:fs');

const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


const auth = require('./authentication.js');
const users = require('./routes/users.js');
const miles = require('./routes/miles.js');
const vehicleData = require('./routes/vehicleData.js');
const parts = require('./routes/parts.js');
const maintenance = require('./routes/maintenance.js');

const fireBaseApp = require('./firebase.js');
const { getAuth } = require('firebase-admin/auth');



app.use(bodyParser.json())
app.use(cookieParser());
app.use((req, res, next)=>{console.log(req.originalUrl); next()})

//send login page files to anyone
app.get('/login', (req, res)=>{
  res.sendFile(path.join(__dirname, '../client/dist/login/index.html'));
})
app.get('/bundles/login.bundle.js', (req, res)=>{
  res.sendFile(path.join(__dirname, '../client/dist/bundles/login.bundle.js'));
});

//if they request anything other than the login files, they have to be a user
app.use('/', auth);
app.use('/', express.static(path.join(__dirname, '../client/dist')));



app.use('/user', users);
app.use('/', vehicleData);
app.use('/', miles);
app.use('/', parts);
app.use('/', maintenance);


if (process.env.HAS_SSL === 'true') {
  const options = {
    key: fs.readFileSync(process.env.SSL_KEY),
    cert: fs.readFileSync(process.env.SSL_CERT),
  };

  const redirect = express();

  redirect.use((req, res, next)=>{
    res.redirect(`https://${req.hostname}:443`)
  })

  http.createServer( redirect).listen(3000);

  https.createServer(options, app).listen(8080);

} else {
  http.createServer( app).listen(3000);
}




// app.listen(port, ()=>{
//   console.log('server running')
// });