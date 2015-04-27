// Setup express server
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = process.env.PORT || 3002;
// for more info about process.env.PORT
// http://stackoverflow.com/questions/18864677/what-is-process-env-port-in-node-js

server.listen(port, function() {
	console.log('Server is running at port:', port);
});