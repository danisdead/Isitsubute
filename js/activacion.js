$(document).ready(function(){

	$(document).find('div#slide1').css({'height' : window.innerHeight/*, 'width' : window.innerWidth*/});
	$(document).find('div#slide2').css({'height' : window.innerHeight/*, 'width' : window.innerWidth*/});
	$(document).find('div#slide3').css({'height' : window.innerHeight/*, 'width' : window.innerWidth*/});

	/*Acomoda las flechas de siguiente y anterior al inicio y al final de la pantalla*/
	$(document).find('#sig_s1').css({'top' : window.innerHeight - (window.innerHeight * 1.15)});
	//$(document).find('#sig_s2').css({'top' : 0});
	//$(document).find('#ant_s1').css({'top' : 0});
	$(document).find('#ant_s2').css({'top' : window.innerHeight - (window.innerHeight * 1.1)});
	$(document).find('#ant_s3').css({'top' : window.innerHeight - (window.innerHeight * 1.07)});

	var overActivacion = $('<div>').attr('id', 'over_act');
	overActivacion.css({'background-color' : 'red', 'height' : '200px', 'background' : 'url("img/TOOLTIP_PATTERN2.png") repeat-x', 'position': 'fixed', 'top' : '0px', 'margin' : '10% 0 0 -40%', 'z-index' : '2',  'left' : '50%', 'display' : 'none'});
	
	$('.ver_activaciones').on('click', function(){
		console.log();
		$(document).find('div#activacionesOverlay').empty().append(overActivacion);
		var content_activacion = "<div id='leftpanel'><div style='color:white; font-size:20px; margin:28px;'>Selecciona la fecha:</div><div class='styled-select'><select name='select_activacion' id='select_activacion' onchange='cambiarImg()'><option value='img/17_Abril.png'>17 Abril</option><option value='img/18_Abril.png'>18 Abril</option><option value='img/19_Abril.png'>19 Abril</option></select></div></div><div id='rightpanel'><img id='img_activacion' src='img/17_Abril.png' style='width: 92%;'/></div>";
		$(document).find('div#over_act').append(content_activacion);
		$('div#over_act').fadeIn('medium');
	})

	$(document).mouseup(function (e){

	    var cont_act = $("div#over_act");
	    if (!cont_act.is(e.target) && cont_act.has(e.target).length === 0){
	        cont_act.fadeOut('medium').empty();
	    }

	});

})