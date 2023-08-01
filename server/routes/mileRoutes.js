const express = require('express');
const router = express.Router();

const database = require('../../database/index.js');


router.get('/vehicles/:vehicleId/data/miles', (req, res)=>{
  database.getMileageEntriesByCarId(req.params.vehicleId)
  .then((results)=>{
    res.send(results);
  });
});

router.post('/vehicles/:vehicleId/data/miles', (req, res)=>{
  console.log('running');
  database.addMileageEntry(req.body)
  .then(()=>{
    res.send('success');
  })
  .catch((err)=>{
    res.send(err);
  });

});

module.exports = router;