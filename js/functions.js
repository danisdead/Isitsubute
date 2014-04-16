$(document).ready(function(){

	var overlay = $('<div>').attr('id', 'overlay_productos');
	overlay.css({'height' : '800px', 'background' : 'url("img/TOOLTIP_PATTERN.png") repeat-x', 'position': 'fixed', 'top' : '0px', 'margin' : '10% 0 0 -40%', 'z-index' : '2', 'width': '80%', 'left' : '50%', 'display' : 'none'});

	$('.example-image').on('click', function(){
		$(document).find('div#contentOverlay').append(overlay);
		$('div#overlay_productos').fadeIn('medium');
	})

	$(document).mouseup(function (e){

	    var container = $("div#overlay_productos");

	    if (!container.is(e.target) && container.has(e.target).length === 0){
	        container.fadeOut('medium');
	    }

	});

})