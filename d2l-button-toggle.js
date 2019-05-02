import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import 'd2l-offscreen/d2l-offscreen.js';
import './d2l-button-shared-styles.js';

/**
 * @customElement
 * @polymer
 */
class D2LButtonToggle extends PolymerElement {
	static get is() { return 'd2l-button-toggle'; }
	static get template() {
		return html`
		<style>
			:host([disabled]) .d2l-button-toggle-button {
				opacity: 0.5;
				cursor: default;
			}
			.d2l-button-toggle-container > li:first-of-type > button {
				border-bottom-left-radius: 0.3rem;
				border-top-left-radius: 0.3rem;
				border-left-width: 1px;
			}
			:host(:dir(rtl)) .d2l-button-toggle-container > li:first-of-type > button {
				border-bottom-right-radius: 0.3rem;
				border-top-right-radius: 0.3rem;
			}
			.d2l-button-toggle-container > li:last-of-type > button {
				border-bottom-right-radius: 0.3rem;
				border-top-right-radius: 0.3rem;
			}
			:host(:dir(rtl)) .d2l-button-toggle-container > li:last-of-type > button {
				border-bottom-left-radius: 0.3rem;
				border-top-left-radius: 0.3rem;
				border-left-width: 1px;
			}
			.d2l-button-toggle-button,
			.d2l-button-toggle-button[aria-pressed] {
				@apply --d2l-button;
				@apply --d2l-button-shared;
				@apply --d2l-label-text;
				border-radius: 0;
				border-width: 1px 1px 1px 0px;
				font-family: inherit;
				padding: 0.5rem 1.5rem;
			}
			.d2l-button-toggle-button {
				background-color: var(--d2l-color-regolith);
			}
			:host(:not([disabled])) .d2l-button-toggle-button:hover,
			:host(:not([disabled])) .d2l-button-toggle-button:focus,
			.d2l-button-toggle-button[aria-pressed]
			{
				background-color: var(--d2l-color-gypsum);
			}
			.d2l-button-toggle-button:focus,
			.d2l-button-toggle-button[aria-pressed]:focus {
				box-shadow: 0 0 1px 0 var(--d2l-color-sylvite) inset, 0 0 3px 1px #99C5E5;
				position: relative;
			}
			.d2l-button-toggle-container {
				list-style: none;
				white-space: no-wrap;
				display: inline-block;
			}
			.d2l-button-toggle-container li {
				display: inline-block;
			}
		</style>
		<d2l-offscreen><h2 id="d2l-button-toggle-title">[[title]]</h2></d2l-offscreen>
		<ul class="d2l-button-toggle-container" role="toolbar" aria-labelledby="d2l-button-toggle-title">
			<dom-repeat items="[[buttons]]" as="b">
				<template><li role="presentation">
					<button 
						class="d2l-button-toggle-button" 
						id$="[[_getButtonId(b.key)]]" 
						on-click="_selectionChanged"
						aria-pressed$="[[_shouldBeDefaultSelected(index)]]"
						disabled="[[disabled]]"
					>[[b.text]]</button>
				</li></template>
			</dom-repeat>
		</ul>
		`;
	}
	static get properties() {
		return {
			buttons: {
				type: Array,
				value: [
					// { key: 'd2l-key', text: 'value' },
					// { key: 'd2l-key2', text: 'value 2' },
					// { key: 'd2l-key3', text: 'value 3' }
				]
			},
			defaultSelected: {
				type: String,
				value: ''
			},
			title: {
				type: String,
				value: ''
			},
			disabled: {
				type: Boolean,
				value: false
			},
			_buttonIdPrefix: {
				type: String,
				value: 'd2l-button-toggle-'
			}
		};
	}

	_shouldBeDefaultSelected(index) {
		if (this.defaultSelected) {
			return this.buttons[index].key === this.defaultSelected;
		}
		return index === 0;
	}

	_getButtonId(key) {
		return this._buttonIdPrefix + key;
	}

	_selectOnly(key) {
		const buttons = this.shadowRoot.querySelectorAll('button');
		const id = this._getButtonId(key);
		for (let i = 0; i < buttons.length; i++) {
			if (buttons[i].id === id) {
				buttons[i].setAttribute('aria-pressed', true);
			} else {
				buttons[i].removeAttribute('aria-pressed');
			}
		}
	}

	_selectionChanged(e) {
		this._selectOnly(e.model.b.key);
		this.dispatchEvent(
			new CustomEvent(
				'd2l-button-toggle-selection-changed',
				{
					detail: {
						selected: e.model.b.key
					},
					composed: true,
					bubbles: true
				}
			)
		);
	}
}

window.customElements.define(D2LButtonToggle.is, D2LButtonToggle);
