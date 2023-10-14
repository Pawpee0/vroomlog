const express = require('express');
const router = express.Router();
const path = require('path');


const vehicles = require('../../database/functions/vehicles.js');
const miles = require('../../database/functions/miles.js');
const maintenance = require('../../database/functions/maintenance.js');



router.get('/vehicles/:vehicleId', (req, res)=>{
  res.sendFile(path.join(__dirname, '../../client/dist/vehicleStats/vehicleStats.html'));
});

router.get('/vehicles/:id_Vehicles/data', async (req, res)=>{

  var id_Vehicles = req.params.id_Vehicles

  Promise.all([
    vehicles.getVehicleDataById(id_Vehicles),
    miles.getMileageEntriesByVehicleId(id_Vehicles),
    maintenance.getMaintenanceEntriesByVehicleId(id_Vehicles)
  ])
  .then((values)=>{
    res.send({
      ...values[0][0],
      mileageEntries: values[1],
      maintenanceEntries: values[2]
    })
  })

});

router.delete('/vehicles/:vehicleId/delete', (req, res)=>{
  vehicles.deleteVehicle(req.params.vehicleId)
  .then(()=>{
    res.send('success');
  });
});

module.exports = router;