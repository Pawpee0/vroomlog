const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

const path = require('path');

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(bodyParser.json())

const database = require('../database/index.js');

app.get('/', (req, res)=>{
  res.send('hello');
});

app.get('/vehicles/:vehicleId', (req, res)=>{
  res.sendFile(path.join(__dirname, '../client/dist/vehicles/vehicleHistory.html'));
});

app.get('/vehicles/:vehicleId/data', (req, res)=>{

  database.getVehicleDataById(req.params.vehicleId)
  .then((results)=>{
    res.send(results[0]);
  });
});

app.get('/vehicleList', (req, res)=>{
  database.getVehiclesList()
  .then((results)=>{
    res.send(results);
  });
});

app.post('/vehicleList', (req, res)=>{
  database.addVehicle(req.body)
  .then(()=>{
    res.send('success');
  });
});

app.get('/vehicles/:vehicleId/mileData', (req, res)=>{
  database.getMileageEntriesByCarId(req.params.vehicleId)
  .then((results)=>{
    res.send(results);
  });
});

app.listen(port, ()=>{
  console.log('server running')
});