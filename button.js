$( function() { 
	$.widget( 'vui.button', { 

		options: {},

		_create: function() {
		},

		_setOption: function( key, value ) {
		}

	} );

	vui.addClassInitializer(
			'vui-button',
			function( node ) {
				$( node ).button();
			}
		);

} );