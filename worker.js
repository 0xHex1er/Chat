var fs = require('fs');
var path = require('path');


var create_room = function(data, callback) {
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

      db.collection("room").find({'store': data.store, 'user': data.user}).toArray(function(err, results) {
        if(err){
          console.log(err);
        }else{
          console.log("");
          console.log("============================================");
          console.log(' [+] Room Count : ' + String(results.length));
          console.log("");

          if(results.length == 0){
            console.log(' insert ');
            db.collection("room").insertOne({ roomname: data.store+'|'+data.user, store: data.store, user: data.user }, function(err, result) {
              if(!err){
                console.log('----------- Create Room Complete -----------');
                db.close();
                callback();
                //Close connection
              }else{
                console.log(err);
                db.close();
              }
            });
          }else{
            console.log(' not insert ');
            console.log('----------- Room This Already !! ---------');
            db.close();
            callback();
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
    console.log('============= Start ==============');
    console.log(socket.id,'has connected');

    // setTimeout(function() {
    //   console.log(socket.id,'is publishing to the broadcast channel');
    //
    //   socket.global.publish('broadcast', {
    //     success:1,
    //     message:'Broadcast from ' + socket.id
    //   });
    //
    // },2000);

    // var chat_storeChannel = worker.exchange.subscribe('chat_store');
    // chat_storeChannel.watch(function(data) {
    //   console.log('=========== Chat Store =========');
    //   console.log(chat_storeChannel.clientIds);
    //   socket.global.publish('recieve_chat_store', data);
    // });

    socket.on('chat_store', function(data){
      console.log('=========== Chat Store =========');

      create_room(data, function() { socket.global.publish('recieve_chat_store', data)});

    });

    socket.on('disconnect', function(){
      console.log('=========== Disconnect =========');
    });

  });


};


