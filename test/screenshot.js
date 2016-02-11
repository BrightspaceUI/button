var page = require('webpage').create();
page.viewportSize = {width: 1000, height: 1000};
page.open('./test/button.html', function() {
	var clipRect = page.evaluate(function () {
		return document.querySelector(".screenshot")
			.getBoundingClientRect();
	});
	page.clipRect = {
		top:    clipRect.top,
		left:   clipRect.left,
		width:  clipRect.width,
		height: clipRect.height
	};
	page.render('screenshot.png');
	phantom.exit();
});
