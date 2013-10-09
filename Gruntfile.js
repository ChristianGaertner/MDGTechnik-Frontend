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
				banner: '/* (c) Christian Gärtner 2013 MDGTechnik AngularJS Frontend. Build on <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.registerTask('default', ['jshint', 'uglify']);
};