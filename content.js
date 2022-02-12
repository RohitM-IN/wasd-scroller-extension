var wasdScroller = {
	scrollIncrement : 100,
	ctrlCount: 0,


	keyPressEvent: function( evt ) {
		var retval = true;

		switch(evt.keyCode){
	        case 17: // d
				break;
	      	case 87: // w
	        case 65: // a
	        case 83: // s
	        case 68: // d
				if(evt.target.readOnly == undefined || evt.target.readOnly == true) {
					retval = false;
				}
			default: break;
		}

		chrome.extension.sendMessage(
			{keycode: evt.keyCode, active: wasdScroller.active}, 
			
			function(response){ 
				if( retval == false && response.active ) {
					wasdScroller.doScroll(response.x,response.y);
				} 
			}
		);
		
		return retval;
	},

	doScroll : function ( x, y ) {
		window.scrollBy(x,y);
	},


	initialize: function() {
		window.onkeydown = this.keyPressEvent;
		window.onfocus = function(evt){
			console.log(evt);
		};
	}
};

wasdScroller.initialize();

