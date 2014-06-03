
/*!
 * Module dependencies.
 */

var async = require('async')


/**
 * Expose routes
 */

module.exports = function (app, twitter) {

	app.get('/', function(req, res) {
        res.render('index', {
        	title : 'Twitter Streaming Wall',
        	tags : twitter.globalState.tags
        });
	});

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

}
