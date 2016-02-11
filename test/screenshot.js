var page = require('webpage').create();
page.open('./test/button.html', function() {
	page.clipRect = {
		top:    20,
		left:   180,
		width:  480,
		height: 175
	};
	page.render('screenshot.png');
	phantom.exit();
});
