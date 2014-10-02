/*
 * grunt-penthouse
 * https://github.com/fatso83/grunt-penthouse
 *
 * Copyright (c) 2014 Carl-Erik Kopseng
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
	var penthouse = require('penthouse');

	grunt.registerMultiTask('penthouse', 'Extracts critical path CSS', function () {

		// we don't check for errors in config, but leave the error reporting to penthouse
		var done = this.async(),
			options = this.data;

		penthouse(options, function (err, result) {
			if (err) {
				if (err.msg) { grunt.log.errorlns(err.msg); }
				done(false);
				return;
			}

			grunt.log.debug(result);

			grunt.file.write(options.outfile, result, {});
			done();
		});
	});
};
