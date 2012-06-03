(function($) {
	$.fn.doModal = function(container) {
		
	var modalPopup = $(container).find('.modal-popup'),
		modalContainer = $(container).find('.modal-container'),
		modalClose = $(container).find('.modal-close'),
		modalOverlay = $(container).find('.modal-overlay'),
		modalBackground = $(container).find('.modal-bg');
	
	$(container).hide();
	
	$(this).click(function(){
		$(container).show();
		var windowHeight = $(window).height()/2;
		var windowWidth = $(window).width()/2;
		var modalHeight = $(modalContainer).height()/2;
		var modalWidth =  $(modalContainer).width()/2;
		
	/*	$(modalContainer).css({
			marginTop: windowHeight - modalHeight,
			marginLeft: windowWidth - modalWidth
			});
*/
		$('body').css("overflow", "hidden");
		$(modalBackground).css("overflow", "scroll");
		
		$(modalPopup).add(container).height($(document).height());
		$(modalPopup).add(container).width($(document).width());
		
		$(modalPopup).animate({
			opacity:1,
			zIndex:999
			},300);
			
		$(modalClose).add(modalOverlay).click(function(e){
			$(modalPopup).animate({opacity: 0}, 300, function(){
					$('body').css("overflow", "auto");
					$(container).hide();
				});
				e.preventDefault();
			});
	});
	}
})(jQuery);