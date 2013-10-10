module.exports = function (grunt) {
	"use strict";

	grunt.initConfig({

		jshint: {
			all: ['app/**/*.js']
		},

		uglify: {
			dist: {
				src: 'app/**/*.js',
				dest: 'dist/app.min.js'
			},
			options: {
				banner: '/*\n * (c) Christian Gärtner 2013\n * MDGTechnik AngularJS Frontend.\n * License: All rights reserved\n * Build on <%= grunt.template.today("yyyy-mm-dd") %>\n */\n',
				mangle: false
			}
		},
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.registerTask('default', ['jshint', 'uglify']);
};