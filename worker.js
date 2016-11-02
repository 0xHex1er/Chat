var fs = require('fs');
var path = require('path');
var async = require('async');
var ObjectID = require('mongodb').ObjectID;
var chunk = require('chunk');

var temp_message = [];
var maxLength = 20;
var current_socket;

// ---------------------------[ Open Connection MongoDB ]-----------------------------
var connect_db;
//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');
//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;
// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/chat_development';
// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
  if(!err){
    connect_db = db;
    console.log(' Connect DB : ', process.pid);
  }
});
// ----------------------------------------------------------------------------------



// -----------------------------------[ Queue ]--------------------------------------
var q = async.queue(function(arr_chunk, callback) {
  console.log('-------------------- Q --------------------');
  var arr_data = JSON.parse(arr_chunk);
  for(i=0; i<=arr_data.length-1; i++){
    arr_data[i].room_id = ObjectID(arr_data[i].room_id);
  }
  insert_message(arr_data, function(data, current_socket){
    current_socket.global.publish('recieve_chat_store', data);
  });
  callback();
},1);

q.drain = function() {
  console.log('all items have been processed');
};
// ----------------------------------------------------------------------------------

var readTempMsg = function(){
  console.log('');
  console.log('------------------- Set Interval [PID : ' + process.pid + ']-------------------');
  if(temp_message.length > 0){
    perform_task(temp_message, function(chunk_data, callback){
      for(i=0;i<=chunk_data.length-1;i++){
        console.log('    [+] Array Chunk[' + i + '] <' + chunk_data[i].length + '> ');
        // console.log(chunk_data[i]);
        callback(JSON.stringify(chunk_data[i]));
      }
    });
  }
};
setInterval(readTempMsg, 2000);

var perform_task = function(data, callback){
  console.log('---------------------------------------------------------------------');
  console.log(' >>>> perform task () <<<<< ');
  console.log(' all message : ' + data.length);


  if(data.length>0){
    var chunkArray = chunk(data, maxLength);
    temp_message = [];
    callback(chunkArray, function(arr_chunk){

      // เพิ่ม array chunk() ลง Queue
      q.push(arr_chunk);

    });
  }
};



var insert_message = function(data, callback){
  console.log(' -------------- Insert -------------');
  // console.log(data);
  connect_db.collection("messages").insertMany(data , function(err, records) {
    if(!err){
      console.log('     |-  [✓] Insert Message : ' + data.length + ' [pid : ' + process.pid + ']');
      callback(data, current_socket);
    }else{
      console.log(' Error >>> ' + err);
    }
  });

};

var save_chat_message = function(socket, data) {
  console.log(data);
};


// var create_room = function(socket, data) {
//
//         connect_db.collection("rooms").find({'store': data.store, 'user': data.user}).toArray(function(err, results) {
//         if(err){
//           console.log(err);
//         }else{
//           console.log("");
//           console.log("==================[ Validate Rooom ]==================");
//           console.log(' [+] Room Count : ' + String(results.length));
//
//           if(results.length == 0){
//             connect_db.collection("rooms").insertOne({ roomname: data.store+'|'+data.user, store: data.store, user: data.user }, function(err, records) {
//               if(!err){
//                 console.log(' [✓] Create New Room !! ');
//                 // console.log(records.ops[0]._id);
//                 console.log('     |- Room ID : ', records.ops[0]._id);
//                 var new_data = {
//                   user: data.user,
//                   store: data.store,
//                   message: data.message,
//                   send_form: data.send_form,
//                   room_id: new ObjectID(records.ops[0]._id)
//                 };
//                 save_chat_message(socket, new_data);
//               }else{
//                 console.log(err);
//               }
//             });
//           }else{
//             console.log(' [✓] Room This Already !! ');
//             // console.log(results[0]);
//             console.log('     |- Room ID : ' + String(results[0]._id));
//             var new_data = {
//               user: data.user,
//               store: data.store,
//               message: data.message,
//               send_form: data.send_form,
//               room_id: new ObjectID(results[0]._id)
//             };
//             save_chat_message(socket, new_data);
//           }
//         }
//       });
//
// };

var check_room = function(socket, data){
  temp_message.push(data);
};












//--------------------------------------------------------------------------------------------------------------------//

module.exports.run = function (worker) {
  console.log('   >> Worker PID:', process.pid);

  var scServer = worker.scServer;

  scServer.on('connection', function (socket) {
    current_socket = socket;
    console.log(socket.id,'has connected');

    socket.on('chat_store', function(data){
      console.log('');
      console.log('=========== Chat Store =========');
      check_room(socket, data);
    });

    socket.on('disconnect', function(){
      console.log('=========== Disconnect =========');
    });
  });

  scServer.on('handshake', function(socket){
    console.log(' ========= HandShake ========');
  });

};


