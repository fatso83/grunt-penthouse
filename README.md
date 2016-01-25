# grunt-penthouse
> A grunt plugin based on [Penthouse](http://www.npmjs.org/package/penthouse) that extracts 
> [critical path css](https://web.archive.org/web/20150410030803/http://addyosmani.com/blog/tag/critical-path-css/) to increase
> page speed rendering

[![NPM version](https://badge.fury.io/js/grunt-penthouse.svg)](http://badge.fury.io/js/grunt-penthouse)
[![Build Status](https://travis-ci.org/fatso83/grunt-penthouse.svg?branch=master)](https://travis-ci.org/fatso83/grunt-penthouse)

## Getting Started

Install the plugin 

```shell
npm install grunt-penthouse --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-penthouse');
```

### Configure the Grunt task

In your project's Gruntfile, add a section named `penthouse` to the data object 
passed into `grunt.initConfig()`.

#### Example

```js
grunt.initConfig({
  penthouse: {
    extract : {
        outfile : '.tmp/out.css',
        css : './dist/css/full.css',
        url : 'http://localhost:9000',
        width : 1300,
        height : 900,
        skipErrors : false // this is the default
    },
  },
});
```

See the setup in the Gruntfile for this plugin for an example setup of how one can use
this plugin with the `connect` plugin to automatically extract critical css as a step
in an automatic build process.

## Other tips
The resulting css file needs to be embedded in the head of the html files you are serving
to your clients. This can either be done dynamically at runtime 
(e.g. `include` in your `index.php` file), or as a part of your build process - 
building it into your html files. One plugin that can help you achieve this is 
the [grunt-codekit plugin](http://github.com/fatso83/grunt-codekit)

See its README for an example on how to achieve this.

## Release History
- v0.1.1 First working release
- v0.1.2 Updated to penthouse version 0.2.5
- v0.2.1 Updated to penthouse version 0.3.0
- v0.3.0 Added `skipErrors` option. Range version for Penthouse.
