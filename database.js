
var mongo = require('mongodb').MongoClient;

// Connection URL 
var url = 'mongodb://localhost:27018/data';

// Use connect method to connect to the Server 
mongo.connect(url, function(err, db) {
  //assert.equal(null, err);
  console.log("Connected correctly to server");
 
  db.close();
});