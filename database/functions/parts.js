const connection = require('../index.js');
const database = {};


/*
{
  id_Vehicles: int,
  name: text,
  description: text,
  link: text
}
*/
database.addPart = function (data){
  return new Promise(async function(fulfill, reject){
    try{
      var response = await connection.execute(`INSERT INTO Parts (id_Vehicles, name, description, link)
      VALUES (${data.id_Vehicles}, ${data.name}, ${data.description}, ${data.link})`);
      fulfill(200);
    }
    catch(err){
      reject(err);
    }
  });
};

module.exports = database;