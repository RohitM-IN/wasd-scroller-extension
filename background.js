var wasdScroller = {
	initialized: false,
	scrollIncrement: 100,
	ctrlCount: 0,

	initialize: function() {
		chrome.storage.sync.get('scrollIncrement', this.setScrollIncrement);	
		chrome.storage.sync.get('active', this.setActive);
	
		this.initialized = true;	
	},


	setScrollIncrement: function(data) {
		if(data.scrollIncrement != undefined){
			wasdScroller.scrollIncrement = data.scrollIncrement;
		}	

		chrome.storage.sync.set({'scrollIncrement': wasdScroller.scrollIncrement }, function(){
			//message('settings saved')
		});
	
	},

	getScrollIncrement: function() {
		return wasdScroller.scrollIncrement;
	},

	setActive: function(data) {
		if(data.active != undefined){
			wasdScroller.active = data.active;
		}

		chrome.storage.sync.set({'active': data.active}, function(){
			//message('settings saved');
		});
	},

	getActive: function() {
		return wasdScroller.active;
	}
};

wasdScroller.initialize();
wasdScroller.setActive({active: true});

chrome.extension.onMessage.addListener(function(request,sender,sendResponse) {
	var response = {
		active: wasdScroller.getActive(),
		keycode: request.keycode,
		x: 0,
		y: 0,
	};

	if(request.keycode == 17){
		if(++wasdScroller.ctrlCount > 1){
			wasdScroller.setActive({active: !wasdScroller.getActive()}, function() { } );		
			wasdScroller.ctrlCount = 0;
		}
	}else {
		wasdScroller.ctrlCount = 0;
	}

	if(wasdScroller.active == false){
		sendResponse(response);
		return true;
	}

    switch(request.keycode) {
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
