var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/data';

var database = require('./database');

database(mongo, url);