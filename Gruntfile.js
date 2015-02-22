/*
 * grunt-penthouse
 * https://github.com/carl-erik.kopseng/grunt-penthouse
 *
 * Copyright (c) 2014 Carl-Erik Kopseng
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

	// Autoload tasks from dependencies
	require('load-grunt-tasks')(grunt);

	// Project configuration.
	grunt.initConfig({

		jshint    : {
			all     : [
				'Gruntfile.js',
				'tasks/*.js'
			],
			options : {
				jshintrc : '.jshintrc'
			}
		},

		// Before generating any new files, remove any previously-created files.
		clean     : {
			tests : ['.tmp']
		},

		// Configuration to be run (and then tested).
		penthouse : {
			testTask : {
				outfile : '.tmp/out.css',
				css     : 'test/www/main.css',
				url     : 'http://localhost:9001',
				width   : 1300,
				height  : 900
			}
		},

		// Unit tests.
		mochaTest : {
            options : {
                timeout : 8000
            },
			tests : ['test/*test.js']
		},

		connect : {
			server : {
				options : {
					port : 9001,
					base : 'test/www'
				}
			}
		},

		watch : {
			dev : {
				files : ['Gruntfile.js', 'package.json', 'tasks/*.js'],
				tasks : ['jshint', 'penthouse']
			},

			logic : {
				files : ['tasks/*.js'],
				tasks : ['test']
			},

			test : {
				files : ['test/**'],
				tasks : ['test']
			}

		}

	});

	// Actually load this plugin's task(s).
	grunt.loadTasks('tasks');

	// Whenever the "test" task is run, first clean the ".tmp" dir, then run this
	// plugin's task(s), then test the result.
	grunt.registerTask('test', ['clean', 'connect', 'penthouse', 'mochaTest']);

	// By default, lint and run all tests.
	grunt.registerTask('default', ['jshint', 'test']);
};
