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
  return new Promise(async function (fulfill, reject){
    connection.execute(`INSERT INTO MaintenanceEntries (id_Vehicles, name, description, mileage, dateAdded, dateOccured)
      VALUES (${data.id_Vehicles}, "${data.name}", "${data.description}", ?, DATE("${data.dateAdded}"), DATE("${data.dateOccured}"))`,
      [data.mileage],
      (err, results, fields)=>{
        if (err) {
          reject(err);
        } else {
          fulfill(results);
        }
      })
  });
};

database.getMaintenanceEntriesByVehicleId = function(id_Vehicles) {
  return new Promise(function (fulfill, reject){
    connection.execute(`SELECT * FROM MaintenanceEntries WHERE id_Vehicles = ${id_Vehicles} ORDER BY dateOccured DESC`, (err, results, fields)=>{
      if (err) {
        reject(err);
      } else {
        fulfill(results);
      }
    })

  });
}


module.exports = database;