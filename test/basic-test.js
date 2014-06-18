/*  Expected to be run after 'grunt penthouse' */
'use strict';

var read = require('fs').readFileSync
    , chai = require('chai')
    , should = chai.should();

chai.config.includeStack = true;

describe('Basic functionality tests', function () {

    var taskConfig;

    function stub() { }

    before(function() {
        // get the config
        require(__dirname + '/../Gruntfile.js')({
            loadTasks : stub,
            registerTask : stub,
            loadNpmTasks : stub,
            initConfig : function(config) {
                taskConfig = config.penthouse.testTask;
            }
        });
    });

    it('should produce a non-empty file', function() {
        read(taskConfig.outfile).should.not.be.empty;
    });

    it('should produce a file with the same content as the penthouse module', function(done) {
        var penthouse = require('penthouse');

        penthouse(taskConfig, function(result) {
            read(taskConfig.outfile).should.equal.result;
            done();
        });
    });

});
