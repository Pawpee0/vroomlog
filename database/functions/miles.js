const connection = require('../index.js');

const database = {};

/*
{
  id_Vehicles: int,
  mileage: int,
  dateAdded: date,
  dateOccured: date
}
*/
database.addMileageEntry = function (id_Vehicles, inputData){
  return new Promise (function(fulfill, reject){
    connection.execute(`INSERT INTO MileageEntries (id_Vehicles, mileage, dateAdded, dateOccured)
    VALUES (${id_Vehicles}, ${inputData.mileage}, DATE("${inputData.dateAdded}"), DATE("${inputData.dateOccured}"))`, function(err, results, fields){
      if (err) {
        reject(err);
      } else {
        fulfill(200);
      }
    });
  });
}

database.getMileageEntriesByVehicleId = function (id_Vehicles) {
  return new Promise (function(fulfill, reject){
    connection.execute(`SELECT * FROM MileageEntries WHERE id_Vehicles = ${id_Vehicles} ORDER BY dateOccured`, function(err, results, fields){
      if (err) {
        reject (err);
      } else {
        fulfill(results);
      }
    });
  });
}

//checks if the date and mileage is possible based on if the mileage is less than the next entry and more than the last entry
database.isValidMileage = function (id_Vehicles, date, mileage) {
  return new Promise (function(fulfill, reject){
    connection.execute(`SELECT COUNT(*) from MileageEntries WHERE id_Vehicles = ${id_Vehicles} AND
    ((DATE('${date}') < dateOccured AND ${mileage} < mileage) OR (dateOccured < DATE('${date}') AND mileage < ${mileage}))
    UNION (SELECT COUNT(*) from MileageEntries WHERE id_Vehicles = ${id_Vehicles});`,
    function(err, results, fields){
      if (err) {
        reject ('Please try again.');
      } else {
        if (results.length === 1) {
          fulfill(true);
        } else {
          fulfill(false);
        }
      }
    })
  });
}
module.exports = database;