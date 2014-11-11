var verifyElementDimensions = function( elemConstructor ) {
	var elem;

	beforeEach( function () {
		jasmine.addMatchers(vui.matchers.jasmine);
		elem = elemConstructor();
		document.body.appendChild(elem);
	});

	it( 'has correct styles', function() {
		var diff = vui.differs.dom.diffDefaultStyle( elem );
		var recordPath =vui.records.getElementRecordPath( elem, ['disabled'] );
		var exceptions = {};

		if( vui.differs.dom.isUserAgentOS("Linux") ) {
			exceptions = {
				"width" : "47px",
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
