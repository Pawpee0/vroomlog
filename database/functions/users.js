const connection = require('../index.js');

const database = {};


/*
{
  name: string
}
*/
database.addUser = function (data){
  return new Promise(async function(fulfill, reject){
    try{
      await connection.execute(`INSERT INTO Users (name) VALUES ("${data.name}")`)
      fulfill(200);
    }
    catch(err){
      reject(err);
    }
  });
}


module.exports = database;