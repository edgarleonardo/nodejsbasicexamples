var http = require('http');
var socketio = require('socket.io');
var fs = require('fs');

var handler = function(req, res) {
    fs.readFile(__dirname + '/index.html', function(err, data) {
        if (err) {
            res.writeHead(500);
            return res.end('Error loading index.html');
        } else {
            res.writeHead(200);
            res.end(data);
        }
    });
};

var app = http.createServer(handler);
var io = socketio.listen(app);
var maxTime = 1000;
io.sockets.on('connection', function (socket) {
  setInterval(function() {
    var timestamp = Date.now();
    console.log('Emitted: ' + timestamp);
    socket.emit('timer', timestamp);
    
    console.log('Random Number: ' + timestamp);
    var waitTime = Math.floor(Math.random()*(maxTime+1));
    socket.emit('message', waitTime.toString());
  }, 2000);
  socket.on('submit', function(data) {
    console.log('Submitted: ' + data);
  });
});

// use process.env.PORT and process.env.IP for Cloud9
// or replace with your port and (optionally) IP as necessary
app.listen(process.env.PORT || 3000, process.env.IP);

console.log('Server running!');