# vui-button
[![Bower version][bower-image]][bower-url]
[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][dependencies-image]][dependencies-url]

This component contains Sass mixins and CSS that you can use to style buttons.

## Installation

Install from NPM:
```shell
npm install vui-button
```

Install from Bower:
```shell
bower install vui-button
```

## Usage

**Import the mixins:**

```scss
@import 'bower_components/vui-button/button.scss'; // or...

@import "node_modules/vui-button/button.scss";
```

**Buttons:**

```scss
button {
	@include vui-button;
}

button.primary {
	@include vui-button-primary;
}
```

For further information on this component and other VUI components, see the docs at [ui.valence.d2l.com](http://ui.valence.d2l.com/).

#### Coding styles
See the [VUI Best Practices & Style Guide](https://github.com/Brightspace/valence-ui-docs/wiki/Best-Practices-&-Style-Guide) for information on VUI naming conventions, plus information about the [EditorConfig](http://editorconfig.org) rules used in this repo.

[bower-url]: http://bower.io/search/?q=vui-button
[bower-image]: https://img.shields.io/bower/v/vui-button.svg
[npm-url]: https://www.npmjs.org/package/vui-button
[npm-image]: https://img.shields.io/npm/v/vui-button.svg
[ci-url]: https://travis-ci.org/Brightspace/valence-ui-button
[ci-image]: https://travis-ci.org/Brightspace/valence-ui-button.svg?branch=master
[dependencies-url]: https://david-dm.org/brightspace/valence-ui-button
[dependencies-image]: https://img.shields.io/david/Brightspace/valence-ui-button.svg
