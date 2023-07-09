const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(express.static('client/dist'));
app.use(bodyParser.json())

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
  database.addVehicle(req.body)
  .then(()=>{
    res.send('success');
  });
});