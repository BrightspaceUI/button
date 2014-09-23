var gulp = require( 'gulp' ),
	vui = require( 'vui-helpers' );

gulp.task( 'clean', function( cb ) {
	vui.clean( [ 'dist/**/*', 'output' ] )
		.then( function() { cb(); } );
} );

gulp.task( 'css', function () {
	return vui.makeCss( 
		'src/**/*.style',
		'dist/', 
		{
			'lintOpts' : '.csslintrc'
		}
	);
} );

gulp.task( 'less', function () {
	return vui.makeLess( 'src/**/*.less', 'dist/' );
} );

gulp.task( 'default', [ 'clean' ], function() {
	gulp.start( 'css', 'less' );
} );

gulp.task( 'test', function () {
	return vui.test(
			'test/karma.conf.js',
			'test/**/*Spec.js',
			'dist/**/*.css'
		);
} );
