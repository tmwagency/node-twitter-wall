module.exports = function (grunt) {

	'use strict';

	// ====================
	// == Edit this section
	var jsFileList = [
		'public/js/socket.io.js',
		'public/js/underscore-min.js',
		'public/js/script.js'
	];
	var distDir = 'public/js/dist/';
	var jsFile = 'script.min.js';
	// ====================
	// ====================

	// Project configuration.
	grunt.initConfig({
		pkg: require('./package'),

		jshint: {
			all: jsFileList,
			options: {
				jshintrc: '.jshintrc'
			}
		},

		// Choose Sass files below
		sass: {
			dev: {
				options: {
					unixNewlines: true,
					style: 'expanded',
					lineNumbers: false,
					debugInfo : false,
					precision : 8,
					sourcemap : true
				},
				files: {
					'public/css/kickoff.css': 'public/scss/kickoff.scss'
				}
			},
			deploy: {
				options: {
					style: 'compressed'
				},
				files: {
					'public/css/kickoff.min.css': 'public/scss/kickoff.scss'
				}

			}
		},

		uglify: {
			options: {
				// mangle: Turn on or off mangling
				mangle: true,

				// beautify: beautify your code for debugging/troubleshooting purposes
				beautify: false,

				// report: Show file size report
				report: 'gzip',

				// sourceMap: @string. The location of the source map, relative to the project
				sourceMap: distDir + jsFile + '.map',

				// sourceMappingURL: @string. The string that is printed to the final file
				sourceMappingURL: jsFile +'.map',

				// sourceMapRoot: @string. The location where your source files can be found. This sets the sourceRoot field in the source map.
				sourceMapRoot: '../../'

				// sourceMapPrefix: @integer. The number of directories to drop from the path prefix when declaring files in the source map.
				// sourceMapPrefix: 1,

			},
			js: {
				src: jsFileList,
				dest: distDir + jsFile
			}
		},

		watch: {
			scss: {
				files: ['public/scss/**/*.scss'],
				tasks: 'sass:dev'
			},

			js: {
				files: [
					'Gruntfile.js',
					'public/js/**/*.js',
					'public/js/libs/**/*.js'
				],
				tasks: ['uglify']
			},
			livereload: {
				options: { livereload: true },
				files: [
					'public/css/*.css'
				]
			}
		}
	});

	// Load some stuff
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-devtools');

	// =============
	// === Tasks ===
	// =============
	// A task for development
	grunt.registerTask('dev', ['uglify', 'sass:dev']);

	// A task for deployment
	grunt.registerTask('deploy', ['uglify', 'sass:deploy']);

	// Default task
	grunt.registerTask('default', ['uglify', 'sass:dev']);

};
