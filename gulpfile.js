var gulp = require( 'gulp' ),
	vui = require( 'vui-helpers' );

var lintOpts = { 
	"adjoining-classes": false,
 	'unqualified-attributes': false
};

gulp.task( 'clean', function() {
	return vui.clean( [ 'dist/**/*', 'lib' ] );
} );

gulp.task( 'css', function () {
	return vui.makeCss( 
		'src/**/*.style',
		'dist/', 
		{ 'lintOpts' : lintOpts }
	);
} );

gulp.task( 'less', function () {
	return vui.makeLess( 'src/**/*.less', 'dist/' );
} );

gulp.task( 'default', [ 'clean' ], function() {
	gulp.start( 'css', 'less' );
} );