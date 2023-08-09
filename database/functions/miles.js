const connection = require('../index.js');

const database = {};

database.getMileageEntriesByCarId = function (carId) {
  return new Promise (function(fulfill, reject){
    connection.execute(`SELECT * FROM MileageEntries WHERE carId = ${carId}`, function(err, results, fields){
      if (err) {
        reject (err);
      } else {
        fulfill(results);
      }
    });
  });
}

database.addMileageEntry = function (inputData){
  return new Promise (function(fulfill, reject){
    connection.execute(`INSERT INTO MileageEntries (carId, mileage, dateAdded, dateOccured)
    VALUES (${inputData.carId}, ${inputData.mileage}, "${inputData.dateAdded}", "${inputData.dateOccured}")`, function(err, results, fields){
      if (err) {
        console.log(err);
        reject(err);

      } else {
        fulfill('success');
      }
    });
  });
}

module.exports = database;