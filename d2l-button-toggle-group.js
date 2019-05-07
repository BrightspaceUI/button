import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import './d2l-button-toggle.js';

/**
 * @customElement
 * @polymer
 */
export class D2LButtonToggleGroup extends PolymerElement {
	static get is() { return 'd2l-button-toggle-group'; }
	static get template() {
		return html`
			<style>
				div ::slotted(.d2l-button-toggle-grouped) {
					--d2l-button-toggle-border-radius: 0;
					--d2l-button-toggle-border-width: 1px 1px 1px 0;
				}
				:host([orientation="vertical"]) div ::slotted(.d2l-button-toggle-grouped) {
					--d2l-button-toggle-border-width: 0 1px 1px 1px;
				}
				div ::slotted(.d2l-button-toggle-grouped:first-child),
				:host([dir="rtl"]) div ::slotted(.d2l-button-toggle-grouped:last-child) {
					--d2l-button-toggle-border-radius: 0.3rem 0 0 0.3rem;
					--d2l-button-toggle-border-width: 1px;
				}
				div ::slotted(.d2l-button-toggle-grouped:last-child),
				:host([dir="rtl"]) div ::slotted(.d2l-button-toggle-grouped:first-child) {
					--d2l-button-toggle-border-radius: 0 0.3rem 0.3rem 0;
				}
				:host([orientation="vertical"]) div ::slotted(.d2l-button-toggle-grouped:first-child) {
					--d2l-button-toggle-border-radius: 0.3rem 0.3rem 0 0;
					--d2l-button-toggle-border-width: 1px;
				}
				:host([orientation="vertical"]) div ::slotted(.d2l-button-toggle-grouped:last-child) {
					--d2l-button-toggle-border-radius: 0 0 0.3rem 0.3rem;
				}
				div {
					display: inline-flex;
					flex-wrap: nowrap;
					outline: none;
				}
				:host([orientation="vertical"]) div {
					flex-direction: column;
				}
			</style>
			<div aria-role="toolbar" aria-label="[[label]]">
				<slot></slot>
			</div>
		`;
	}
	static get properties() {
		return {
			disabled: {
				type: Boolean,
				value: false,
				observer: '_disabledChanged'
			},
			label: {
				type: String,
				value: false
			},
			orientation: {
				type: String,
				value: 'horizontal'
			},
			_lastFocused: {
				type: Object,
				value: {}
			},
			_buttons: {
				type: Array,
				value: []
			}
		};
	}
	static get observers() {
		return [
			'_disabledChanged(disabled, _buttons)'
		];
	}

	ready() {
		super.ready();
		this._initializeButtons();

		this.addEventListener('keydown', this._handleKeyDown);
		this.addEventListener('click', this._handleClick);
	}

	_disabledChanged() {
		this._buttons.forEach(b => b.disabled = this.disabled);
	}

	_getButtons() {
		return this.querySelectorAll('*');
	}

	_initializeButtons() {
		this._buttons = this._getButtons();
		this._lastFocused = this._buttons.length ? this._buttons[0] : this._lastFocused;
		this._setButtonsTabindex();
	}

	_setButtonsTabindex() {
		this._buttons.forEach(b => {
			b.tabindex = (b === this._lastFocused ? 0 : -1);
		});
	}

	_handleClick(e) {
		this._lastFocused = e.target;
		this._setButtonsTabindex();
	}

	_handleKeyDown(e) {
		const newTarget = this._canArrowForward(e.keyCode, e.srcElement) || this._canArrowBackward(e.keyCode, e.srcElement);
		if (newTarget) {
			this._lastFocused = newTarget;
			this._setButtonsTabindex();
			newTarget.focus();
			e.preventDefault();
		}
	}
	_canArrowForward(code, button) {
		// 40 -> ArrowDown
		// 39 -> ArrowRight
		if ((this.orientation === 'vertical' && code === 40) || (this.orientation !== 'vertical' && code === 39)) {
			return this._getNextButton(button);
		}
	}
	_canArrowBackward(code, button) {
		// 38 -> ArrowUp
		// 37 -> ArrowLeft
		if ((this.orientation === 'vertical' && code === 38) || (this.orientation !== 'vertical' && code === 37)) {
			return this._getPreviousButton(button);
		}
	}
	_getNextButton(button) {
		for (let i = 0; i < this._buttons.length; i++) {
			if (this._buttons[i] === button && i < this._buttons.length - 1) {
				return this._buttons[i + 1];
			}
		}
	}
	_getPreviousButton(button) {
		for (let i = 0; i < this._buttons.length; i++) {
			if (this._buttons[i] === button) {
				if (i > 0) {
					return this._buttons[i - 1];
				}
				return;
			}
		}
	}
}

window.customElements.define(D2LButtonToggleGroup.is, D2LButtonToggleGroup);
