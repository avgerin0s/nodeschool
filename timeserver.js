var net = require('net');
var strftime = require('strftime');

var fmt = "%Y-%m-%d %H:%M";

var port = process.argv[2];

var server = net.createServer(function(socket) {
  var date = new Date();
  socket.end(strftime(fmt, date));
});

server.listen(port);
