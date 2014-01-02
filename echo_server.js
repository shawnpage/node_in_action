u = require('util');
var net = require('net');
var server = net.createServer(function(socket) {
  // socket.once('data', function(data) {
  socket.on('data', function(data) {
    console.log('data: ' + u.inspect(data));
    socket.write(data);
  });
});
server.listen(8888);
