var gulp = require( 'gulp' ),
	vui = require( 'vui-helpers' );

gulp.task( 'clean', function( cb ) {
	vui.clean( [ 'dist/**/*', 'lib', 'output' ] )
		.then( function() { cb(); } );
} );

gulp.task( 'css', [ 'less-dependencies' ], function () {
	return vui.makeCss( 
		'src/**/*.style',
		'dist/', 
		{ 
		  'lintOpts' : '.csslintrc'
		}
	);
} );

gulp.task( 'less-dependencies', function () {
	return gulp.src( 'node_modules/gradient-stylist/src/*.less' )
		.pipe( gulp.dest( 'lib/' ) );
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
