const mysql = require('mysql2');

//connect to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'vroomLog'
});

async function initializeDatabase () {

  await connection.execute(`CREATE TABLE IF NOT EXISTS Users (
    id char(128) NOT NULL,
    username text NOT NULL,
    session text,
    PRIMARY KEY (id)
  )`);


  await connection.execute(`CREATE TABLE IF NOT EXISTS Vehicles (
    id int NOT NULL AUTO_INCREMENT,
    id_Users char(128) NOT NULL,
    year int NOT NULL,
    make text NOT NULL,
    model text NOT NULL,
    color text,

    PRIMARY KEY (id),
    FOREIGN KEY (id_Users) REFERENCES Users(id)

  )`);

  await connection.execute(`CREATE TABLE IF NOT EXISTS MileageEntries (
    id int NOT NULL AUTO_INCREMENT,
    id_Vehicles int NOT NULL,
    mileage int NOT NULL,
    dateAdded datetime NOT NULL,
    dateOccured date NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (id_Vehicles) REFERENCES Vehicles(id)
  )`);

  await connection.execute(`CREATE TABLE IF NOT EXISTS MaintenanceEntries (
    id int NOT NULL AUTO_INCREMENT,
    id_Vehicles int NOT NULL,
    name text NOT NULL,
    description text,
    mileage int,

    dateAdded datetime NOT NULL,
    dateOccured date NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (id_Vehicles) REFERENCES Vehicles(id)
  )`);

  await connection.execute(`CREATE TABLE IF NOT EXISTS Reminders (
    id int NOT NULL AUTO_INCREMENT,
    id_Vehicles int NOT NULL,
    replaceAtMile int,
    replaceAtDate date,

    PRIMARY KEY (id),
    FOREIGN KEY (id_Vehicles) REFERENCES Vehicles(id)
  )`);

  await connection.execute(`CREATE TABLE IF NOT EXISTS Parts (
    id int NOT NULL AUTO_INCREMENT,
    id_Vehicles int NOT NULL,
    id_Reminders int,
    name text NOT NULL,
    descrition date,
    link text,

    PRIMARY KEY (id),
    FOREIGN KEY (id_Vehicles) REFERENCES Vehicles(id),
    FOREIGN KEY (id_Reminders) REFERENCES Reminders(id)
  )`);

  await connection.execute(`CREATE TABLE IF NOT EXISTS MaintenanceToParts (
    id int NOT NULL AUTO_INCREMENT,
    id_MaintenanceEntries int NOT NULL,
    id_Parts int NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (id_MaintenanceEntries) REFERENCES MaintenanceEntries(id),
    FOREIGN KEY (id_Parts) REFERENCES Parts(id)
  )`);


}

initializeDatabase();

module.exports = connection;