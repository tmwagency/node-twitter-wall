
/*!
 * Module dependencies.
 */

var async = require('async')


/**
 * Expose routes
 */

module.exports = function (app, twitter) {

	console.log(twitter.globalState.tags);

	app.get('/', function(req, res) {
        res.render('index', {
        	title : 'Twitter Streaming Wall',
        	tags : twitter.globalState.tags
        });
	});

}
