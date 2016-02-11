var page = require('webpage').create();
page.viewportSize = {width: 1000, height: 1000};
page.open('./test/button.html', function() {
	var clipRect = page.evaluate(function () {
		return document.querySelector(".screenshot")
			.getBoundingClientRect();
	});
	console.log(clipRect.top, clipRect.left, clipRect.width, clipRect.height);
	page.clipRect = {
		top:    clipRect.top,
		left:   clipRect.left,
		width:  clipRect.width,
		height: clipRect.height
	};
	page.render('screenshot.png');
	phantom.exit();
});
