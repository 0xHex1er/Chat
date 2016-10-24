module.exports.run = function (balancer) {
    balancer.addMiddleware(balancer.MIDDLEWARE_CONNECTION, function (socket, next) {
        // // You can use whatever logic you want in order to decide whether or
        // // not to process this connection
        // if (...) {
        //     // Allow connection to go through
        //     next();
        // } else {
        //     // Block connection
        //     next('Blocked connection from client with IP: ' + socket.remoteAddress);
        // }

        // var client_ip = socket.remoteAddress;
        // console.log(client_ip);
        console.log('ok');
        next();
    });
};