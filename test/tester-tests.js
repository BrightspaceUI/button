var verifyElementDimensions = function( elemConstructor ) {
	var elem;

	beforeEach( function () {
		jasmine.addMatchers(d2l.vui.matchers.jasmine);
		elem = elemConstructor();
		document.body.appendChild(elem);
	});

	it( 'has correct styles', function() {
		var diff = d2l.vui.differs.diffDefaultStyle( elem );
		var recordPath = d2l.vui.records.getElementRecordPath( elem, ['disabled'] );
		var exceptions = {};

		if( d2l.vui.differs.isUserAgentOS("Linux") ) {
			exceptions = {
				"width" : "37px",
				"-webkit-perspective-origin" : "23px 14px",
				"-webkit-transform-origin" : "23px 14px"
			};
		}

		expect( diff ).toMatchRecordedObjectAt( recordPath, exceptions );
	});

	afterEach( function() {
		document.body.removeChild(elem);
	});
};
