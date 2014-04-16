$(document).ready(function(){

	$(function(){
		$('.scroll-pane').jScrollPane({
			showArrows: true,
			arrowScrollOnHover: true
		});
	});

	var overlay = $('<div>').attr('id', 'overlay_productos');
	overlay.css({'height' : '800px', 'background' : 'url("img/TOOLTIP_PATTERN.png") repeat-x', 'position': 'fixed', 'top' : '0px', 'margin' : '10% 0 0 -40%', 'z-index' : '2', 'width': '80%', 'left' : '50%', 'display' : 'none'});

	$('.example-image').on('click', function(){
		var id = $(this).attr('id');

$(document).find('div#contentOverlay').append(overlay);
		switch(id){

			case "camaron_plus":
			var content_camaron = "<div style='background: url(img/producto_camaron.png) no-repeat; float: left; width: 131px; height: 332px; margin: 70px 27px 30px 27px;'></div><div style='float: left; width: 470px; heigth: inherit; margin-top: 15px;'><span style='font-size: 48px; color: #FFF;'>Original</span><div class='scroll-pane' style='height: 300px;'><h3>Descripci&oacute;n de Producto</h3><p>Clamato el original es delicioso jugo de tomate, especias y un toque de almeja.&nbsp;<br /><br />Clamato Camar&oacute;n es delicioso jugo de tomate, especias y con un toque de camar&oacute;n.<br /><br />Clamato Vuelve a la Vida es delicioso Jugo de Tomate con Mezcla de Mariscos (camar&oacute;n, pulpo y osti&oacute;n) y un toque picosito.</p><h3>Beneficios</h3><p>&bull; Contienen antioxidantes naturales.&nbsp;<br /><br />&bull; Sabor original.&nbsp;<br /><br />&bull; Fuente natural de energ&iacute;a.&nbsp;<br /><br />&bull; Clamato el original es delicioso s&oacute;lo o combinado; con sal y lim&oacute;n, Salsa Inglesa, picante, con mariscos o con cualquier bebida como Cerveza, Tequila o Vodka.</p><h3>Historia</h3><p>&bull; Debido al intenso calor que prevalece en la Ciudad de Mexicali , la gente empez&oacute; a sentir la necesidad de mezclar productos que los refrescar&aacute;n y al mismo tiempo experimentar diferentes sabores a los ya conocidos, por lo que una cantina se inventa una bebida llamada &ldquo;El coloradito&rdquo;, en aquel entonces no era m&aacute;s que jugo de tomate con cerveza, continuaron as&iacute; haciendo esa mezcla hasta que surge Clamato, El original, convirti&eacute;ndose en una tradici&oacute;n.&nbsp;<br /><br />&bull; Como marca, Clamato surge en 1929 en California por la compa&ntilde;&iacute;a Duffy Mott.&nbsp;<br /><br />&bull; En 1982, Cadbury Schweppes adquiere Duffy Motts y con ella Clamato.&nbsp;<br /><br />&bull; En el 2008, Cadbury Scwheppes cambia a Grupo Pe&ntilde;afiel, y clamato sigue formando parte de esta gran familia.&nbsp;<br />&nbsp;</p><h3>Presentaciones</h3><p>- Vidrio: 296 ml, 473ml,&nbsp;<br /><br />- Pet: 946ml, 1,890ml,&nbsp;<br /><br />- Lata: 163ml, 340ml</p></div></div><div style='float: right; background: url(img/CERRAR.png); height: 38px; width: 38px; margin: 10px 10px 0px 0px;'></div><div style='float:left;'><div style='float: left; margin: 68px 0 0 20;'><img src='img/tbl-camaron.jpg' width='171px' height='335px'></div></div>"
			$(document).find('div#overlay_productos').append(content_camaron);
			break;
			case "original_plus":
			$(document).find('div#overlay_productos').append()
			break;
			case "ceviche_plus":
			$(document).find('div#overlay_productos').append()
			break;
			case "vuelve_plus":
			$(document).find('div#overlay_productos').append()
			break;
		}


		
		$('div#overlay_productos').fadeIn('medium');
	})

	$(document).mouseup(function (e){

	    var container = $("div#overlay_productos");

	    if (!container.is(e.target) && container.has(e.target).length === 0){
	        container.fadeOut('medium');
	        container.empty();
	    }

	});

})