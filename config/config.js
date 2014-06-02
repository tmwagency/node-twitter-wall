
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
		twitter: require('./privconfig-twitter')['local'],
		url:	'',
		global:	sharedConfig
	},

	dev: {
		mode:	'dev',
		port:	3003,
		app: {
			name: 'Twitter vote counter - Dev'
		},
		twitter: require('./privconfig-twitter')['dev'],
		global:	sharedConfig
	},

	prod: {
		mode:	'prod',
		port:	3003,
		app: {
			name: 'Twitter vote counter - Prod'
		},
		twitter: require('./privconfig-twitter')['prod'],
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