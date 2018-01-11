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
	/*firefoxWindows: new SauceBrowserFactory({
		browser: 'Firefox',
		platform: 'WIN10'
	}),*/
	ie11Windows: new SauceBrowserFactory({
		browser: 'internet explorer',
		version: '11',
		platform: 'WIN10'
	}),
	edgeWindows: new SauceBrowserFactory({
		browser: 'microsoftedge',
		platform: 'WIN10',
		tags: ['no-d2l-shadow']
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
		platform: 'SIERRA',
		tags: ['no-d2l-shadow']
	}),
	firefoxMac: new SauceBrowserFactory({
		browser: 'Firefox',
		platform: 'SIERRA',
		tags: ['no-d2l-shadow']
	})
};

var mainlineEndpoint = 'http://localhost:8081/components/d2l-button';
var xEndpoint = 'http://localhost:8000/components/d2l-button';
var buttonEndpoint = '/test/acceptance/button.html';
var buttonSpec = 'test/acceptance/button.gspec';
var floatingButtonsEndpoint = '/test/acceptance/floating-buttons.html';
var floatingButtonsSpec = 'test/acceptance/floating-buttons.gspec';

polymerTests(browsers, function(test) {

	function runTests(name, baseEndpoint) {
		test(name + '-button', {
			endpoint: baseEndpoint + buttonEndpoint + '?wc-shadydom',
			spec: buttonSpec,
			size: '1024x768',
			tags: ['desktop']
		});

		test.shadow(name + '-button-shadow', {
			endpoint: baseEndpoint + buttonEndpoint + '?dom=shadow',
			spec: buttonSpec,
			size: '1024x768',
			tags: ['desktop']
		});

		test(name + '-floating-buttons-desktop', {
			endpoint: baseEndpoint + floatingButtonsEndpoint + '?wc-shadydom',
			spec: floatingButtonsSpec,
			size: '1024x768',
			tags: ['desktop']
		});

		test.shadow(name + '-floating-buttons-desktop-shadow', {
			endpoint: baseEndpoint + floatingButtonsEndpoint + '?dom=shadow',
			spec: floatingButtonsSpec,
			size: '1024x768',
			tags: ['desktop']
		});

		test(name + '-floating-buttons-mobile', {
			endpoint: baseEndpoint + floatingButtonsEndpoint,
			spec: floatingButtonsSpec,
			size: '320x490',
			tags: ['mobile']
		});
	}

	runTests('mainline', mainlineEndpoint);
	runTests('1.x', xEndpoint);
});
