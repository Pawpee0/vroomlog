const express = require('express');
const router = express.Router();

const database = require('../../database/functions/parts.js');
/*
  id_Vehicles
  name: text,
  description: text,
  link: text
*/
router.post('/vehicles/:vehicleId/data/parts', async (req, res)=>{
  try{
    var response = await database.addPart({id_Vehicles: req.params.vehicleId, ...req.body});
    res.send(response);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;