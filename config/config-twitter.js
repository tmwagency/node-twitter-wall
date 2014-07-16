module.exports = {
	local : {
		consumer_key: process.env['TWITTER_CONSUMER_KEY'] || require('./privconfig')['local']['consumer_key'],
		consumer_secret: process.env['TWITTER_CONSUMER_SECRET'] || require('./privconfig')['local']['consumer_secret'],
		access_token_key: process.env['TWITTER_ACCESS_TOKEN'] || require('./privconfig')['local']['access_token_key'],
		access_token_secret: process.env['TWITTER_ACCESS_SECRET'] || require('./privconfig')['local']['access_token_secret'],
	},
	dev : {
		consumer_key: '',
		consumer_secret: '',
		access_token_key: '',
		access_token_secret: ''
	},
	prod : {
		consumer_key: '',
		consumer_secret: '',
		access_token_key: '',
		access_token_secret: ''
	}
}