const express = require('express');
const router = express.Router();
const path = require('path');


const database = require('../../database/index.js');



router.get('/vehicles/:vehicleId', (req, res)=>{
  res.sendFile(path.join(__dirname, '../../client/dist/vehicleStats/vehicleStats.html'));
});

router.get('/vehicles/:vehicleId/data', (req, res)=>{

  database.getVehicleDataById(req.params.vehicleId)
  .then((results)=>{
    res.send(results[0]);
  });
});

router.delete('/vehicles/:vehicleId/delete', (req, res)=>{
  database.deleteVehicle(req.params.vehicleId)
  .then(()=>{
    res.send('success');
  });
});

module.exports = router;