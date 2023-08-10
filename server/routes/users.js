const express = require('express');
const router = express.Router();
const path = require('path');

const database = require('../../database/functions/users.js');
const {addVehicle, getUsersVehicles} = require('../../database/functions/vehicles.js');

/*
{
  name: String
}
*/

//       user/addUser
router.post(`/addUser`, async (req, res)=>{
  try{
    var response = await database.addUser(req.body);
    res.send(response);
  }
  catch(err){
    res.send(err);
  }
});


/*
req.body = {
  year,
  make,
  model,
  color
}
*/
router.post('/:userId/vehicles/list', async(req, res)=>{
  try{
    var response = await addVehicle({id_Users: req.params.userId, ...req.body});
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