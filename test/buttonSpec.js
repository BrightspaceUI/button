( function() {
	'use strict';

	describe( 'vui-button', function() {

		beforeEach( function() {
			document.documentElement.style.fontSize="20px";
		} );

		var createVUIButton = function( tag ) {
			var vuib = document.createElement( tag );
			vuib.className = 'vui-button';
			return vuib;
		};

		describe ( 'button', function() {
			verifyElementDimensions(
				function() {
					var btn = createVUIButton( 'button' );
					btn.innerHTML = "test";
					return btn;
				}
			);

			describe( 'disabled = true', function() {
				verifyElementDimensions(
					function() {
						var dis = createVUIButton( 'button' );
						dis.setAttribute("disabled", "true");
						dis.innerHTML = "test";
						return dis;
					}
				);
			} );
		} );


		describe ( 'input', function() {
			verifyElementDimensions(
				function() {
					var inp = createVUIButton( 'input' );
					inp.setAttribute("type", "button");
					inp.setAttribute("value", "test");
					return inp;
				}
			);

			describe( 'disabled = true', function() {
				verifyElementDimensions(
					function() {
						var dis = createVUIButton( 'input' );
						dis.setAttribute("type", "button");
						dis.setAttribute("disabled", "true");
						dis.setAttribute("value", "test");
						return dis;
					}
				);
			} );
		} );

	} );

} )();
