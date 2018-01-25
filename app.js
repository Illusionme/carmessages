var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var apiController = require('./controllers/apiController');
//var logger = require('global-request-logger');


var port = process.env.PORT || 3000;

app.use('/', express.static(__dirname + '/public'));

mongoose.connect(config.getDbConnectionString());

apiController(app);


app.listen(port);