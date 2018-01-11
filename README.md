# d2l-button
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/BrightspaceUI/button)
[![Bower version][bower-image]][bower-url]
[![Build status][ci-image]][ci-url]

A series of [Polymer](https://www.polymer-project.org/1.0/)-based web components and [Sass](http://sass-lang.com/) mixins for D2L buttons.

![screenshot of button component](/screenshots/screenshot.png?raw=true)

For further information on this and other Brightspace UI components, see the docs at [ui.developers.brightspace.com](http://ui.developers.brightspace.com/).

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
	<script src="../webcomponentsjs/webcomponents-lite.js"></script>
	<link rel="import" href="../d2l-button/d2l-button.html">
</head>
```

The `<d2l-button>` element can be used just like the native `button` element, but also supports the `primary` attribute for denoting the primary button.

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="../d2l-typography/d2l-typography.html">
    <link rel="import" href="d2l-button.html">
    <custom-style include="d2l-typography">
      <style is="custom-style" include="d2l-typography"></style>
    </custom-style>
    <style>
      html {
        font-size: 20px;
        font-family: 'Lato', 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
      }
    </style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<d2l-button primary>Primary</d2l-button>
<d2l-button>Secondary</d2l-button>
<d2l-button disabled>Disabled</d2l-button>
```

As an alternative to the web component, a Sass mixin can be used to apply button styles to your button elements:

```sass
@import 'bower_components/d2l-button/d2l-button.scss';

.my-button {
	@include d2l-button();
}
```

The `primary` and `disabled` attributes work the same way as they do with the web component.

### Floating Workflow Buttons

Floating workflow buttons behavior can be added by using the `<d2l-floating-buttons>` custom element.  When the normal position of the workflow buttons is below the bottom edge of the view-port, they'll dock at the bottom edge.  When the normal position becomes visible, they'll undock.

![screenshot of floating buttons](/screenshots/floating-buttons.gif?raw=true)

```html
<head>
	<script src="../webcomponentsjs/webcomponents-lite.js"></script>
	<link rel="import" href="../d2l-button/d2l-button.html">
	<link rel="import" href="../d2l-button/d2l-floating-buttons.html">
</head>
```

Include the `<d2l-floating-buttons>` container at the bottom of the page, and add your workflow `button` elements:

```html
<d2l-floating-buttons>
	<d2l-button primary>Save</d2l-button>
	<d2l-button>Cancel</d2l-button>
</d2l-floating-buttons>
```

## Developing, Testing and Contributing

After cloning the repo, run `npm install` to install dependencies.

If you don't have it already, install the [Polymer CLI](https://www.polymer-project.org/2.0/docs/tools/polymer-cli) globally:

```shell
npm install -g polymer-cli
```

To start a [local web server](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#serve) that hosts the demo page and tests:

```shell
polymer serve
```

To lint ([eslint](http://eslint.org/) and [Polymer lint](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#lint)):

```shell
npm run lint
```

To run unit tests locally using [Polymer test](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#tests):

```shell
polymer test --skip-plugin sauce
```

To lint AND run local unit tests:

```shell
npm test
```

[bower-url]: http://bower.io/search/?q=d2l-button
[bower-image]: https://badge.fury.io/bo/d2l-button.svg
[ci-url]: https://travis-ci.org/BrightspaceUI/button
[ci-image]: https://travis-ci.org/BrightspaceUI/button.svg?branch=master
