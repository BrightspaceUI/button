$( function() { 
	$.widget( 'vui.vui_button', { 

		options: {},

		_create: function() {

			var $node = $( this.element );
			if( $node.is( 'a' ) ) {

				$node.attr( 'role', 'button' );

				if( $node.hasClass( 'vui-disabled' ) ) {
					$node.attr( 'aria-disabled', 'true' );
				}

			}

		},

		_setOption: function( key, value ) {
		},

		isEnabled: function() {

			var isEnabled;

			var $node = $( this.element );
			if( $node.is( 'a' ) ) {
				isEnabled = !$node.hasClass( 'vui-disabled' );
			} else {
				isEnabled = $node.attr( 'disabled' ) === undefined;
			}

			return isEnabled;

		},

		setIsEnabled: function( isEnabled ) {

			var $node = $( this.element );
			if( $node.is( 'a' ) ) {

				$node.toggleClass( 'vui-disabled', !isEnabled )
					.attr( 'aria-disabled', isEnabled ? 'false' : 'true' );

			} else {
				if( isEnabled ) {
					$node.removeAttr( 'disabled' );
				} else {
					$node.attr( 'disabled', 'disabled' );
				}
			}

			return this;

		}

	} );

	vui.addClassInitializer(
			'vui-button',
			function( node ) {
				$( node ).vui_button();
			}
		);

} );