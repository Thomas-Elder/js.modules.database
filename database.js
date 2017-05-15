
var database = {};

database.connect = function(client, connectionURL, callback){

  client.connect(connectionURL, function(err, db) {
    console.log(err);
    console.log("Connected correctly to server");
  
    db.close();
    callback();
  });
};

module.exports = database;