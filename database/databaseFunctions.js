const connection = require('./index.js');

const database = {};

database.getVehiclesList = function (){
  return new Promise(function(fulfill, reject){
    connection.execute(`SELECT * from Vehicles`, function(err, results, fields){

      if (err) {
        reject(err);
      } else {
        fulfill(results);
      }
    });
  });
};

database.addVehicle = function (body) {
  return new Promise(function(fulfill, reject){
    connection.execute(`INSERT INTO Vehicles (year, make, model)
    VALUES (${body.year}, "${body.make}", "${body.model}")`, function(err, results, fields){

      if (err) {
        reject(err);
      } else {
        fulfill('success');
      }
    });
  });
}

database.deleteVehicle = function (id) {
  return new Promise(function(fulfill, reject){
    connection.execute(`DELETE FROM ServiceEntries WHERE carId = ${id}`, function (err, results, fields){
      if (err) {
        reject(err);
      } else {
        connection.execute(`DELETE FROM MileageEntries WHERE carId =${id}`,function(err, results, fields){
          if (err) {
            reject(err);
          } else {
            connection.execute(`DELETE FROM Vehicles WHERE id =${id}`,function(err, results, fields){
              if (err) {
                reject(err);
              } else {
                fulfill('success');
              }
            });
          }
        });
      }
    });
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

database.addServiceEntry = function (inputData){
  return new Promise (function (fulfill, reject){
    connection.execute(`INSERT INTO ServiceEntries (carId, name, description, dateAdded, dateOccured)
    VALUES (${inputData.carId}, "${inputData.name}", "${inputData.description}", "${inputData.dateAdded}", "${dateOccured}")`, function (err, results, fields){
      if (err) {
        reject(err);
      }
      else {
        fulfill('success');
      }
    });
  });
}

module.exports = database;