var page_buttonCount = 0;
var page_floatingButtons;

function appendButton() {
	var floatingButtons = document.getElementById('wc_buttons');

	if (floatingButtons) {
		page_buttonCount += 1;

		var newButton = document.createElement('button');
		newButton.textContent = 'Beer ' + page_buttonCount;

		Polymer.dom(floatingButtons).appendChild(newButton);
	}
}
document.addEventListener('WebComponentsReady', function() {
	document.getElementById('btn-append-floating').addEventListener('click', function() {
		if (page_floatingButtons) {
			document.body.appendChild(page_floatingButtons);
		}
	});
	document.getElementById('btn-remove-floating').addEventListener('click', function() {
		var floatingButtons = document.getElementById('wc_buttons');
		if (floatingButtons) {
			page_floatingButtons = floatingButtons;
			floatingButtons.parentNode.removeChild(floatingButtons);
		}
	});
	document.getElementById('btn-append-new').addEventListener('click', appendButton);
	document.getElementById('btn-remove-last').addEventListener('click', function() {
		var floatingButtons = document.getElementById('wc_buttons');
		if (Polymer.dom(floatingButtons).lastChild) {
			Polymer.dom(floatingButtons).removeChild(
				Polymer.dom(floatingButtons).lastChild
			);
		}
	});
	document.getElementById('btn-insert-content-above').addEventListener('click', function() {
		var newContent = document.createElement('p');
		newContent.textContent = 'I love beer!';
		document.body.querySelector('.content').appendChild(newContent);
	});
	document.getElementById('btn-remove-content-above').addEventListener('click', function() {
		var content = document.body.querySelector('.content');
		if (content.lastChild) {
			content.removeChild(content.lastChild);
		}
	});
	document.getElementById('btn-make-more').addEventListener('click', function() {
		appendButton();
	});
});
