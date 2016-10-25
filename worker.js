var fs = require('fs');
var path = require('path');

module.exports.run = function (worker) {
  console.log('   >> Worker PID:', process.pid);


  var scServer = worker.scServer;


  /*
    In here we handle our incoming realtime connections and listen for events.
  */
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
      console.log(data);
      socket.global.publish('recieve_chat_store', data);
    });

    socket.on('disconnect', function(){
      console.log('=========== Disconnect =========');
      socket.global.unsubscribe('chat_store');
    });

  });


};
