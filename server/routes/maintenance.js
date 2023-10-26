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

  if (new Date(req.body.dateOccured) > new Date()) {
    res.status(400).send('Your date is invalid');
  } else {
    database.addMaintenanceEntry(req.body)
    .then((response)=>{
      res.send(response);
    })
    .catch((err)=>{
      res.status(400).send(err);
    });

  }
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