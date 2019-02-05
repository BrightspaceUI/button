/**
`d2l-button-icon`
Polymer-based web component for icon buttons

@demo demo/button-icon.html d2l-button-icon
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'd2l-colors/d2l-colors.js';
import 'd2l-icons/d2l-icons.js';
import 'd2l-polymer-behaviors/d2l-focusable-behavior.js';
import 'd2l-polymer-behaviors/d2l-visible-on-ancestor-behavior.js';
import './d2l-button-shared-styles.js';
import './d2l-button-behavior.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-button-icon">
	<template strip-whitespace="">
		<style include="d2l-visible-on-ancestor-styles">
			:host {
				display: inline-block;
				--d2l-button-icon-border-radius: 0.3rem;
				--d2l-button-icon-min-height: calc(2rem + 2px);
				--d2l-button-icon-min-width: calc(2rem + 2px);
				--d2l-button-icon-h-align: calc(((2rem + 2px - 0.9rem) / 2) * -1);

				--button-rtl: {
					left: 0;
					right: var(--d2l-button-icon-h-align);
				}
			}
			:host([hidden]) {
				display: none;
			}
			button {
				background-color: transparent;
				border-color: transparent;
				font-family: inherit;
				@apply --d2l-button-clear-focus;
				@apply --d2l-button-shared;
				border-radius: var(--d2l-button-icon-border-radius);
				min-height: var(--d2l-button-icon-min-height);
				min-width: var(--d2l-button-icon-min-width);
				position: relative;
			}

			:host([h-align="text"]) button {
				left: var(--d2l-button-icon-h-align);
			}
			:host-context([dir="rtl"])[h-align="text"] button {
				@apply --button-rtl;
			}
			:host-context([dir="rtl"]):host([h-align="text"]) button {
				@apply --button-rtl;
			}
			:host(:dir(rtl))[h-align="text"] button {
				@apply --button-rtl;
			}
			:host(:host-context([dir="rtl"])[h-align="text"]) button {
				@apply --button-rtl;
			}

			/* Firefox includes a hidden border which messes up button dimensions */
			button::-moz-focus-inner {
				border: 0;
			}
			button[disabled]:hover,
			button[disabled]:focus,
			:host([active]) button[disabled] {
				background-color: transparent;
			}
			button:hover,
			button:focus,
			:host([active]) button,
			:host(.d2l-button-icon-hover) button,
			:host(.d2l-button-icon-focus) button {
				background-color: var(--d2l-color-gypsum);
			}
			button:focus, :host(.d2l-button-icon-focus) button {
				@apply --d2l-button-focus-plus-border;
			}

			.d2l-button-icon {
				height: 0.9rem;
				width: 0.9rem;
			}

			:host([translucent]) button {
				background-color: rgba(0,0,0,0.5);
				transition: background-color 0.5s;
			}
			:host([translucent]) .d2l-button-icon {
				color: white;
			}
			:host([active][translucent]) button,
			:host([translucent].d2l-button-icon-hover) button,
			:host([translucent].d2l-button-icon-focus) button,
			:host([translucent]) button:hover,
			:host([translucent]) button:focus {
				border: none;
				background-color: var(--d2l-color-celestine);
				box-shadow: none;
			}

			button[disabled] {
				cursor: default;
				opacity: 0.5;
			}
		</style>
		<button aria-expanded$="[[ariaExpanded]]" aria-haspopup$="[[ariaHaspopup]]" aria-label$="[[ariaLabel]]" class="d2l-focusable" disabled$="[[disabled]]" autofocus$="[[autofocus]]" form$="[[form]]" formaction$="[[formaction]]" formenctype$="[[formenctype]]" formmethod$="[[formmethod]]" formnovalidate$="[[formnovalidate]]" formtarget$="[[formtarget]]" name$="[[name]]" title$="[[text]]" type$="[[type]]">
			<d2l-icon icon="[[icon]]" class="d2l-button-icon"></d2l-icon>
		</button>
	</template>
	
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-button-icon',

	properties: {

		/**
		 * Name of icon (ex. [iconset-name:icon-id]) for underlying [Polymer iron-iconset-svg](https://github.com/PolymerElements/iron-iconset-svg) (required).
		 */
		icon: {
			type: String,
			reflectToAttribute: true
		},

		/**
		 * Text to display in aria-label (required)
		 */
		text: {
			type: String,
			reflectToAttribute: true
		},

		/**
		 * Horizontal alignment of button. Options:
		 *	 "text" -  The button icon will left align with the page content
		 *	default - The button's edge (including padding) will left align with the page content
		*/
		hAlign: {
			type: String,
			reflectToAttribute: true
		},

		/**
		 * Whether the button is translucent.
		 */
		translucent: {
			type: Boolean,
			reflectToAttribute: true
		}

	},

	behaviors: [
		D2L.PolymerBehaviors.Button.Behavior,
		D2L.PolymerBehaviors.FocusableBehavior,
		D2L.PolymerBehaviors.VisibleOnAncestorBehavior
	]

});
