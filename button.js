$( function() { 
	$.widget( 'vui.vui_button', {

		_create: function() {

			var $node = $( this.element );

			var offscreenText = $node.children( '.vui-offscreen' ).text();
			var title = $node.prop( 'title' );
			var hasTitle = title !== undefined && title.length > 0;

			if( offscreenText.length > 0 && !hasTitle ) {
				this.element.data( 'autoUpdateTitleWithText', true );
				$node.prop( 'title', offscreenText );
			}

			if( !$node.is( 'a' ) ) {
				return;
			}

			var isDisabled = $node.hasClass( 'vui-disabled' );

			$node.attr( 'role', 'button' )
				.prop( 'tabIndex', isDisabled ? -1 : 0 )
				.bind( 'keypress', function( e ) {
					if( e.keyCode === 13 ) {
						$( this ).trigger('click');
					}
				} );

			if( isDisabled ) {
				$node.attr( 'aria-disabled', 'true' );
			}

		},

		getText: function() {

			var $node = $( this.element );

			var text;
			if( $node.is( 'input' ) ) {
				text = $node.val().trim();
				return text;
			}

			text = $node.text().trim();
			return text;

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

		processingEnd: function() {

			var text = this.element.data( 'originalText' ) || this.getText();

			this.setText( text );
			this.setIsEnabled( true );

			return this;

		},

		processingStart: function() {

			this.setIsEnabled( false );

			this.element.data( 'originalText', this.getText() );

			var processingText = this.element.attr( 'data-processing-text' );
			if( processingText !== undefined && processingText.length > 0 ) {
				this.setText( processingText );
			}

			return this;

		},

		setIsEnabled: function( isEnabled ) {

			var $node = $( this.element );
			if( $node.is( 'a' ) ) {

				$node.toggleClass( 'vui-disabled', !isEnabled )
					.attr( 'aria-disabled', isEnabled ? 'false' : 'true' )
					.prop( 'tabIndex', isEnabled ? 0 : -1 );

			} else {
				if( isEnabled ) {
					$node.removeAttr( 'disabled' );
				} else {
					$node.attr( 'disabled', 'disabled' );
				}
			}

			return this;

		},

		setText: function( text ) {

			if( this.element.data( 'autoUpdateTitleWithText' ) ) {
				this.element.prop( 'title', text );
			}

			if( this.element.is( 'input' ) ) {
				this.element.val( text );
				return;
			}

			var offscreen = this.element.children( '.vui-offscreen' );
			if( offscreen.length === 1 ) {
				$( offscreen[0] ).text( text );
				return;
			}

			this.element.contents().filter( function() {
					return this.nodeType === 3;
				} ).last().each( function() {
					this.data = text;
				} );

		}

	} );

	vui.addClassInitializer(
			'vui-button',
			function( node ) {
				$( node ).vui_button();
			}
		);

} );