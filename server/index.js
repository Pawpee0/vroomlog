const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

const path = require('path');

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(bodyParser.json())

app.use((req, res, next)=>{console.log(req.originalUrl); next()})

const database = require('../database/databaseFunctions.js');

const mileRoutes = require('./routes/mileRoutes.js');
const vehicleData = require('./routes/vehicleData.js');

app.use('/', mileRoutes);
app.use('/', vehicleData);


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