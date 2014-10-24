var verifyElementDimensions = function( elemConstructor ) {
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

	afterEach( function() {
		document.body.removeChild(elem);
	});
};
