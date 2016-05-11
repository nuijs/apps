var slide = function() {
	var currentPageNumber = 0, maxPageNumber = 4;

	var hasMorePages = function(direction) {
		return direction == 'prev' ? currentPageNumber > 0 : currentPageNumber < maxPageNumber;
	};

	var getCurrentPageNumber = function() {
		return currentPageNumber;
	};

	var updatePageNumber = function(direction) {
		if(direction == 'prev') 
			currentPageNumber = currentPageNumber != 0 ? currentPageNumber - 1 : 0;
		else
			currentPageNumber = currentPageNumber != maxPageNumber ? currentPageNumber + 1 : maxPageNumber;
	};

	return {
		prevPage: function() {
			if(hasMorePages('prev')) {
		 		$('.slide').css('display', 'none');
		 		updatePageNumber('prev');
		 		$('#slide'+currentPageNumber).addClass('prev-animation');
		 		$('#slide'+currentPageNumber).css('display', 'block');
		 	} else console.log('first page');
		},

		nextPage: function() {
			if(hasMorePages('next')) {
		 		$('.slide').css('display', 'none');
		 		updatePageNumber('next');
		 		$('#slide'+currentPageNumber).addClass('next-animation');
		 		$('#slide'+currentPageNumber).css('display', 'block');
		 	} else console.log('last page');
		}
	}
}();