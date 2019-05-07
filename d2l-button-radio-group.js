import {D2LButtonToggleGroup} from './d2l-button-toggle-group.js';

/**
 * @customElement
 * @polymer
 */
class D2LButtonRadioGroup extends D2LButtonToggleGroup {
	static get is() { return 'd2l-button-radio-group'; }
	static get properties() {
		return {
			_lastSelectedValue: {
				type: String,
				value: ''
			}
		};
	}

	ready() {
		super.ready();
		const firstPressed = this.querySelector('*[pressed]');
		if (firstPressed) {
			this._selectOnly(firstPressed);
			this._lastSelectedValue = firstPressed.value;
		}
		this._setButtonsTabindex();
		this.addEventListener('focusout', this._handleFocusOut);
	}

	_handleClick(e) {
		this._selectOnly(e.srcElement);
		super._handleClick(e);
		this._dispatchSelectionChangedEvent(e.srcElement.value);
	}

	_selectOnly(button) {
		this._buttons.forEach(b => {
			if (b === button) {
				this._lastFocused = b;
			} else {
				b.pressed = false;
			}
		});
	}

	_getSelected() {
		if (this._buttons) {
			for (let i = 0; i < this._buttons.length; i++) {
				if (this._buttons[i].pressed) {
					return this._buttons[i];
				}
			}
		}
	}

	_handleFocusOut(e) {
		if (e.relatedTarget.parentElement !== this) {
			this._lastFocused = this._getSelected() || (this._buttons.length ? this._buttons[0] : this._lastFocused);
			this._setButtonsTabindex();
		}
	}

	_dispatchSelectionChangedEvent(value) {
		if (this._lastSelectedValue !== value) {
			this._lastSelectedValue = value;
			this.dispatchEvent(
				new CustomEvent(
					'd2l-button-radio-group-selection-changed',
					{
						detail: {
							selected: value
						},
						composed: true,
						bubbles: true
					}
				)
			);
		}
	}
}

window.customElements.define(D2LButtonRadioGroup.is, D2LButtonRadioGroup);
