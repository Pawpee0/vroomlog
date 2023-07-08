const mysql = require('mysql2');

//connect to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'vroomLog'
});

async function initializeDatabase () {
  await connection.execute(`CREATE TABLE IF NOT EXISTS Vehicles (
    id int NOT NULL AUTO_INCREMENT,
    year int NOT NULL,
    make text,
    model text,
    PRIMARY KEY (id)
  )`);

  await connection.execute(`CREATE TABLE IF NOT EXISTS MileageEntries (
    id int NOT NULL AUTO_INCREMENT,
    carId int NOT NULL,
    mileage int NOT NULL,
    dateAdded datetime NOT NULL,
    dateOccured date NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (carId) REFERENCES Vehicles(id)
  )`);

  await connection.execute(`CREATE TABLE IF NOT EXISTS ServiceEntries (
    id int NOT NULL AUTO_INCREMENT,
    carId int NOT NULL,
    description text,
    dateAdded datetime NOT NULL,
    dateOccured date NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (carId) REFERENCES Vehicles(id)
  )`);
}

initializeDatabase();


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

module.exports = database;