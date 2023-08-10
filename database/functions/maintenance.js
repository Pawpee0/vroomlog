const connection = require('../index.js');
const database = {};


/*
{
  id_Vehicles
  mileage,
  dateAdded,
  dateOccured
}
*/
database.addMaintenanceEntry = function(data){
  return new Promise(function (fulfill, reject){
    try {
      var response = await connection.execute(`INSERT INTO MaintenanceEntries (id_Vehicles, mileage, dateAdded, dateOccured)
      VALUES (${data.id_Vehicles}, ${data.mileage}, "${data.dateAdded}", "${data.dateOccured}")`);
      fulfill(response);
    }
    catch (err) {
      reject (err);
    }
  });
};

database.getMaintenanceEntriesByVehicleId = function(id_Vehicles) {
  return new Promise(function (fulfill, reject){
    try {
      var response = await connection.execute(`SELECT * FROM MaintenanceEntries WHERE id_Vehicles = ${id_Vehicles}`);
      fulfill(response);
    }
    catch(err) {
      reject(err);
    }
  });
}


module.exports = database;