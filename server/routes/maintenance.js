const express = require('express');
const router = express.Router();

const {formatDateTime} = require('../helperFunctions.js');

const database = require('../../database/functions/maintenance.js');

/*
{
  mileage: int,
  dateAdded: date,
  dateOccured: date,
  partIds: [int]
}
*/
router.post('/vehicles/:id_Vehicles/data/maintenance', (req, res)=>{

  req.body.dateAdded = formatDateTime(req.body.dateAdded);
  req.body.dateOccured = formatDateTime(req.body.dateOccured);

  database.addMaintenanceEntry(req.body)
  .then((response)=>{
    res.send(response);
  })
  .catch((err)=>{
    res.send(err);
  });
});

router.get('/vehicles/:id_Vehicles/data/maintenance', (req, res)=>{
  database.getMaintenanceEntriesByVehicleId(req.params.id_Vehicles)
  .then((data)=>{
    res.send(data);
  })
  .catch((err)=>{
    res.send(err);
  });
});


module.exports = router;