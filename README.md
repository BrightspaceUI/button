# d2l-button
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/BrightspaceUI/button)
[![Bower version][bower-image]][bower-url]
[![Build status][ci-image]][ci-url]

A series of [Polymer](https://polymer-library.polymer-project.org/)-based web components and [Sass](http://sass-lang.com/) mixins for D2L buttons.

For further information on this and other components, refer to [The Brightspace UI Guide](https://github.com/BrightspaceUI/guide/wiki).

## Installation

`d2l-button` can be installed from [Bower][bower-url]:
```shell
bower install d2l-button
```

## Usage

Include the [webcomponents.js](http://webcomponents.org/polyfills/) "lite" polyfill (for browsers who don't natively support web components), then import `d2l-button.html`:

### Button

See the [BrightspaceUI/core](https://github.com/BrightspaceUI/core/tree/master/components/button) for the [Lit](https://lit-element.polymer-project.org/)-based `d2l-button` component.

As an alternative to the web component, a Sass mixin can be used to apply button styles to your button elements:

```sass
@import 'bower_components/d2l-button/d2l-button.scss';

.my-button {
	@include d2l-button();
}
```

The `primary` and `disabled` attributes work the same way as they do with the web component.

### Subtle Button

See the [BrightspaceUI/core](https://github.com/BrightspaceUI/core/tree/master/components/button) for the [Lit](https://lit-element.polymer-project.org/)-based `d2l-button-subtle` component.

As an alternative to the web component, a Sass mixin can be used to apply button styles to your button elements:

```sass
@import 'bower_components/d2l-button/d2l-button.scss';

.my-button {
	@include d2l-button-subtle();
}
```

Usage is slightly different in that the text and icon attributes are not used, and instead their content is added within the button. For example:
```html
<button class="my-button">
	<d2l-icon icon="d2l-tier1:gear"></d2l-icon>
	Subtle Button with icon
</button>
```

### Icon Button

See the [BrightspaceUI/core](https://github.com/BrightspaceUI/core/tree/master/components/button) for the [Lit](https://lit-element.polymer-project.org/)-based `d2l-button-icon` component.

As an alternative to the web component, a Sass mixin can be used to apply button styles to your button elements:

```sass
@import 'bower_components/d2l-button/d2l-button.scss';

.my-button-icon {
	@include d2l-button-icon();
}
```

Usage is slightly different in that the text and icon attributes are not used. Instead, the icon is added within the button and the aria-label is added as a button attribute. For example:
```html
<button class="my-button-icon" aria-label="Settings">
	<d2l-icon icon="d2l-tier1:gear"></d2l-icon>
</button>
```

### Floating Workflow Buttons

Floating workflow buttons behavior can be added by using the `<d2l-floating-buttons>` custom element.  When the normal position of the workflow buttons is below the bottom edge of the view-port, they'll dock at the bottom edge.  When the normal position becomes visible, they'll undock.

![screenshot of floating buttons](/screenshots/floating-buttons.png?raw=true)

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

## Versioning

Commits and PR merges to master will automatically do a minor version bump which will:
* Update the version in `package.json`
* Add a tag matching the new version
* Create a github release matching the new version

By using either **[increment major]** or **[increment patch]** notation inside your merge message, you can overwrite the default version upgrade of minor to the position of your choice.
