const express = require('express');
const router = express.Router();
const path = require('path');


const miles = require('../../database/functions/miles.js');
const vehicles = require('../../database/functions/vehicles.js');

const {formatDateTime} = require('../helperFunctions.js');

router.get('/vehicles/:vehicleId/miles', (req, res)=>{
  res.sendFile(path.join(__dirname, '../../client/dist/private/vehicleMiles/vehicleMiles.html'));
});

router.get('/vehicles/:vehicleId/data/miles', (req, res)=>{
  miles.getMileageEntriesByVehicleId(req.params.vehicleId)
  .then((results)=>{
    res.send(results);
  })
  .catch((err)=>{
    res.send(err);
  });
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
    //format the dates
    req.body.dateAdded = formatDateTime(req.body.dateAdded);
    req.body.dateOccured = formatDateTime(req.body.dateOccured);

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