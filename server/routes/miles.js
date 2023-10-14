const express = require('express');
const router = express.Router();

const miles = require('../../database/functions/miles.js');
const vehicles = require('../../database/functions/vehicles.js');

const {formatDateTime} = require('../helperFunctions.js');

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
  //format the dates
  req.body.dateAdded = formatDateTime(req.body.dateAdded);
  req.body.dateOccured = formatDateTime(req.body.dateOccured);

  //add entry to database
  miles.addMileageEntry(id_Vehicles, req.body)
  .then((response)=>{
    res.send(response);
  })
  .catch((err)=>{
    res.send(err);
  });


});

module.exports = router;