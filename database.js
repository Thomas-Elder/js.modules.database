
var database = function(client, connectionURL){

  client.connect(connectionURL, function(err, db) {
    console.log(err);
    console.log("Connected correctly to server");
  
    db.close();
  }); 
};

module.exports = database;