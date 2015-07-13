var express = require('express');
var path = require('path');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var socket = require('./socket.js');

app.get('/', function(req, res){
  res.sendfile('index.html');
});

app.use(express.static(path.join(__dirname, 'public')));

io.sockets.on('connection', socket);

http.listen(4000, function(){
  console.log('listening on *:4000');
});
