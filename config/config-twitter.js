module.exports = {
	local : {
		consumer_key: process.env['TWITTER_CONSUMER_KEY'],
		consumer_secret: process.env['TWITTER_CONSUMER_SECRET'],
		access_token_key: process.env['TWITTER_ACCESS_TOKEN'],
		access_token_secret: process.env['TWITTER_ACCESS_SECRET']
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