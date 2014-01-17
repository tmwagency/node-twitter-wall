/**
 * Module dependencies.
 */
var express = require('express')	//express - application framework for node
 	, fs = require('fs')			//fs - filesystem libraru
	, http = require('http')		//http - give me server
	, _ = require('underscore')		//underscore - some extra JS sugar
	, path = require('path');		//http://nodejs.org/docs/v0.4.9/api/path.html


/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

var env = process.env.NODE_ENV || 'local'		//get the environemnt var or set as development
	, config = require('./config/config')[env];	//get config based on the specifed environment


console.log('ENVIRONMENT = ' + env);


//  ================================
//  === EXPRESS SETUP AND CONFIG ===
//  ================================

//Create an express app
var app = express();

// express settings
require('./core/express')(app, config);


//Create the HTTP server with the express app as an argument
var server = http.createServer(app);

//Create the server
server.listen(app.get('port'), function(){
	console.log('app.js: Express server listening on port ' + app.get('port'));
});
server.on('close', function(socket) {
	console.log('app.js: Server has closed');
});


var twitter = require('./core/twitter')(app, server, config);

// Bootstrap routes
require('./core/routes')(app, twitter);



// expose app as the scope
exports = module.exports = app;


