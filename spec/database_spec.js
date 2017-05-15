
var client = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27018/data';

var database = require('../database');

describe('database', function(){

  beforeEach(function(){});
  afterEach(function(){});

  describe('connection', function(){
    it('should connect to the test database', function(done){
      database.connect(client, url, function(){
        expect(true).toBe(true);
        done();
      });
    });
  });

  describe('read', function(){
    
  });

  describe('create', function(){
    
  });

  describe('update', function(){
    
  });

  describe('delete', function(){
    
  });
});