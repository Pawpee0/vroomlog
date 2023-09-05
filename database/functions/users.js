const connection = require('../index.js');

const database = {};


/*
{
  id: string (128)
  username: string
}
*/
database.addUser = function (data){
  return new Promise(async function(fulfill, reject){
    try{
      await connection.execute(`INSERT INTO Users (id, username, session) VALUES ("${data.id}", "${data.username}", "${data.session}")`)
      fulfill(200);
    }
    catch(err){
      console.log(err);
      reject(err);
    }
  });
}

// database.addSession = function (id, session){
//   return new Promise(async function (fulfill, reject){
//     try {
//       //add session to user in database
//       var response = await connection.execute(`UPDATE Users SET session = "${session}" WHERE Users.id = "${id}"`);
//       fulfill(200);
//     }
//     catch(err){
//       reject(err);
//     }
//   });
// }


module.exports = database;