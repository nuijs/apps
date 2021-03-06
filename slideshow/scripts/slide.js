var controllerOptions = { port: 3000 };

function setupWebSocket() {
	var ws = new WebSocket("ws://localhost:3000/");
	ws.onopen = function() {
		console.log("camera connected");
	}
	return ws;
}
var ws = setupWebSocket();
//comment out the above lines, if using this app with a leap motion controller
//when not using the leap motion controller, this application acts both as a client and server

var slide = function() {
	var currentPageNumber = 1, maxPageNumber = 5;

	var hasMorePages = function(direction) {
		return direction == 'prev' ? (currentPageNumber > 1) : (currentPageNumber < maxPageNumber);
	};

	var getCurrentPageNumber = function() {
		return currentPageNumber;
	};

	var updatePageNumber = function(direction) {
		if(direction == 'prev') 
			currentPageNumber = currentPageNumber > 1 ? currentPageNumber - 1 : 0;
		else
			currentPageNumber = currentPageNumber != maxPageNumber ? currentPageNumber + 1 : maxPageNumber;
	};

	return {
		prevPage: function() {
			if(hasMorePages('prev')) {
		 		$('.slide').css('display', 'none');
		 		//$('#slide'+currentPageNumber).removeClass('prev-animation');
		 		//$('#slide'+currentPageNumber).removeClass('next-animation');
		 		updatePageNumber('prev');
		 		//$('#slide'+currentPageNumber).addClass('prev-animation');
		 		$('#slide'+currentPageNumber).css('display', 'block');
		 	} else console.log('first page');
		},

		nextPage: function() {
			if(hasMorePages('next')) {
		 		$('.slide').css('display', 'none');
		 		//$('#slide'+currentPageNumber).removeClass('prev-animation');
		 		//$('#slide'+currentPageNumber).removeClass('next-animation');
		 		updatePageNumber('next');
		 		//$('#slide'+currentPageNumber).addClass('next-animation');
		 		$('#slide'+currentPageNumber).css('display', 'block');
		 	} else console.log('last page');
		}
	}
}();

Leap.loop(controllerOptions, function(frame) {
    var hand = frame.hands[0] && frame.hands[0].type; //right or left hand 
    if(hand == 'right') slide.nextPage();
    else if(hand == 'left') slide.prevPage();
});