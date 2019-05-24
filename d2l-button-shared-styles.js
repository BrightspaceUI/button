import '@polymer/polymer/polymer-legacy.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<custom-style>
	<style is="custom-style">
		html {
			--d2l-button-shared: {
				border-radius: 0.3rem;
				border-style: solid;
				border-width: 1px;
				box-sizing: border-box;
				cursor: pointer;
				display: inline-block;
				margin: 0;
				min-height: calc(2rem + 2px);
				outline: none;
				text-align: center;
				transition: box-shadow 0.2s;
				-webkit-user-select: none;
				-moz-user-select: none;
				-ms-user-select: none;
				user-select: none;
				vertical-align: middle;
				white-space: nowrap;
				width: auto;
			};
			--d2l-button-clear-focus: {
				box-shadow: 0 0 0 4px rgba(0, 0, 0, 0);
			};
			--d2l-button-focus: {
				box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #006fbf;
			};
			--d2l-button-spacing: 0.75rem;
		}
		.d2l-button-spacing {
			margin-right: var(--d2l-button-spacing);
		}
		[dir='rtl'] .d2l-button-spacing {
			margin-left: var(--d2l-button-spacing);
			margin-right: 0;
		}
	</style>
</custom-style>`;

document.head.appendChild($_documentContainer.content);
