/* eslint no-invalid-this: 0 */
'use strict';

var browsers = {
	phantomjs: new LocalBrowserFactory({
		browser: 'chrome'
	}),
	chromeWindows: new SauceBrowserFactory({
		browser: 'Chrome',
		platform: 'WIN10'
	}),
	firefoxWindows: new SauceBrowserFactory({
		browser: 'Firefox',
		platform: 'WIN10'
	}),
	ie11Windows: new SauceBrowserFactory({
		browser: 'internet explorer',
		version: '11',
		platform: 'WIN10'
	}),
	edgeWindows: new SauceBrowserFactory({
		browser: 'microsoftedge',
		platform: 'WIN10'
	}),
	chromeMac: new SauceBrowserFactory({
		browser: 'Chrome',
		platform: 'SIERRA',
		/* crashes during screenshot command on > 2.24
			https://bugs.chromium.org/p/chromedriver/issues/detail?id=1770# */
		desiredCapabilities: {
			chromedriverVersion: '2.24'
		}
	}),
	safariMac: new SauceBrowserFactory({
		browser: 'Safari',
		platform: 'SIERRA'
	}),
	firefoxMac: new SauceBrowserFactory({
		browser: 'Firefox',
		platform: 'SIERRA'
	})
};

var buttonEndpoint = 'http://localhost:8080/components/d2l-button/test/acceptance/button.html';
var buttonSpec = 'test/acceptance/button.gspec';
var floatingButtonsEndpoint = 'http://localhost:8080/components/d2l-button/test/acceptance/floating-buttons.html';
var floatingButtonsSpec = 'test/acceptance/floating-buttons.gspec';

polymerTests(browsers, function(test) {

	test('button', {
		endpoint: buttonEndpoint,
		spec: buttonSpec,
		size: '1024x768',
		tags: ['desktop']
	});

	test.shadow('button-shadow', {
		endpoint: buttonEndpoint + '?dom=shadow',
		spec: buttonSpec,
		size: '1024x768',
		tags: ['desktop']
	});

	test('floating-buttons-desktop', {
		endpoint: floatingButtonsEndpoint,
		spec: floatingButtonsSpec,
		size: '1024x768',
		tags: ['desktop']
	});

	test.shadow('floating-buttons-desktop-shadow', {
		endpoint: floatingButtonsEndpoint + '?dom=shadow',
		spec: floatingButtonsSpec,
		size: '1024x768',
		tags: ['desktop']
	});

	test('floating-buttons-mobile', {
		endpoint: floatingButtonsEndpoint,
		spec: floatingButtonsSpec,
		size: '320x490',
		tags: ['mobile']
	});

});
