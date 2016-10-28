var fs = require('fs');
var path = require('path');
var async = require('async');
var ObjectID = require('mongodb').ObjectID;
var chunk = require('chunk');

var queueData = [];
var maxLength = 200;
var count = 0;
var dataInQueue = [];

var setQueue = function(data,callback){
    dataInQueue = dataInQueue.concat(data);
    queueData=[];
    callback();
};

var setDataToQueue = function(data, callback) {
  console.log("data in queue");
  console.log(queueData.length);

  if (queueData.length > 0) {
    setQueue(queueData, function () {
      var dataChunk = chunk(dataInQueue,maxLength)

      for(var i=0;i<=dataChunk.length;i++)
      {
        if(typeof dataChunk[i] != 'undefined'){
          q.push([{objectData:dataChunk[i]}],function() {
            console.log("push data in queue");
          });
        }
      }
      dataInQueue = [];
    });
  }
};
setInterval(setDataToQueue, 12000,"send to function");



var save_chat_message = function(socket, db, data) {
  // create a queue object with concurrency 2
  var q = async.queue(function(message, callback) {
    db.collection("messages").insertOne(message, function(err, records) {
      if(err){
        console.log('insert error !!! : ', err);
      }else {
        console.log(' [✓] Save Message Success : ' + message.message);
        socket.global.publish('recieve_chat_store', message);
      }
      db.close();
    });
  }, 2);

  // add some items to the queue
  q.push(data, function(){ concole.log('ok'); });

  // assign a callback
  q.drain = function() {
    console.log(' [✓] Insert All Message Complete !! ');
  };

};


var create_room = function(socket, data) {
  //lets require/import the mongodb native drivers.
  var mongodb = require('mongodb');

  //We need to work with "MongoClient" interface in order to connect to a mongodb server.
  var MongoClient = mongodb.MongoClient;

  // Connection URL. This is where your mongodb server is running.
  var url = 'mongodb://localhost:27017/chat_development';

  // Use connect method to connect to the Server
  MongoClient.connect(url, function (err, db) {
    if (err) {
      console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
      //HURRAY!! We are connected. :)
      console.log('Connection established to', url);

      db.collection("rooms").find({'store': data.store, 'user': data.user}).toArray(function(err, results) {
        if(err){
          console.log(err);
        }else{
          console.log("");
          console.log("==================[ Validate Rooom ]==================");
          console.log(' [+] Room Count : ' + String(results.length));

          if(results.length == 0){
            db.collection("rooms").insertOne({ roomname: data.store+'|'+data.user, store: data.store, user: data.user }, function(err, records) {
              if(!err){
                console.log(' [✓] Create New Room !! ');
                // console.log(records.ops[0]._id);
                console.log('     |- Room ID : ', records.ops[0]._id);
                var new_data = {
                  user: data.user,
                  store: data.store,
                  message: data.message,
                  send_form: data.send_form,
                  room_id: new ObjectID(records.ops[0]._id)
                };
                save_chat_message(socket, db, new_data);
              }else{
                console.log(err);
              }
            });
          }else{
            console.log(' [✓] Room This Already !! ');
            // console.log(results[0]);
            console.log('     |- Room ID : ' + String(results[0]._id));
            var new_data = {
              user: data.user,
              store: data.store,
              message: data.message,
              send_form: data.send_form,
              room_id: new ObjectID(results[0]._id)
            };
            save_chat_message(socket, db, new_data);
          }
        }
      });


    }
  });

};
















//--------------------------------------------------------------------------------------------------------------------//

module.exports.run = function (worker) {
  console.log('   >> Worker PID:', process.pid);

  var scServer = worker.scServer;

  scServer.on('connection', function (socket) {
    console.log(socket.id,'has connected');

    socket.on('chat_store', function(data){
      console.log('=========== Chat Store =========');
      dataInQueue = dataInQueue.concat(data);
      create_room(socket, data);
    });

    socket.on('disconnect', function(){
      console.log('=========== Disconnect =========');
    });
  });

  scServer.on('handshake', function(socket){
    console.log(' ========= HandShake ========');
  });

};


