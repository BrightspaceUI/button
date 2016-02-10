# vui-button
[![Bower version][bower-image]][bower-url]
[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][dependencies-image]][dependencies-url]

This component contains [Sass mixins](http://sass-lang.com/) and CSS which can be used to style HTML buttons elements.

![screenshot of button component](/screenshot.png?raw=true)

For further information on this and other VUI components, see the docs at [ui.valence.d2l.com](http://ui.valence.d2l.com/).

## Installation

`vui-button` can be installed from [Bower][bower-url]:
```shell
bower install vui-button
```

Or alternatively from [NPM][npm-url]:
```shell
npm install vui-button
```

Depending on which installation method you choose, use that path when doing the SASS import:

```scss
@import 'bower_components/vui-button/button.scss';
// or...
@import "node_modules/vui-button/button.scss";
```

## Usage

You can use either the `<button>` or `<input>` HTML elements:

```html
<button>Button Element</button>
<input type="button" value="Input Element" />
```

SCSS:

```scss
button,
input[type="button"] {
	@include vui-button();
}
```

**Primary** buttons should use a CSS class:

```html
<button class="primary">Primary Button</button>
```

SCSS:

```scss
button.primary {
	@include vui-button-primary();
}
```

For disabled buttons, use the `disabled` attribute:

```html
<button disabled>Disabled Button</button>
```

## Coding styles

See the [VUI Best Practices & Style Guide](https://github.com/Brightspace/valence-ui-docs/wiki/Best-Practices-&-Style-Guide) for information on VUI naming conventions, plus information about the [EditorConfig](http://editorconfig.org) rules used in this repo.

[bower-url]: http://bower.io/search/?q=vui-button
[bower-image]: https://img.shields.io/bower/v/vui-button.svg
[npm-url]: https://www.npmjs.org/package/vui-button
[npm-image]: https://img.shields.io/npm/v/vui-button.svg
[ci-url]: https://travis-ci.org/Brightspace/valence-ui-button
[ci-image]: https://travis-ci.org/Brightspace/valence-ui-button.svg?branch=master
[dependencies-url]: https://david-dm.org/brightspace/valence-ui-button
[dependencies-image]: https://img.shields.io/david/Brightspace/valence-ui-button.svg
