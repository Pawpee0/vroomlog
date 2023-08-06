const express = require('express');
const router = express.Router();

const database = require('../../database/index.js');

const {formatDateTime} = require('../helperFunctions.js');

router.get('/vehicles/:vehicleId/data/miles', (req, res)=>{
  database.getMileageEntriesByCarId(req.params.vehicleId)
  .then((results)=>{
    res.send(results);
  });
});


/*
{
  carId: int,
  mileage: int,
  dateAdded: Date ISO string,
  dateOccured: Date ISO string
}
*/
router.post('/vehicles/:vehicleId/data/miles', (req, res)=>{
  //format the dates
  req.body.dateAdded = formatDateTime(req.body.dateAdded);
  req.body.dateOccured = formatDateTime(req.body.dateOccured);

  //add entry to database
  database.addMileageEntry(req.body)
  .then(()=>{
    res.send('success');
  })
  .catch((err)=>{
    res.send(err);
  });

});

module.exports = router;