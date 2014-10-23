( function() {
	'use strict';

	var verifyElementDimensions = function( elemConstructor ) {
		var styles;
		var elem;

		beforeEach( function () {
			jasmine.addMatchers(d2l.vui.matchers.jasmine);
			elem = elemConstructor();
			document.body.appendChild(elem);
		});

		it( 'has correct styles', function() {
			var diff = d2l.vui.differs.diffDefaultStyle( elem );
			expect( diff ).toMatchRecordedObject( d2l.vui.records.getElementRecordPath( elem, ['disabled'] ));
		});

		xit( 'has correct outer height', function() {
			expect( elem.offsetHeight ).toBeOnAgent(
				{ default: { default: 29, Windows: 28 } }
			);
		} );

		xit( 'has correct inner height', function() {
			expect( elem.clientHeight ).toBeOnAgent(
				{ default: { default: 27, Windows: 26 } }
			);
		} );

		xit( 'has correct margins' , function() {
			expect( elem ).toHaveMargin( '0px' );
		} );

		xit( 'responds to font change Arial 11', function() {
			document.body.style.fontFamily="Arial";
			document.body.style.fontSize="11px";
			expect( elem.offsetHeight ).toBe( 28 );
		} );

		xit( 'responds to font change Arial 13', function() {
			document.body.style.fontFamily="Arial";
			document.body.style.fontSize="13px";
			expect( elem.offsetHeight ).toBeOnAgent(
				{ default: { default: 29, Windows: 28 } }
			);
		} );

		xit( 'responds to font change Arial 15', function() {
			document.body.style.fontFamily="Arial";
			document.body.style.fontSize="15px";
			expect( elem.offsetHeight ).toBeOnAgent(
				{ default: { default: 32, Windows: 29 }, Firefox: { default: 31 } }
			);
		} );

		xit( 'responds to font change Arial 17', function() {
			document.body.style.fontFamily="Arial";
			document.body.style.fontSize="17px";
			expect( elem.offsetHeight ).toBeOnAgent(
				{ default: { default: 34, Windows: 32 }, Firefox: { default: 33 } }
			);
		} );

		xit( 'responds to font change Verdana 11', function() {
			document.body.style.fontFamily="Verdana";
			document.body.style.fontSize="11px";
			expect( elem.offsetHeight ).toBe( 28 );
		} );

		xit( 'responds to font change Verdana 13', function() {
			document.body.style.fontFamily="Verdana";
			document.body.style.fontSize="13px";
			expect( elem.offsetHeight ).toBeOnAgent(
				{ default: { default: 29, Windows: 28 }, Firefox: { default: 29 } }
			);
		} );

		xit( 'responds to font change Verdana 15', function() {
			document.body.style.fontFamily="Verdana";
			document.body.style.fontSize="15px";
			expect( elem.offsetHeight ).toBeOnBrowser( { 'default' : 30, 'Firefox' : 32 } );
		} );

		xit( 'responds to font change Verdana 17', function() {
			document.body.style.fontFamily="Verdana";
			document.body.style.fontSize="17px";
			expect( elem.offsetHeight ).toBeOnAgent(
				{ default: { default: 33, Windows: 32 }, Firefox: { default: 34 }, Chrome: { default: 33 } }
			);
		} );

		afterEach( function() {
			document.body.removeChild(elem);
		} );
	};

	describe( 'vui-button', function() {

		beforeEach( function() {
			document.body.style.fontFamily="Arial";
			document.body.style.fontSize="13px";
		} );

		var createVUIButton = function( tag ) {
			var vuib = document.createElement( tag );
			vuib.className = 'vui-button';
			return vuib;
		};

		describe ( 'anchor', function() {

			verifyElementDimensions(
				function() {
					var anc = createVUIButton( 'a' );
					anc.innerHTML = "test";
					return anc;
				}
			);

			describe( 'vui-disabled', function() {
				verifyElementDimensions(
					function() {
						var dis = createVUIButton( 'a' );
						dis.className += " vui-disabled";
						dis.innerHTML = "test";
						return dis;
					}
				);
			} );
		} );


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
