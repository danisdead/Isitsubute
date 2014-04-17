$(document).ready(function(){

	var overlay = $('<div>').attr('id', 'overlay_productos');
	var overlay2 = $('<div>').attr('id', 'overlay_recetas');
	overlay.css({'height' : '800px', 'background' : 'url("img/TOOLTIP_PATTERN.png") repeat-x', 'position': 'fixed', 'top' : '0px', 'margin' : '10% 0 0 -40%', 'z-index' : '2', 'width': '80%', 'left' : '50%', 'display' : 'none'});
	overlay2.css({'height' : '800px', 'position': 'fixed', 'top' : '0px', 'margin' : '5% 0 0 -40%', 'z-index' : '2', 'width': '80%', 'left' : '50%', 'display' : 'none'});
	$('.example-image').on('click', function(){
		var id = $(this).attr('id');
		
		switch(id){
			case "camaron_plus":
				$(document).find('div#contentOverlay').empty().append(overlay);
				var content_camaron = "<div style='background: url(img/producto_camaron.png) no-repeat; float: left; width: 131px; height: 332px; margin: 70px 27px 30px 80px;'></div><div style='float: left; width: 50%; heigth: inherit; margin-top: 15px;'><span style='font-size: 48px; color: #FFF;'>Camar&oacute;n</span><div class='scroll-pane' style='height: 300px;'><h4>Descripci&oacute;n de Producto</h4><p>Clamato el original es delicioso jugo de tomate, especias y un toque de almeja.&nbsp;<br /><br />Clamato Camar&oacute;n es delicioso jugo de tomate, especias y con un toque de camar&oacute;n.<br /><br />Clamato Vuelve a la Vida es delicioso Jugo de Tomate con Mezcla de Mariscos (camar&oacute;n, pulpo y osti&oacute;n) y un toque picosito.</p><h4>Beneficios</h4><p>&bull; Contienen antioxidantes naturales.&nbsp;<br /><br />&bull; Sabor original.&nbsp;<br /><br />&bull; Fuente natural de energ&iacute;a.&nbsp;<br /><br />&bull; Clamato el original es delicioso s&oacute;lo o combinado; con sal y lim&oacute;n, Salsa Inglesa, picante, con mariscos o con cualquier bebida como Cerveza, Tequila o Vodka.</p><h4>Historia</h4><p>&bull; Debido al intenso calor que prevalece en la Ciudad de Mexicali , la gente empez&oacute; a sentir la necesidad de mezclar productos que los refrescar&aacute;n y al mismo tiempo experimentar diferentes sabores a los ya conocidos, por lo que una cantina se inventa una bebida llamada &ldquo;El coloradito&rdquo;, en aquel entonces no era m&aacute;s que jugo de tomate con cerveza, continuaron as&iacute; haciendo esa mezcla hasta que surge Clamato, El original, convirti&eacute;ndose en una tradici&oacute;n.&nbsp;<br /><br />&bull; Como marca, Clamato surge en 1929 en California por la compa&ntilde;&iacute;a Duffy Mott.&nbsp;<br /><br />&bull; En 1982, Cadbury Schweppes adquiere Duffy Motts y con ella Clamato.&nbsp;<br /><br />&bull; En el 2008, Cadbury Scwheppes cambia a Grupo Pe&ntilde;afiel, y clamato sigue formando parte de esta gran familia.&nbsp;<br />&nbsp;</p><h4>Presentaciones</h4><p>- Vidrio: 296 ml, 473ml,&nbsp;<br /><br />- Pet: 946ml, 1,890ml,&nbsp;<br /><br />- Lata: 163ml, 340ml</p></div></div><div id='tache_cerrar' onclick='cerrar();' style='float: right; cursor:pointer; background: url(img/CERRAR.png); height: 38px; width: 38px; margin: 10px 10px 0px 0px;'></div><div style='float:left;'><div style='float: left; margin: 68px 0 0 30px;'><img src='img/tbl-camaron.jpg' width='171px' height='335px'></div></div>";
				$(document).find('div#overlay_productos').append(content_camaron);
				$('div#overlay_productos').fadeIn('medium');
			break;
			case "original_plus":
				$(document).find('div#contentOverlay').empty().append(overlay);
				var content_original = "<div style='background: url(img/CLAMATO_WEB_N.png) no-repeat; float: left; width: 131px; height: 332px; margin: 70px 27px 30px 80px;'></div><div style='float: left; width: 50%; heigth: inherit; margin-top: 15px;'><span style='font-size: 48px; color: #FFF;'>Original</span><div class='scroll-pane' style='height: 300px;'><h4>Descripci&oacute;n de Producto</h4><p>Clamato el original es delicioso jugo de tomate, especias y un toque de almeja.&nbsp;<br /><br />Clamato Camar&oacute;n es delicioso jugo de tomate, especias y con un toque de camar&oacute;n.<br /><br />Clamato Vuelve a la Vida es delicioso Jugo de Tomate con Mezcla de Mariscos (camar&oacute;n, pulpo y osti&oacute;n) y un toque picosito.</p><h4>Beneficios</h4><p>&bull; Contienen antioxidantes naturales.&nbsp;<br /><br />&bull; Sabor original.&nbsp;<br /><br />&bull; Fuente natural de energ&iacute;a.&nbsp;<br /><br />&bull; Clamato el original es delicioso s&oacute;lo o combinado; con sal y lim&oacute;n, Salsa Inglesa, picante, con mariscos o con cualquier bebida como Cerveza, Tequila o Vodka.</p><h4>Historia</h4><p>&bull; Debido al intenso calor que prevalece en la Ciudad de Mexicali , la gente empez&oacute; a sentir la necesidad de mezclar productos que los refrescar&aacute;n y al mismo tiempo experimentar diferentes sabores a los ya conocidos, por lo que una cantina se inventa una bebida llamada &ldquo;El coloradito&rdquo;, en aquel entonces no era m&aacute;s que jugo de tomate con cerveza, continuaron as&iacute; haciendo esa mezcla hasta que surge Clamato, El original, convirti&eacute;ndose en una tradici&oacute;n.&nbsp;<br /><br />&bull; Como marca, Clamato surge en 1929 en California por la compa&ntilde;&iacute;a Duffy Mott.&nbsp;<br /><br />&bull; En 1982, Cadbury Schweppes adquiere Duffy Motts y con ella Clamato.&nbsp;<br /><br />&bull; En el 2008, Cadbury Scwheppes cambia a Grupo Pe&ntilde;afiel, y clamato sigue formando parte de esta gran familia.&nbsp;<br />&nbsp;</p><h4>Presentaciones</h4><p>- Vidrio: 296 ml, 473ml,&nbsp;<br /><br />- Pet: 946ml, 1,890ml,&nbsp;<br /><br />- Lata: 163ml, 340ml</p></div></div><div id='tache_cerrar' onclick='cerrar();' style='float: right; cursor: pointer; background: url(img/CERRAR.png); height: 38px; width: 38px; margin: 10px 10px 0px 0px;'></div><div style='float:left;'><div style='float: left; margin: 68px 0 0 20px;'><img src='img/tbl-original.jpg' width='171px' height='335px'></div></div>";
				$(document).find('div#overlay_productos').append(content_original);
				$('div#overlay_productos').fadeIn('medium');
			break;
			case "ceviche_plus":
				$(document).find('div#contentOverlay').empty().append(overlay);
				$(document).find('div#overlay_productos').append();
				$('div#overlay_productos').fadeIn('medium');
			break;
			case "vuelve_plus":
				$(document).find('div#contentOverlay').empty().append(overlay);
				var content_vuelve = "<div style='background: url(img/Producto_vuelvealavida.png) no-repeat; float: left; width: 131px; height: 332px; margin: 70px 27px 30px 80px;'></div><div style='float: left; width: 50%; heigth: inherit; margin-top: 15px;'><span style='font-size: 48px; color: #FFF;'>Vuelve a la Vida</span><div class='scroll-pane' style='height: 300px;'><h4>Descripci&oacute;n de Producto</h4><p>Clamato el original es delicioso jugo de tomate, especias y un toque de almeja.&nbsp;<br /><br />Clamato Camar&oacute;n es delicioso jugo de tomate, especias y con un toque de camar&oacute;n.<br /><br />Clamato Vuelve a la Vida es delicioso Jugo de Tomate con Mezcla de Mariscos (camar&oacute;n, pulpo y osti&oacute;n) y un toque picosito.</p><h4>Beneficios</h4><p>&bull; Contienen antioxidantes naturales.&nbsp;<br /><br />&bull; Sabor original.&nbsp;<br /><br />&bull; Fuente natural de energ&iacute;a.&nbsp;<br /><br />&bull; Clamato el original es delicioso s&oacute;lo o combinado; con sal y lim&oacute;n, Salsa Inglesa, picante, con mariscos o con cualquier bebida como Cerveza, Tequila o Vodka.</p><h4>Historia</h4><p>&bull; Debido al intenso calor que prevalece en la Ciudad de Mexicali , la gente empez&oacute; a sentir la necesidad de mezclar productos que los refrescar&aacute;n y al mismo tiempo experimentar diferentes sabores a los ya conocidos, por lo que una cantina se inventa una bebida llamada &ldquo;El coloradito&rdquo;, en aquel entonces no era m&aacute;s que jugo de tomate con cerveza, continuaron as&iacute; haciendo esa mezcla hasta que surge Clamato, El original, convirti&eacute;ndose en una tradici&oacute;n.&nbsp;<br /><br />&bull; Como marca, Clamato surge en 1929 en California por la compa&ntilde;&iacute;a Duffy Mott.&nbsp;<br /><br />&bull; En 1982, Cadbury Schweppes adquiere Duffy Motts y con ella Clamato.&nbsp;<br /><br />&bull; En el 2008, Cadbury Scwheppes cambia a Grupo Pe&ntilde;afiel, y clamato sigue formando parte de esta gran familia.&nbsp;<br />&nbsp;</p><h4>Presentaciones</h4><p>- Vidrio: 296 ml, 473ml,&nbsp;<br /><br />- Pet: 946ml, 1,890ml,&nbsp;<br /><br />- Lata: 163ml, 340ml</p></div></div><div id='tache_cerrar' onclick='cerrar();' style='float: right; cursor: pointer; background: url(img/CERRAR.png); height: 38px; width: 38px; margin: 10px 10px 0px 0px;'></div><div style='float:left;'><div style='float: left; margin: 68px 0 0 20px;'><img src='img/tabla_vuelvealavida.png' width='171px' height='335px'></div></div>";			
				$(document).find('div#overlay_productos').append(content_vuelve);
				$('div#overlay_productos').fadeIn('medium');
			break;
			case "clamachela":
				$(document).find('div#contentOverlay').empty().append(overlay2);
				var content_clamachela = "<div style='background: url(img/recetasclamato/CLAMACHELA.png) no-repeat; width: 1020px; height:572px;'></div>"
				$(document).find('div#overlay_recetas').append(content_clamachela);
				$('div#overlay_recetas').fadeIn('medium');
			break;
			case "preparado":
				$(document).find('div#contentOverlay').empty().append(overlay2);
				var content_preparado = "<div style='background: url(img/recetasclamato/CLAMATOPREPARADO.png) no-repeat; width: 1020px; height:572px;'></div>"
				$(document).find('div#overlay_recetas').append(content_preparado);
				$('div#overlay_recetas').fadeIn('medium');
			break;
			case "norteno":
				$(document).find('div#contentOverlay').empty().append(overlay2);
				var content_norteno = "<div style='background: url(img/recetasclamato/CLAMATONORTENO.png) no-repeat; width: 1020px; height:572px;'></div>"
				$(document).find('div#overlay_recetas').append(content_norteno);
				$('div#overlay_recetas').fadeIn('medium');
			break;
			case "lagartija":
				$(document).find('div#contentOverlay').empty().append(overlay2);
				var content_lagartija = "<div style='background: url(img/recetasclamato/ALMEJAYLAGARTIJA.png) no-repeat; width: 1020px; height:572px;'></div>"
				$(document).find('div#overlay_recetas').append(content_lagartija);
				$('div#overlay_recetas').fadeIn('medium');
			break;
			case "pinta":
				$(document).find('div#contentOverlay').empty().append(overlay2);
				var content_pinta = "<div style='background: url(img/recetasclamato/TEVASDEPINTA.png) no-repeat; width: 1020px; height:572px;'></div>"
				$(document).find('div#overlay_recetas').append(content_pinta);
				$('div#overlay_recetas').fadeIn('medium');
			break;
			case "muertos":
				$(document).find('div#contentOverlay').empty().append(overlay2);
				var content_muertos = "<div style='background: url(img/recetasclamato/LEVANTAMUERTOS.png) no-repeat; width: 1020px; height:572px;'></div>"
				$(document).find('div#overlay_recetas').append(content_muertos);
				$('div#overlay_recetas').fadeIn('medium');
			break;
			case "sopafria":
				$(document).find('div#contentOverlay').empty().append(overlay2);
				var content_sopafria = "<div style='background: url(img/recetasclamato/CLAMATOSOPAFRIA.png) no-repeat; width: 1020px; height:572px;'></div>"
				$(document).find('div#overlay_recetas').append(content_sopafria);
				$('div#overlay_recetas').fadeIn('medium');
			break;
			case "frutimare":
				$(document).find('div#contentOverlay').empty().append(overlay2);
				var content_frutimare = "<div style='background: url(img/recetasclamato/FRUTIDIMAE.png) no-repeat; width: 1020px; height:572px;'></div>"
				$(document).find('div#overlay_recetas').append(content_frutimare);
				$('div#overlay_recetas').fadeIn('medium');
			break;
			case "lluviafuego":
				$(document).find('div#contentOverlay').empty().append(overlay2);
				var content_lluviafuego = "<div style='background: url(img/recetasclamato/LLUVIADEFUEGO.png) no-repeat; width: 1020px; height:572px;'></div>"
				$(document).find('div#overlay_recetas').append(content_lluviafuego);
				$('div#overlay_recetas').fadeIn('medium');
			break;
			case "oriental":
				$(document).find('div#contentOverlay').empty().append(overlay2);
				var content_oriental = "<div style='background: url(img/recetasclamato/ORIENTAL.png) no-repeat; width: 1020px; height:572px;'></div>"
				$(document).find('div#overlay_recetas').append(content_oriental);
				$('div#overlay_recetas').fadeIn('medium');
			break;
			case "aguachile":
				$(document).find('div#contentOverlay').empty().append(overlay2);
				var content_aguachile = "<div style='background: url(img/recetasclamato/AGUACHILEVV.png) no-repeat; width: 1020px; height:572px;'></div>"
				$(document).find('div#overlay_recetas').append(content_aguachile);
				$('div#overlay_recetas').fadeIn('medium');
			break;
			case "puestadesol":
				$(document).find('div#contentOverlay').empty().append(overlay2);
				var content_puestadesol = "<div style='background: url(img/recetasclamato/ALMEJASPUESTADESOL.png) no-repeat; width: 1020px; height:572px;'></div>"
				$(document).find('div#overlay_recetas').append(content_puestadesol);
				$('div#overlay_recetas').fadeIn('medium');
			break;
		}

		$(function(){
			$('.scroll-pane').jScrollPane({
				showArrows: true/*,
				arrowScrollOnHover: true*/
			});
		});

	})

	$(document).mouseup(function (e){

	    var container = $("div#overlay_productos");
	    var recetas = $("div#overlay_recetas");

	    if (!container.is(e.target) && container.has(e.target).length === 0){
	        container.fadeOut('medium').empty();
	    }

	   	if (!recetas.is(e.target)){
	        recetas.fadeOut('medium').empty();
	    }

	});

})