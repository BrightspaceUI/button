**Looking for SASS-based `vui-button`?** It's [over here](https://github.com/Brightspace/valence-ui-button/tree/sass).

# vui-button
[![Bower version][bower-image]][bower-url]
[![Build status][ci-image]][ci-url]

A Valence UI, [Polymer](https://www.polymer-project.org/1.0/)-based web component button element.

![screenshot of button component](/screenshots/screenshot.png?raw=true)

For further information on this and other VUI components, see the docs at [ui.valence.d2l.com](http://ui.valence.d2l.com/).

## Installation

`vui-button` can be installed from [Bower][bower-url]:
```shell
bower install vui-button
```

## Usage

Include the [webcomponents.js](http://webcomponents.org/polyfills/) "lite" polyfill (for browsers who don't natively support web components), then import `button.html`:

```html
<head>
	<script src="https://s.brightspace.com/lib/webcomponentsjs/0.7.21/webcomponents-lite.min.js"></script>
	<link rel="import" href="../vui-button/button.html">
</head>
```

The native `<button>` element can now be extended to be a `vui-button`:

```html
<button is="vui-buttom">Button Element</button>
```

Buttons can be made **primary**:

```html
<button is="vui-button" primary>Primary Button</button>
```

And can be **disabled**:

```html
<button is="vui-button" disabled>Disabled Button</button>
```

### Usage in Production

In production, it's recommended to use a build tool like [Vulcanize](https://github.com/Polymer/vulcanize) to combine all your web components into a single import file. [More from the Polymer Docs: Optimize for Production](https://www.polymer-project.org/1.0/tools/optimize-for-production.html)...

## Coding styles

See the [VUI Best Practices & Style Guide](https://github.com/Brightspace/valence-ui-docs/wiki/Best-Practices-&-Style-Guide) for information on VUI naming conventions, plus information about the [EditorConfig](http://editorconfig.org) rules used in this repo.

[bower-url]: http://bower.io/search/?q=vui-button
[bower-image]: https://img.shields.io/bower/v/vui-button.svg
[ci-url]: https://travis-ci.org/Brightspace/valence-ui-button
[ci-image]: https://travis-ci.org/Brightspace/valence-ui-button.svg?branch=master
[dependencies-url]: https://david-dm.org/brightspace/valence-ui-button
[dependencies-image]: https://img.shields.io/david/Brightspace/valence-ui-button.svg
