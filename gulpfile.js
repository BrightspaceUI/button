var gulp = require( 'gulp' ),
	vui = require( 'vui-helpers' );

gulp.task( 'clean', function() {
	return gulp.src( [ 'button.css' ], { read: false } )
		.pipe( vui.clean() );
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

gulp.task( 'test', function () {
	return vui.test(
			'test/karma.conf.js',
			'test/**/*Spec.js',
			'button.css'
		);
} );
