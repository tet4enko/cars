var express = require('express');

var server = express();

server.use('/cars', express.static(__dirname + '/public'));

server.listen(80);