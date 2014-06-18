# grunt-penthouse
> A grunt plugin based on [Penthouse](npmjs.org/package/penthouse) that extracts [critical path css](http://addyosmani.com/blog/tag/critical-path-css/)

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

## The "penthouse" task

### Overview
In your project's Gruntfile, add a section named `penthouse` to the data object passed into `grunt.initConfig()`.

### Usage Example

```js
grunt.initConfig({
  penthouse: {
    extract : {
	outfile : '.tmp/out.css',
	css : './dist/css/full.css',
	url : 'http://localhost:9000',
	width : 1300,
	height : 900
    },
  },
});
```

## Release History
None yet
