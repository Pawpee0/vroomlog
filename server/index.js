const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('client/dist'));

const database = require('../database/index.js');

app.get('/', (req, res)=>{
  res.send('hello');
});

app.listen(port, ()=>{
  console.log('server running')
});


app.get('/vehicleList', (req, res)=>{
  database.getVehiclesList()
  .then((results)=>{
    res.send(results);
  });
});

app.post('/vehicleList', (req, res)=>{
  res.send('hello');
});