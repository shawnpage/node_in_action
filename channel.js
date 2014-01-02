var EventEmitter = require('events').EventEmitter;

var channel = new EventEmitter();

channel.on('join', function() {
    console.log("Welcome!");
});

channel.on('leave', function() {
    console.log("Bye.");
});

channel.emit('leave');
channel.emit('join');
