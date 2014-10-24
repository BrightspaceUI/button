var gulp = require( 'gulp' ),
	del = require( 'del' ),
	runSequence = require( 'run-sequence' );
	vui = require( 'vui-helpers' ),
	tester = require('vui-karma-jasmine-tester');

gulp.task( 'clean', function( cb ) {
	del([ 'button.css' ], cb);
} );

gulp.task( 'css', function () {
	return vui.makeCss(
		'button.css.less',
		'button.css',
		{ 'lintOpts' : '.csslintrc' }
	);
} );

gulp.task( 'default', [ 'clean' ], function() {
	gulp.start( 'css' );
} );

gulp.task( 'test', function() {
	runSequence( 'helper-test', 'tester-test' );
} );

gulp.task( 'helper-test', function () {
	return vui.test( {
	files: [
			'test/helper-tests.js',
			'test/**/*Spec.js',
			'button.css'
		]
	});
} );

gulp.task( 'tester-test', function() {
	return tester.test( {
		files: [
			'test/tester-tests.js',
			'test/**/*Spec.js',
			'button.css'
		]
	});
} );

gulp.task( 'ergen', function () {
	return tester.test( {
		files: [
			'test/tester-tests.js',
			'test/**/*Spec.js',
			'button.css'
		]
	}, true );
} );
