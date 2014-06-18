/*
 * grunt-penthouse
 * https://github.com/fatso83/grunt-penthouse
 *
 * Copyright (c) 2014 Carl-Erik Kopseng
 * Licensed under the MIT license.
 */

'use strict';

var penthouse = require('penthouse'),
    path = require('path'),
    fs = require('fs-extra');

module.exports = function(grunt) {
    var pretty = function(o) {
        return JSON.stringify(o, null, "  ");
    };

    grunt.registerMultiTask('penthouse', 'Extracts critical path CSS', function() {

        // we don't check for errors in config, but leave the error reporting to penthouse
        var done = this.async(),
            options = this.data,
            outfile = path.normalize(this.data.outfile),
            dir=path.dirname(outfile);

            penthouse( options, function(err, result) {
                if(err) { 
                    if(err.msg) grunt.log.errorlns(err.msg); 
                    done(false); 
                    return;
                }

                grunt.log.debug(result);

                grunt.file.write(outfile, result, {});
                done();
            });
    });
};

