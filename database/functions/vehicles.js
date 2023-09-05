const connection = require('../index.js');

const database = {};

database.getUsersVehicles = function (id_Users){
  return new Promise(function(fulfill, reject){
    connection.execute(`SELECT * FROM Vehicles WHERE id_Users = ${id_Users}`, function(err, results, fields){

      if (err) {
        reject(err);
      } else {
        fulfill(results);
      }
    });
  });
};

/*
{
  id_Users
  year,
  make,
  model,
  color
}
*/
database.addVehicle = function (body) {
  return new Promise(function(fulfill, reject){
    connection.execute(`INSERT INTO Vehicles (id_Users, year, make, model, color)
    VALUES ("${body.id_Users}",${body.year}, "${body.make}", "${body.model}", "${body.color}")`, function(err, results, fields){

      if (err) {
        reject(err);
      } else {
        fulfill(200);
      }
    });
  });
}

/**                                                                    */
database.deleteVehicle = function (id) {
  return new Promise(function(fulfill, reject){
  });
}


database.getVehicleDataById = function (id) {
  return new Promise (function(fulfill, reject){
    connection.execute(`SELECT * FROM Vehicles WHERE id = ${id}`, function(err, results, fields){
      if (err) {
        reject(err);
      } else {
        fulfill(results);
      }
    });
  });
}

module.exports = database;