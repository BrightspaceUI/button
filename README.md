**Looking for SASS-based `d2l-button`?** It's [over here](https://github.com/BrightspaceUI/button/tree/sass).

# d2l-button
[![Bower version][bower-image]][bower-url]
[![Build status][ci-image]][ci-url]

A series of [Polymer](https://www.polymer-project.org/1.0/)-based web components for D2L buttons.

![screenshot of button component](/screenshots/screenshot.png?raw=true)

For further information on this and other D2L UI components, see the docs at [ui.valence.d2l.com](http://ui.valence.d2l.com/).

## Installation

`d2l-button` can be installed from [Bower][bower-url]:
```shell
bower install d2l-button
```

## Usage

Include the [webcomponents.js](http://webcomponents.org/polyfills/) "lite" polyfill (for browsers who don't natively support web components), then import `d2l-button.html`:

### Button

```html
<head>
	<script src="https://s.brightspace.com/lib/webcomponentsjs/0.7.21/webcomponents-lite.min.js"></script>
	<link rel="import" href="../d2l-button/d2l-button.html">
</head>
```

The native `<button>` element can now be extended to be a `d2l-button`:

```html
<button is="d2l-button">Button Element</button>
```

Buttons can be made **primary**:

```html
<button is="d2l-button" primary>Primary Button</button>
```

And can be **disabled**:

```html
<button is="d2l-button" disabled>Disabled Button</button>
```

### Floating Workflow Buttons

Floating workflow buttons behavior can be added by using the `<d2l-floating-buttons>` custom element.  When the normal position of the workflow buttons is below the bottom edge of the view-port, they'll dock at the bottom edge.  When the normal position becomes visible, they'll undock.

```html
<head>
	<script src="https://s.brightspace.com/lib/webcomponentsjs/0.7.21/webcomponents-lite.min.js"></script>
	<link rel="import" href="../d2l-button/d2l-button.html">
	<link rel="import" href="../d2l-button/d2l-floating-buttons.html">
</head>
```

Include the `<d2l-floating-buttons>` container at the bottom of the page, and add your workflow `button` elements:

```html
<body>
	...
	<d2l-floating-buttons>
		<button is="d2l-button" primary>Save</button>
		<button is="d2l-button">Cancel</button>
	</d2l-floating-buttons>
</body>
```

### Usage in Production

In production, it's recommended to use a build tool like [Vulcanize](https://github.com/Polymer/vulcanize) to combine all your web components into a single import file. [More from the Polymer Docs: Optimize for Production](https://www.polymer-project.org/1.0/tools/optimize-for-production.html)...

## Coding styles

See the [Best Practices & Style Guide](https://github.com/Brightspace/valence-ui-docs/wiki/Best-Practices-&-Style-Guide) for information on naming conventions, plus information about the [EditorConfig](http://editorconfig.org) rules used in this repo.

[bower-url]: http://bower.io/search/?q=d2l-button
[bower-image]: https://img.shields.io/bower/v/d2l-button.svg
[ci-url]: https://travis-ci.org/BrightspaceUI/button
[ci-image]: https://travis-ci.org/BrightspaceUI/button.svg?branch=master
