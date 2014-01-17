
var path = require('path'),
	rootPath = path.normalize(__dirname + '/..'), //sets root path
	config,
	sharedConfig;

var sharedConfig = {
	root: rootPath,
	db : {
		path: {}
	}
};

config = {
	local: {
		mode:	'local',
		port:	3003,
		app: {
			name: 'Twitter vote counter - local'
		},
		twitter: {
			consumer_key: 'INSERT_CONSUMER_KEY_HERE',
			consumer_secret: 'INSERT_CONSUMER_SECRET_HERE',
			access_token_key: 'INSERT_ACCESS_TOKEN_HERE',
			access_token_secret: 'INSERT_ACCESS_SECRET_HERE'
		},
		url:	'',
		global:	sharedConfig
	},

	development: {
		mode:	'dev',
		port:	3003,
		app: {
			name: 'Twitter vote counter - Dev'
		},
		twitter: {
			consumer_key: '',
			consumer_secret: '',
			access_token_key: '',
			access_token_secret: ''
		},
		global:	sharedConfig
	},

	staging: {
		mode:	'staging',
		port:	3003,
		app: {
			name: 'Twitter vote counter - Staging'
		},
		twitter: {
			consumer_key: '',
			consumer_secret: '',
			access_token_key: '',
			access_token_secret: ''
		},
		global:	sharedConfig
	},

	production: {
		mode:	'prod',
		port:	3003,
		app: {
			name: 'Twitter vote counter - Prod'
		},
		twitter: {
			consumer_key: '',
			consumer_secret: '',
			access_token_key: '',
			access_token_secret: ''
		},
		global:	sharedConfig
	},

	hosts: [
		{
			domain: 'twitter-wall.local',
			target: ['localhost:3003']
		}
	]
};


// Export config
module.exports = config;