
/**
 * Module dependencies.
 */

var express = require('express')
	, compress = require('compression')
	, logger  = require('morgan')
	, bodyParser = require('body-parser')
	, methodOverride = require('method-override')
	, pkg = require('../package.json');

module.exports = function (app, config) {

	app.set('showStackError', true);

	// should be placed before express.static - compressed with gzip
	app.use(compress({
		filter: function (req, res) {
			return /json|text|javascript|css/.test(res.getHeader('Content-Type'));
		},
		level: 9
	}));

	// don't use logger for test env
	if (process.env.NODE_ENV !== 'test') {
		app.use(logger('dev'));
	}

	//app.use(express.favicon(__dirname + '../public/favicon.ico'));
	app.use(express.static(config.global.root + '/public'));

	// set views path, template engine and default layout
	app.set('views', config.global.root + '/app/views');
	app.set('view engine', 'jade');


	app.set('port', process.env.PORT || 3003);

	// expose package.json to views
	app.use(function (req, res, next) {
		res.locals.pkg = pkg;
		next();
	});

	// bodyParser should be above methodOverride
	app.use(bodyParser());
	app.use(methodOverride());

	// development env config
	if (config.mode === 'local') {
		app.locals.pretty = true;
	}

};
