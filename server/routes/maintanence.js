const express = require('express');
const router = express.Router();

const {formatDateTime} = require('../helperFunctions.js');


/*
{
  mileage: int,
  dateAdded: date,
  dateOccured: date,
  partIds: [int]
}
*/
router.post('/vehicles/:vehicleId/data/maintanence', (req, res)=>{

});


module.exports = router;