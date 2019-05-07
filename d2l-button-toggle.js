import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import './d2l-button-shared-styles.js';

/**
 * @customElement
 * @polymer
 */
export class D2LButtonToggle extends PolymerElement {
	static get is() { return 'd2l-button-toggle'; }
	static get template() {
		return html`
		<style>
			:host {
				display: inline-block;
				outline: none;
				--d2l-button-toggle-border-radius: 0.3em;
				--d2l-button-toggle-border-width: 1px;
			}
			:host([hidden]) {
				display: none;
			}
			button {
				font-family: inherit;
				padding: 0.5rem 1.5rem;
				@apply --d2l-button-shared;
				@apply --d2l-label-text;
				@apply --d2l-button;
				@apply --d2l-button-clear-focus;
				width: 100%;
				border-radius: var(--d2l-button-toggle-border-radius);
				border-width: var(--d2l-button-toggle-border-width);
			}
			/* Firefox includes a hidden border which messes up button dimensions */
			button::-moz-focus-inner {
				border: 0;
			}
			button,
			button[disabled]:hover,
			button[disabled]:focus,
			:host([active]) button[disabled] {
				background-color: var(--d2l-color-regolith);
				border-color: var(--d2l-color-mica);
				color: var(--d2l-color-ferrite);
			}

			button:hover,
			button[aria-pressed="true"], 
			:host([active]) button,
			:host(.d2l-button-hover) button {
				background-color: var(--d2l-color-gypsum);
			}

			button:hover,
			button[aria-pressed="true"], 
			:host(.d2l-button-hover) button, 
			:host([active]) button {
				@apply --d2l-button-hover;
			}
			button:focus, :host(.d2l-button-focus) button {
				@apply --d2l-button-focus-plus-border;
				position: relative;
			}

			button[disabled] {
				opacity: 0.5;
				cursor: default;
			}
		</style>
		<button 
			aria-expanded$="[[ariaExpanded]]"
			aria-haspopup$="[[ariaHaspopup]]"
			aria-label$="[[label]]"
			aria-pressed$="[[_pressedString]]"
			class="d2l-focusable"
			disabled$="[[disabled]]"
			autofocus$="[[autofocus]]"
			form$="[[form]]"
			formaction$="[[formaction]]"
			formenctype$="[[formenctype]]"
			formmethod$="[[formmethod]]"
			formnovalidate$="[[formnovalidate]]"
			formtarget$="[[formtarget]]"
			name$="[[name]]"
			type$="[[type]]"
			tabindex$="[[tabindex]]"><slot></slot></button>
		`;
	}
	static get properties() {
		return {
			pressed: {
				type: Boolean,
				value: false
			},
			disabled: {
				type: Boolean,
				value: false
			},
			label: {
				type: String,
				value: ''
			},
			_pressedString: {
				type: String,
				computed: '_getPressedString(pressed)'
			}
		};
	}

	ready() {
		super.ready();

		this.addEventListener('click', this._togglePressed);
	}

	focus() {
		this.shadowRoot.querySelector('button').focus();
	}

	_togglePressed()
	{
		this.pressed = !this.pressed;
	}

	_getPressedString(pressed) {
		return pressed.toString();
	}
}

window.customElements.define(D2LButtonToggle.is, D2LButtonToggle);
