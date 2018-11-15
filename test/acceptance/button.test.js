/* eslint no-invalid-this: 0 */
'use strict';

var browsers = {
	phantomjs: new LocalBrowserFactory({
		browser: 'chrome',
		tags: ['not-edge']
	}),
	chromeWindows: new SauceBrowserFactory({
		browser: 'Chrome',
		platform: 'WIN10',
		tags: ['not-edge']
	}),
	ie11Windows: new SauceBrowserFactory({
		browser: 'internet explorer',
		version: '11',
		platform: 'WIN10',
		tags: ['not-edge']
	}),
	edgeWindows: new SauceBrowserFactory({
		browser: 'microsoftedge',
		platform: 'WIN10',
		tags: ['no-d2l-shadow']
	}),
	safariMac: new SauceBrowserFactory({
		browser: 'Safari',
		platform: 'SIERRA',
		tags: ['no-d2l-shadow', 'not-edge']
	}),
	firefoxMac: new SauceBrowserFactory({
		browser: 'Firefox',
		platform: 'SIERRA',
		tags: ['no-d2l-shadow', 'not-edge']
	})
};

var mainlineEndpoint = 'http://localhost:8081/components/d2l-button';
var buttonEndpoint = '/test/acceptance/button.html';
var buttonSpec = 'test/acceptance/button.gspec';
var buttonSubtleEndpoint = '/test/acceptance/button-subtle.html';
var buttonSubtleSpec = 'test/acceptance/button-subtle.gspec';
var buttonIconEndpoint = '/test/acceptance/button-icon.html';
var buttonIconSpec = 'test/acceptance/button-icon.gspec';
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

		test(name + '-button-subtle', {
			endpoint: baseEndpoint + buttonSubtleEndpoint + '?wc-shadydom',
			spec: buttonSubtleSpec,
			size: '1024x768',
			tags: ['desktop']
		});

		test.shadow(name + '-button-subtle-shadow', {
			endpoint: baseEndpoint + buttonSubtleEndpoint + '?dom=shadow',
			spec: buttonSubtleSpec,
			size: '1024x768',
			tags: ['desktop']
		});

		test(name + '-button-icon', {
			endpoint: baseEndpoint + buttonIconEndpoint + '?wc-shadydom',
			spec: buttonIconSpec,
			size: '1024x768',
			tags: ['desktop']
		});

		test.shadow(name + '-button-icon-shadow', {
			endpoint: baseEndpoint + buttonIconEndpoint + '?dom=shadow',
			spec: buttonIconSpec,
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
});
