#VUI Button [![NPM version][npm-image]][npm-url] [![Build Status](https://travis-ci.org/Desire2Learn-Valence/valence-ui-button.svg?branch=master)](https://travis-ci.org/Desire2Learn-Valence/valence-ui-button)

This library contains a series of LESS mixins and CSS which can be used to
style buttons.

##Usage

Install as a development dependency:

```shell
npm install --save-dev vui-button
```

Import the library into your LESS file:

```css
@import 'node_modules/vui-button/dist/button'
```

##LESS Mixins

To apply button styling to an element, apply the `vui-button` mixin to the CSS
selector in your LESS file:

```css
button {
  .vui-button();
}
```

An element may also be made primary using the `vui-buttonPrimary` mixin:

```css
button.primary {
  .vui-buttonPrimary();
}
```

##CSS

If you'd prefer to use CSS, bundle up the provided `button.css` file with
your application's CSS. Then apply the `vui-button` and `vui-button-primary`
CSS classes to your button elements.

```html
<button class="vui-button-primary">Save</button>
<button class="vui-button">Cancel</button>
```

##Building

After grabbing the source, [Gulp](http://gulpjs.com/) should be installed globally
using the `npm install -g gulp` command. Then install package dependencies:

```shell
npm install
```

To build, run:

```shell
gulp
```

To test using Karma:

```shell
gulp test
```
