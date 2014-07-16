Node Twitter Wall
=================

**[View the demo >](http://node-twitter-wall.herokuapp.com/)**

This builds on the initial demo - the [Node Basic Structure app](https://github.com/tmwagency/node-basic-setup).

This demo shows how to hook into the Twitter streaming API to make a Twitter wall – the same as you might see at a conference or event.

Building on the basic app's structure, it uses Desmond Morris' node-twitter library to connect to Twitter.

Note, that you will need to add your own Twitter API keys into the config in order for the application to work when run.  Details of how to create and add these are shown below.

## Creating your API Keys

To do this go to the [Twitter developer site](https://dev.twitter.com/), Sign in, and from the menu in the top right corner click on the 'My applications' option.

<img src="http://i.imgur.com/qPwQdoi.jpg" alt="Image to show the My applications option on the Twitter Devs site" />

Then click on create a new application in the top right of the screen, and fill out the 'Create an application' form.  Once this is done, scroll to the bottom of the page to 'Your access token' and click on the 'Create my access token' button.

<img src="http://i.imgur.com/uyAiZ86.jpg" alt="Image to show how to create Your Access tokens from the Twitter Dev site" />

The access token takes a few moments to be created, so give it a minute or so, refresh the page and you should see that Twitter has assigned your app an Access token.

There are then 4 values you need to make a note of on this page and add into the demo config.

- Consumer key
- Consumer secret
- Access token
- Access token secret

###Adding keys to a private config file (for local and development)

When working locally, it‘s a pain to have to declare environment variables each time you run your node application.  Instead, you can store them in a private config file, and access them that way.

Note that you should only do this in development – when running on a production server, it‘s a better idea to declare your environment variables through the command line ([see this article](http://himanshu.gilani.info/blog/2012/09/26/bootstraping-a-node-dot-js-app-for-dev-slash-prod-environment/)).

You can then add these to the application in a couple of ways.

An example private config file is located at `config/_privconfg.js`.  Remove the underscore from the beginning of the file name and then open the file in your text editor of choice.

Once opened, look for the following:

	local : {
		consumer_key: 'INSERT_CONSUMER_KEY_HERE',
		consumer_secret: 'INSERT_CONSUMER_SECRET_HERE',
		access_token_key: 'INSERT_ACCESS_TOKEN_KEY_HERE',
		access_token_secret: 'INSERT_ACCESS_TOKEN_SECRET_HERE'
	}

Replace the variables in CAPS with the values from your own created app.

Save the file and then run the node application in the usual way, by running `node index.js` on the command line.