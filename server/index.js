const express = require('express');
const https = require('https');
const http = require('http');
const app = express();
const port = 3000;



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

app.use('/login', express.static(path.join(__dirname, '../client/dist/login')))
app.use('/', auth);
app.use('/', express.static(path.join(__dirname, '../client/dist')));





app.use('/user', users);
app.use('/', vehicleData);
app.use('/', miles);
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

// const options = {
//   key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
//   cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem'),
// };

http.createServer( app).listen(3000);
//https.createServer(options, app).listen(port);

// app.listen(port, ()=>{
//   console.log('server running')
// });