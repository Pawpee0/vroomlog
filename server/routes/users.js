const express = require('express');
const router = express.Router();
const path = require('path');

const database = require('../../database/functions/users.js');
const {addVehicle, getUsersVehicles} = require('../../database/functions/vehicles.js');


const {getAuth} = require('firebase-admin/auth');
const {app} = require('../firebase.js');




/*
req.body = {
  year,
  make,
  model,
  color
}
*/
router.post('/vehicles/list', async(req, res)=>{
  try{
    var response = await addVehicle(req.body);
    res.send(response);
  }
  catch(err) {
    res.send(err);
  }
});

router.get('/:userId/vehicles/list', async(req, res)=>{
  try{
    var response = await getUsersVehicles(req.params.userId)
    res.send(response);
  }
  catch(err) {
    res.send(err);
  }
});

module.exports = router;