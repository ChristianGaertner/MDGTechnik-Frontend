module.exports = function (grunt) {
	"use strict";

	grunt.initConfig({

		jshint: {
			all: ['app/**/*.js']
		},

		ngmin: {
			app: {
				src: ['app/*.js'],
				dest: 'dist/app/app.js'
			},
			controllers: {
				src: ['app/controller/*.js'],
				dest: 'dist/app/controllers.js'
			},
			directives: {
				src: ['app/directives/*.js'],
				dest: 'dist/app/directives.js'
			},
			services: {
				src: ['app/services/*.js'],
				dest: 'dist/app/services.js'
			},
			config: {
				src: ['app/config/*.js'],
				dest: 'dist/app/config.js'
			}
		},

		uglify: {
			dist: {
				src: 'dist/app/*.js',
				dest: 'dist/app.min.js'
			},
			options: {
				banner: '/*\n * (c) Christian Gärtner 2013\n * MDGTechnik AngularJS Frontend.\n * License: All rights reserved\n * Build on <%= grunt.template.today("yyyy-mm-dd") %>\n */\n'
			}
		},

		watch: {
			files: ['app/**/*.js', 'app/views/*.html', 'index.html'],
			tasks: ['jshint', 'ngmin', 'uglify'],
			options: {
				livereload: true
			}
		},
	});
	grunt.loadNpmTasks('grunt-ngmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('default', ['jshint', 'ngmin', 'uglify']);
};