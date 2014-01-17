
/**
 * Module dependencies.
 */

var express = require('express')
	, pkg = require('../package.json');

module.exports = function (app, config) {

	app.set('showStackError', true);

	// should be placed before express.static - compressed with gzip
	app.use(express.compress({
		filter: function (req, res) {
			return /json|text|javascript|css/.test(res.getHeader('Content-Type'));
		},
		level: 9
	}));

	// don't use logger for test env
	if (process.env.NODE_ENV !== 'test') {
		app.use(express.logger('dev'));
	}

	//app.use(express.favicon(__dirname + '../public/favicon.ico'));
	app.use(express.static(config.global.root + '/public'));

	// set views path, template engine and default layout
	app.set('views', config.global.root + '/app/views');
	app.set('view engine', 'jade');


	app.configure(function () {
		app.set('port', process.env.PORT || 3003);

		// expose package.json to views
		app.use(function (req, res, next) {
			res.locals.pkg = pkg;
			next();
		});

		// bodyParser should be above methodOverride
		app.use(express.bodyParser());
		app.use(express.methodOverride());

		// routes should be at the last
		app.use(app.router);

		// assume "not found" in the error msgs
		// is a 404. this is somewhat silly, but
		// valid, you can do whatever you like, set
		// properties, use instanceof etc.
		app.use(function(err, req, res, next){
			// treat as 404
			if (err.message
				&& (~err.message.indexOf('not found')
				|| (~err.message.indexOf('Cast to ObjectId failed')))) {
				return next();
			}

			// log it
			// send emails if you want
			console.error(err.stack);

			// error page
			res.status(500).render('500', { error: err.stack });
		});

		// assume 404 since no middleware responded
		app.use(function(req, res, next){
			res.status(404).render('404', {
				url: req.originalUrl,
				error: 'Not found'
			});
		});
	});

	// development env config
	app.configure('development', function () {
		app.locals.pretty = true;
	});

};
