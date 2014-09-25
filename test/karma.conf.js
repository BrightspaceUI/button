module.exports = function( config ) {
	'use strict';

	config.set( {
		autoWatch: false,
		basePath: '../',
		browsers: ['PhantomJS'],
		exclude: [],
		frameworks: ['jasmine'],
		junitReporter : {
			outputFile: 'output/test/unit.xml',
			suite: 'unit'
		},
		plugins : [
			'karma-chrome-launcher',
			'karma-jasmine',
			'karma-junit-reporter',
			'karma-firefox-launcher',
			'karma-phantomjs-launcher',
			'karma-script-launcher'
		],
		reporters: ['progress','junit']
	} );
};