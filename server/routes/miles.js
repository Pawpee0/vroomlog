const express = require('express');
const router = express.Router();
const path = require('path');


const miles = require('../../database/functions/miles.js');
const vehicles = require('../../database/functions/vehicles.js');

const {formatDateTime} = require('../helperFunctions.js');

router.get('/vehicles/:vehicleId/miles', (req, res)=>{
  res.sendFile(path.join(__dirname, '../../client/dist/private/vehicleMiles/vehicleMiles.html'));
});

router.get('/vehicles/:id_Vehicles/data/miles', async (req, res)=>{

  var id_Vehicles = req.params.id_Vehicles

  Promise.all([
    vehicles.getVehicleDataById(id_Vehicles),
    miles.getMileageEntriesByVehicleId(id_Vehicles),
  ])
  .then((values)=>{
    res.send({
      ...values[0][0],
      mileageEntries: values[1],
    })
  })
  .catch((err)=>{
    res.status(400).send('error');
  })
});


/*
{
  mileage: int,
  dateAdded: Date ISO string,
  dateOccured: Date ISO string
}
*/
router.post('/vehicles/:id_Vehicles/data/miles', async (req, res)=>{

  if (new Date(req.body.dateOccured) > new Date()) {
    res.status(400).send('Your date is invalid');
  } else {
    //add entry to database
    miles.addMileageEntry(req.params.id_Vehicles, req.body)
    .then((response)=>{
      res.status(200).send('Data was successfully saved');
    })
    .catch((err)=>{
      res.status(400).send('Invalid data');
    });

  }
});

module.exports = router;