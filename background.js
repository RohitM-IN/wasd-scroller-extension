let wasdScroller = {
	initialized: false,
	scrollIncrement: 100,
	ctrlCount: 0,
	active: true,

	initialize: function () {
		chrome.storage.sync.get(['scrollIncrement', 'active'], (data) => {
			if (data.scrollIncrement !== undefined) {
				this.scrollIncrement = data.scrollIncrement;
			}
			if (data.active !== undefined) {
				this.active = data.active;
			}
			this.initialized = true;
		});
	},

	getScrollIncrement: function () {
		return this.scrollIncrement;
	},

	getActive: function () {
		return this.active;
	},

	setActive: function (value) {
		this.active = value;
		chrome.storage.sync.set({ active: value });
	}
};

wasdScroller.initialize();

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	let response = {
		active: wasdScroller.getActive(),
		keycode: request.keycode,
		x: 0,
		y: 0
	};

	if (request.keycode === 17) {
		if (++wasdScroller.ctrlCount > 1) {
			wasdScroller.setActive(!wasdScroller.getActive());
			wasdScroller.ctrlCount = 0;
		}
	} else {
		wasdScroller.ctrlCount = 0;
	}

	if (!wasdScroller.getActive()) {
		sendResponse(response);
		return true;
	}

	switch (request.keycode) {
		case 87: // w
			response.y = wasdScroller.getScrollIncrement() * -1;
			break;
		case 65: // a
			response.x = wasdScroller.getScrollIncrement() * -1;
			break;
		case 83: // s
			response.y = wasdScroller.getScrollIncrement();
			break;
		case 68: // d
			response.x = wasdScroller.getScrollIncrement();
			break;
		default:
			response.active = false;
			break;
	}

	sendResponse(response);
	return true;
});
