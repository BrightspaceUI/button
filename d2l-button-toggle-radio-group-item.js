import {D2LButtonToggle} from './d2l-button-toggle.js';

/**
 * @customElement
 * @polymer
 */

let subTemplate;
class D2LButtonToggleRadioGroupItem extends D2LButtonToggle {
	static get is() { return 'd2l-button-toggle-radio-group-item'; }

	static get template() {
		if (!subTemplate) {
			subTemplate = super.template.cloneNode(true);
			const button = subTemplate.content.querySelector('button');
			button.setAttribute('aria-checked', '[[pressed]]');
			button.setAttribute('aria-role', 'radio');
			subTemplate.innerHTML = subTemplate.innerHTML.replace('aria-checked=', 'aria-checked$=');
		}
		return subTemplate;
	}
	static get properties() {
		return {
			value: {
				type: String,
				value: ''
			}
		};
	}
}

window.customElements.define(D2LButtonToggleRadioGroupItem.is, D2LButtonToggleRadioGroupItem);
