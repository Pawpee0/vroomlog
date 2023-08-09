const connection = require('../index.js');

const database = {};

database.getMileageEntriesByVehicleId = function (id_Vehicles) {
  return new Promise (function(fulfill, reject){
    connection.execute(`SELECT * FROM MileageEntries WHERE id_Vehicles = ${id_Vehicles}`, function(err, results, fields){
      if (err) {
        reject (err);
      } else {
        fulfill(results);
      }
    });
  });
}

/*
{
  id_Vehicles: int,
  mileage: int,
  dateAdded: date,
  dateOccured: date
}
*/
database.addMileageEntry = function (data){
  return new Promise (function(fulfill, reject){
    connection.execute(`INSERT INTO MileageEntries (id_Vehicles, mileage, dateAdded, dateOccured)
    VALUES (${inputData.id_Vehicles}, ${inputData.mileage}, "${inputData.dateAdded}", "${inputData.dateOccured}")`, function(err, results, fields){
      if (err) {
        console.log(err);
        reject(err);

      } else {
        fulfill(200);
      }
    });
  });
}

module.exports = database;