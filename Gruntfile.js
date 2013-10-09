module.exports = function (grunt) {
	"use strict";

	grunt.initConfig({

		uglify: {
			dist: {
				src: 'app/routes.js',
				dest: 'dist/app.min.js'
			},
		}
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['uglify']);
};