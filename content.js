let wasdScroller = {
	keyPressEvent: function (evt) {
		let retval = true;

		switch (evt.keyCode) {
			case 17: // CTRL
				break;
			case 87: // w
			case 65: // a
			case 83: // s
			case 68: // d
				if (evt.target.readOnly === undefined || evt.target.readOnly === true) {
					retval = false;
				}
				break;
			default:
				break;
		}

		chrome.runtime.sendMessage({ keycode: evt.keyCode }, (response) => {
			if (!retval && response && response.active) {
				wasdScroller.doScroll(response.x, response.y);
			}
		});

		return retval;
	},

	doScroll: function (x, y) {
		window.scrollBy(x, y);
	},

	initialize: function () {
		window.onkeydown = this.keyPressEvent;
	}
};

wasdScroller.initialize();
