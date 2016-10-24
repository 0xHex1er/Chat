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
    setTimeout(function() {
      console.log(socket.id,'is publishing to the broadcast channel');
      socket.global.publish('broadcast', {
        success:1,
        message:'Broadcast from ' + socket.id
      });
    },5000);

  });
};
