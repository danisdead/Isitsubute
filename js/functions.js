$(document).ready(function(){

	var overlay = $('<div>');
	overlay.css({'width': '800px', 'height' : '800px', 'background' : 'url("img/TOOLTIP_PATTERN.png") repeat-x', 'position': 'fixed', 'top' : '50px', 'margin' : '0 auto', 'z-index' : '2'});

	$('.example-image').on('click', function(){
		$(document).find('div#contentOverlay').append(overlay);
	})
})