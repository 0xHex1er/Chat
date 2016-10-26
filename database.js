var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectID = require('mongodb').ObjectID;

module.exports.url = 'mongodb://localhost:27017/chat_development';
module.exports.mongoclient = MongoClient;
module.exports.assert = assert;
module.exports.ObjectID = ObjectID;