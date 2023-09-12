const express = require('express');
const router = express.Router();

const database = require('../../database/functions/miles.js');

const {formatDateTime} = require('../helperFunctions.js');

router.get('/vehicles/:vehicleId/data/miles', (req, res)=>{
  database.getMileageEntriesByVehicleId(req.params.vehicleId)
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
router.post('/vehicles/:idVehicles/data/miles', (req, res)=>{
  //format the dates
  req.body.dateAdded = formatDateTime(req.body.dateAdded);
  req.body.dateOccured = formatDateTime(req.body.dateOccured);

  //add entry to database
  console.log(req.body);
  database.addMileageEntry(req.body)
  .then((response)=>{
    res.send(response);
  })
  .catch((err)=>{
    res.send(err);
  });

});

module.exports = router;