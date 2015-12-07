var verifyElementDimensions = function( elemConstructor ) {
	var elem;

	beforeEach( function () {
		jasmine.addMatchers( vui.jasmine.dom.matchers );
		elem = elemConstructor();
		document.body.appendChild(elem);
	});

	it( 'has correct outer height', function() {
		expect( elem.offsetHeight ).toBeOnAgent(
			{ default: { default: 40, Windows: 40 } }
		);
	} );

	it( 'has correct inner height', function() {
		expect( elem.clientHeight ).toBeOnAgent(
			{ default: { default: 38, Windows: 38 } }
		);
	} );

	it( 'has correct margins' , function() {
		expect( elem ).toHaveMargin( '0px' );
	} );

	it( 'responds to font change Arial 11', function() {
		document.body.style.fontFamily="Arial";
		document.body.style.fontSize="11px";
		expect( elem.offsetHeight ).toBe( 40 );
	} );

	afterEach( function() {
		document.body.removeChild(elem);
	});

};
