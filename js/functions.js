$(document).ready(function(){

	var resolution_width = window.screen.availWidth;

	var overlay = $('<div>').attr('id', 'overlay_productos');   // Overlay Productos.
	var overlay2 = $('<div>').attr('id', 'overlay_recetas');   // Overlay Recetas.	

	if(resolution_width <= '768'){

		if(navigator.platform.indexOf("iPad") != -1){
				overlay.css({'height' : '80%', 'background' : 'url("img/TOOLTIP_PATTERN.png") repeat-x', 'background-size' : 'cover' , 'position': 'fixed', 'top' : '40px', 'margin' : '8% 0 0 -40%', 'z-index' : '2', 'width': '80%', 'left' : '50%', 'display' : 'none'});
		}else{
				overlay.css({'height' : '900px', 'background' : 'url("img/TOOLTIP_PATTERN.png") repeat-x', 'background-size' : 'cover' , 'position': 'fixed', 'top' : '40px', 'margin' : '10% 0 0 -40%', 'z-index' : '2', 'width': '80%', 'left' : '50%', 'display' : 'none'});
				overlay2.css({'top' : '60px', 'display' : 'none', 'width' : '90%', 'left' : '45%'});
		}


	}else{
		overlay.css({'height' : '800px', 'background' : 'url("img/TOOLTIP_PATTERN.png") repeat-x', 'position': 'fixed', 'top' : '0px', 'margin' : '10% 0 0 -40%', 'z-index' : '2', 'width': '80%', 'left' : '50%', 'display' : 'none'});
		overlay2.css({'height' : '800px', 'position' : 'fixed', 'top' : '0px', 'margin' : '5% 0 0 -40%', 'z-index' : '2', 'width' : '80%', 'left' : '50%', 'display' : 'none'});
	}

	
	$('.example-image').on('click', function(){
		var id = $(this).attr('id');
		
		switch(id){
			case "camaron_plus":
				$(document).find('div#contentOverlay').empty().append(overlay);

				if(resolution_width <= '768' ){
					var content_camaron = "<div class='contenedor_prod'> <div style='padding-right: 40px;'><img class='img_prod' src='img/producto_camaron.png'></div> <div style='float: left;'><img class='tbl_prod' src='img/tbl-camaron.jpg'> </div></div><div style='float: left; width: 50%; heigth: inherit; margin-top: 15px;'> <span class='titulo_prod'>Camar&oacute;n</span> <div class='scroll-pane' style='height: 350px; margin-top: 40px; width: 500px;'> <h4>Descripci&oacute;n de Producto</h4> <div class='descripcion_prod'><p>Clamato el original es delicioso jugo de tomate, especias y un toque de almeja.&nbsp; <br /> <br />Clamato Camar&oacute;n es delicioso jugo de tomate, especias y con un toque de camar&oacute;n. <br /> <br />Clamato Vuelve a la Vida es delicioso Jugo de Tomate con Mezcla de Mariscos (camar&oacute;n, pulpo y osti&oacute;n) y un toque picosito.</p> <h4>Beneficios</h4> <p>&bull; Contienen antioxidantes naturales.&nbsp; <br /> <br />&bull; Sabor original.&nbsp; <br /> <br />&bull; Fuente natural de energ&iacute;a.&nbsp; <br /> <br />&bull; Clamato el original es delicioso s&oacute;lo o combinado; con sal y lim&oacute;n, Salsa Inglesa, picante, con mariscos o con cualquier bebida como Cerveza, Tequila o Vodka.</p> <h4>Historia</h4> <p>&bull; Debido al intenso calor que prevalece en la Ciudad de Mexicali , la gente empez&oacute; a sentir la necesidad de mezclar productos que los refrescar&aacute;n y al mismo tiempo experimentar diferentes sabores a los ya conocidos, por lo que una cantina se inventa una bebida llamada &ldquo;El coloradito&rdquo;, en aquel entonces no era m&aacute;s que jugo de tomate con cerveza, continuaron as&iacute; haciendo esa mezcla hasta que surge Clamato, El original, convirti&eacute;ndose en una tradici&oacute;n.&nbsp; <br /> <br />&bull; Como marca, Clamato surge en 1929 en California por la compa&ntilde;&iacute;a Duffy Mott.&nbsp; <br /> <br />&bull; En 1982, Cadbury Schweppes adquiere Duffy Motts y con ella Clamato.&nbsp; <br /> <br />&bull; En el 2008, Cadbury Scwheppes cambia a Grupo Pe&ntilde;afiel, y clamato sigue formando parte de esta gran familia.&nbsp; <br />&nbsp;</p> <h4>Presentaciones</h4> <p>- Vidrio: 296 ml, 473ml,&nbsp; <br /> <br />- Pet: 946ml, 1,890ml,&nbsp; <br /> <br />- Lata: 163ml, 340ml</p> </div></div></div><div id='tache_cerrar' class='cerrar_prod' onclick='cerrar();'></div>"; 
				}else{
					var content_camaron = "<div style='background: url(img/producto_camaron.png) no-repeat; float: left; width: 131px; height: 332px; margin: 70px 27px 30px 80px;'></div><div style='float: left; width: 50%; heigth: inherit; margin-top: 15px;'><span style='font-size: 48px; color: #FFF;'>Camar&oacute;n</span><div class='scroll-pane' style='height: 300px;'><h4>Descripci&oacute;n de Producto</h4><p>Clamato el original es delicioso jugo de tomate, especias y un toque de almeja.&nbsp;<br /><br />Clamato Camar&oacute;n es delicioso jugo de tomate, especias y con un toque de camar&oacute;n.<br /><br />Clamato Vuelve a la Vida es delicioso Jugo de Tomate con Mezcla de Mariscos (camar&oacute;n, pulpo y osti&oacute;n) y un toque picosito.</p><h4>Beneficios</h4><p>&bull; Contienen antioxidantes naturales.&nbsp;<br /><br />&bull; Sabor original.&nbsp;<br /><br />&bull; Fuente natural de energ&iacute;a.&nbsp;<br /><br />&bull; Clamato el original es delicioso s&oacute;lo o combinado; con sal y lim&oacute;n, Salsa Inglesa, picante, con mariscos o con cualquier bebida como Cerveza, Tequila o Vodka.</p><h4>Historia</h4><p>&bull; Debido al intenso calor que prevalece en la Ciudad de Mexicali , la gente empez&oacute; a sentir la necesidad de mezclar productos que los refrescar&aacute;n y al mismo tiempo experimentar diferentes sabores a los ya conocidos, por lo que una cantina se inventa una bebida llamada &ldquo;El coloradito&rdquo;, en aquel entonces no era m&aacute;s que jugo de tomate con cerveza, continuaron as&iacute; haciendo esa mezcla hasta que surge Clamato, El original, convirti&eacute;ndose en una tradici&oacute;n.&nbsp;<br /><br />&bull; Como marca, Clamato surge en 1929 en California por la compa&ntilde;&iacute;a Duffy Mott.&nbsp;<br /><br />&bull; En 1982, Cadbury Schweppes adquiere Duffy Motts y con ella Clamato.&nbsp;<br /><br />&bull; En el 2008, Cadbury Scwheppes cambia a Grupo Pe&ntilde;afiel, y clamato sigue formando parte de esta gran familia.&nbsp;<br />&nbsp;</p><h4>Presentaciones</h4><p>- Vidrio: 296 ml, 473ml,&nbsp;<br /><br />- Pet: 946ml, 1,890ml,&nbsp;<br /><br />- Lata: 163ml, 340ml</p></div></div><div id='tache_cerrar' onclick='cerrar();' style='float: right; cursor:pointer; background: url(img/CERRAR.png); height: 38px; width: 38px; margin: 10px 10px 0px 0px;'></div><div style='float:left;'><div style='float: left; margin: 68px 0 0 30px;'><img src='img/tbl-camaron.jpg' width='171px' height='335px'></div></div>";
				}

				$(document).find('div#overlay_productos').append(content_camaron);
				$('div#overlay_productos').fadeIn('medium');
			break;
			case "original_plus":
				$(document).find('div#contentOverlay').empty().append(overlay);

				if(resolution_width <= '768'){

					var content_original = "<div class='contenedor_prod'><img src='img/CLAMATO_WEB_N.png' class='img_prod'> <div style='float: left;'> <img class='tbl_prod' src='img/tbl-original.jpg'> </div></div><div style='float: left; width: 50%; heigth: inherit; margin-top: 15px;'> <span class='titulo_prod'>Original</span> <div class='scroll-pane' style='height: 350px; margin-top: 40px; width: 500px;'> <h4>Descripci&oacute;n de Producto</h4> <div class='descripcion_prod'><p>Clamato el original es delicioso jugo de tomate, especias y un toque de almeja.&nbsp; <br /> <br />Clamato Camar&oacute;n es delicioso jugo de tomate, especias y con un toque de camar&oacute;n. <br /> <br />Clamato Vuelve a la Vida es delicioso Jugo de Tomate con Mezcla de Mariscos (camar&oacute;n, pulpo y osti&oacute;n) y un toque picosito.</p> <h4>Beneficios</h4> <p>&bull; Contienen antioxidantes naturales.&nbsp; <br /> <br />&bull; Sabor original.&nbsp; <br /> <br />&bull; Fuente natural de energ&iacute;a.&nbsp; <br /> <br />&bull; Clamato el original es delicioso s&oacute;lo o combinado; con sal y lim&oacute;n, Salsa Inglesa, picante, con mariscos o con cualquier bebida como Cerveza, Tequila o Vodka.</p> <h4>Historia</h4> <p>&bull; Debido al intenso calor que prevalece en la Ciudad de Mexicali , la gente empez&oacute; a sentir la necesidad de mezclar productos que los refrescar&aacute;n y al mismo tiempo experimentar diferentes sabores a los ya conocidos, por lo que una cantina se inventa una bebida llamada &ldquo;El coloradito&rdquo;, en aquel entonces no era m&aacute;s que jugo de tomate con cerveza, continuaron as&iacute; haciendo esa mezcla hasta que surge Clamato, El original, convirti&eacute;ndose en una tradici&oacute;n.&nbsp; <br /> <br />&bull; Como marca, Clamato surge en 1929 en California por la compa&ntilde;&iacute;a Duffy Mott.&nbsp; <br /> <br />&bull; En 1982, Cadbury Schweppes adquiere Duffy Motts y con ella Clamato.&nbsp; <br /> <br />&bull; En el 2008, Cadbury Scwheppes cambia a Grupo Pe&ntilde;afiel, y clamato sigue formando parte de esta gran familia.&nbsp; <br />&nbsp;</p> <h4>Presentaciones</h4> <p>- Vidrio: 296 ml, 473ml,&nbsp; <br /> <br />- Pet: 946ml, 1,890ml,&nbsp; <br /> <br />- Lata: 163ml, 340ml</p> </div></div></div><div id='tache_cerrar' onclick='cerrar();' style='float: right; cursor:pointer; background: url(img/CERRAR.png); height: 38px; width: 38px; margin: 10px 10px 0px 0px;'></div>";
				}else{

					var content_original = "<div style='background: url(img/CLAMATO_WEB_N.png) no-repeat; float: left; width: 131px; height: 332px; margin: 70px 27px 30px 80px;'></div><div style='float: left; width: 50%; heigth: inherit; margin-top: 15px;'><span style='font-size: 48px; color: #FFF;'>Original</span><div class='scroll-pane' style='height: 300px;'><h4>Descripci&oacute;n de Producto</h4><p>Clamato el original es delicioso jugo de tomate, especias y un toque de almeja.&nbsp;<br /><br />Clamato Camar&oacute;n es delicioso jugo de tomate, especias y con un toque de camar&oacute;n.<br /><br />Clamato Vuelve a la Vida es delicioso Jugo de Tomate con Mezcla de Mariscos (camar&oacute;n, pulpo y osti&oacute;n) y un toque picosito.</p><h4>Beneficios</h4><p>&bull; Contienen antioxidantes naturales.&nbsp;<br /><br />&bull; Sabor original.&nbsp;<br /><br />&bull; Fuente natural de energ&iacute;a.&nbsp;<br /><br />&bull; Clamato el original es delicioso s&oacute;lo o combinado; con sal y lim&oacute;n, Salsa Inglesa, picante, con mariscos o con cualquier bebida como Cerveza, Tequila o Vodka.</p><h4>Historia</h4><p>&bull; Debido al intenso calor que prevalece en la Ciudad de Mexicali , la gente empez&oacute; a sentir la necesidad de mezclar productos que los refrescar&aacute;n y al mismo tiempo experimentar diferentes sabores a los ya conocidos, por lo que una cantina se inventa una bebida llamada &ldquo;El coloradito&rdquo;, en aquel entonces no era m&aacute;s que jugo de tomate con cerveza, continuaron as&iacute; haciendo esa mezcla hasta que surge Clamato, El original, convirti&eacute;ndose en una tradici&oacute;n.&nbsp;<br /><br />&bull; Como marca, Clamato surge en 1929 en California por la compa&ntilde;&iacute;a Duffy Mott.&nbsp;<br /><br />&bull; En 1982, Cadbury Schweppes adquiere Duffy Motts y con ella Clamato.&nbsp;<br /><br />&bull; En el 2008, Cadbury Scwheppes cambia a Grupo Pe&ntilde;afiel, y clamato sigue formando parte de esta gran familia.&nbsp;<br />&nbsp;</p><h4>Presentaciones</h4><p>- Vidrio: 296 ml, 473ml,&nbsp;<br /><br />- Pet: 946ml, 1,890ml,&nbsp;<br /><br />- Lata: 163ml, 340ml</p></div></div><div id='tache_cerrar' onclick='cerrar();' style='float: right; cursor: pointer; background: url(img/CERRAR.png); height: 38px; width: 38px; margin: 10px 10px 0px 0px;'></div><div style='float:left;'><div style='float: left; margin: 68px 0 0 20px;'><img src='img/tbl-original.jpg' width='171px' height='335px'></div></div>";

				}
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

				if(resolution_width <= '768'){

					var content_vuelve = "<div class='contenedor_prod'> <img src='img/Producto_vuelvealavida.png' class='img_prod'> <div style='float: left;'> <img class='tbl_prod' src='img/tabla_vuelvealavida.png'> </div></div><div style='float: left; width: 50%; heigth: inherit; margin-top: 15px;'> <span class='titulo_prod'>Vuelve a la Vida</span> <div class='scroll-pane' style='height: 350px; margin-top: 40px; width: 500px;'> <h4>Descripci&oacute;n de Producto</h4> <p>Clamato el original es delicioso jugo de tomate, especias y un toque de almeja.&nbsp; <br /> <br />Clamato Camar&oacute;n es delicioso jugo de tomate, especias y con un toque de camar&oacute;n. <br /> <br />Clamato Vuelve a la Vida es delicioso Jugo de Tomate con Mezcla de Mariscos (camar&oacute;n, pulpo y osti&oacute;n) y un toque picosito.</p> <h4>Beneficios</h4> <p>&bull; Contienen antioxidantes naturales.&nbsp; <br /> <br />&bull; Sabor original.&nbsp; <br /> <br />&bull; Fuente natural de energ&iacute;a.&nbsp; <br /> <br />&bull; Clamato el original es delicioso s&oacute;lo o combinado; con sal y lim&oacute;n, Salsa Inglesa, picante, con mariscos o con cualquier bebida como Cerveza, Tequila o Vodka.</p> <h4>Historia</h4> <p>&bull; Debido al intenso calor que prevalece en la Ciudad de Mexicali , la gente empez&oacute; a sentir la necesidad de mezclar productos que los refrescar&aacute;n y al mismo tiempo experimentar diferentes sabores a los ya conocidos, por lo que una cantina se inventa una bebida llamada &ldquo;El coloradito&rdquo;, en aquel entonces no era m&aacute;s que jugo de tomate con cerveza, continuaron as&iacute; haciendo esa mezcla hasta que surge Clamato, El original, convirti&eacute;ndose en una tradici&oacute;n.&nbsp; <br /> <br />&bull; Como marca, Clamato surge en 1929 en California por la compa&ntilde;&iacute;a Duffy Mott.&nbsp; <br /> <br />&bull; En 1982, Cadbury Schweppes adquiere Duffy Motts y con ella Clamato.&nbsp; <br /> <br />&bull; En el 2008, Cadbury Scwheppes cambia a Grupo Pe&ntilde;afiel, y clamato sigue formando parte de esta gran familia.&nbsp; <br />&nbsp;</p> <h4>Presentaciones</h4> <p>- Vidrio: 296 ml, 473ml,&nbsp; <br /> <br />- Pet: 946ml, 1,890ml,&nbsp; <br /> <br />- Lata: 163ml, 340ml</p> </div></div><div id='tache_cerrar' onclick='cerrar();' style='float: right; cursor:pointer; background: url(img/CERRAR.png); height: 38px; width: 38px; margin: 10px 10px 0px 0px;'></div>";	

				}else{	

					var content_vuelve = "<div style='background: url(img/Producto_vuelvealavida.png) no-repeat; float: left; width: 131px; height: 332px; margin: 70px 27px 30px 80px;'></div><div style='float: left; width: 50%; heigth: inherit; margin-top: 15px;'><span style='font-size: 48px; color: #FFF;'>Vuelve a la Vida</span><div class='scroll-pane' style='height: 300px;'><h4>Descripci&oacute;n de Producto</h4><p>Clamato el original es delicioso jugo de tomate, especias y un toque de almeja.&nbsp;<br /><br />Clamato Camar&oacute;n es delicioso jugo de tomate, especias y con un toque de camar&oacute;n.<br /><br />Clamato Vuelve a la Vida es delicioso Jugo de Tomate con Mezcla de Mariscos (camar&oacute;n, pulpo y osti&oacute;n) y un toque picosito.</p><h4>Beneficios</h4><p>&bull; Contienen antioxidantes naturales.&nbsp;<br /><br />&bull; Sabor original.&nbsp;<br /><br />&bull; Fuente natural de energ&iacute;a.&nbsp;<br /><br />&bull; Clamato el original es delicioso s&oacute;lo o combinado; con sal y lim&oacute;n, Salsa Inglesa, picante, con mariscos o con cualquier bebida como Cerveza, Tequila o Vodka.</p><h4>Historia</h4><p>&bull; Debido al intenso calor que prevalece en la Ciudad de Mexicali , la gente empez&oacute; a sentir la necesidad de mezclar productos que los refrescar&aacute;n y al mismo tiempo experimentar diferentes sabores a los ya conocidos, por lo que una cantina se inventa una bebida llamada &ldquo;El coloradito&rdquo;, en aquel entonces no era m&aacute;s que jugo de tomate con cerveza, continuaron as&iacute; haciendo esa mezcla hasta que surge Clamato, El original, convirti&eacute;ndose en una tradici&oacute;n.&nbsp;<br /><br />&bull; Como marca, Clamato surge en 1929 en California por la compa&ntilde;&iacute;a Duffy Mott.&nbsp;<br /><br />&bull; En 1982, Cadbury Schweppes adquiere Duffy Motts y con ella Clamato.&nbsp;<br /><br />&bull; En el 2008, Cadbury Scwheppes cambia a Grupo Pe&ntilde;afiel, y clamato sigue formando parte de esta gran familia.&nbsp;<br />&nbsp;</p><h4>Presentaciones</h4><p>- Vidrio: 296 ml, 473ml,&nbsp;<br /><br />- Pet: 946ml, 1,890ml,&nbsp;<br /><br />- Lata: 163ml, 340ml</p></div></div><div id='tache_cerrar' onclick='cerrar();' style='float: right; cursor: pointer; background: url(img/CERRAR.png); height: 38px; width: 38px; margin: 10px 10px 0px 0px;'></div><div style='float:left;'><div style='float: left; margin: 68px 0 0 20px;'><img src='img/tabla_vuelvealavida.png' width='171px' height='335px'></div></div>";

				}
				$(document).find('div#overlay_productos').append(content_vuelve);
				$('div#overlay_productos').fadeIn('medium');
			break;
			case "clamachela":
				if(resolution_width <= '768'){
					var content_clamachela = "<div class='vertical_overlay'><div id='tache_cerrar' onclick='cerrar_receta();' style='float: right; cursor:pointer; background: url(img/CERRAR.png); height: 38px; width: 38px; margin: 10px 10px 0px 0px;'></div><h3 id='receta_titulo'>Clamachela</h3><img src='img/recetasclamato/Clamachela.jpg' id='img_receta' /><h4>Ingredientes</h4><div class='scroll-pane scroll-ingredientes'><p>Clamato Fr&iacute;o 1/4</p><p>Cerveza 3/4</p><p>Salsas sazonadoras (al gusto)</p><p>Lim&oacute;n 1</p><p>Sal (al gusto)</p></div><h4>Instrucciones</h4><div class='scroll-pane scroll-instrucciones'><p>- Escarcha el vaso de tu preferencia, ponle mucho hielo, exprime el lim&oacute;n completo y sal al gusto.</p><p>- Agregas unas gotas de salsas sazonadoras y le a&ntilde;ades Clamato y 3/4 partes de cerveza.</p></div></div>"
				}else{
					var content_clamachela = "<div style='background: url(img/recetasclamato/CLAMACHELA.png) no-repeat; width: 1020px; height:572px;'></div>"
				}
				$(document).find('div#contentOverlay').empty().append(overlay2);

				$(document).find('div#overlay_recetas').append(content_clamachela);
				$('div#overlay_recetas').fadeIn('medium');

			break;
			case "preparado":
				$(document).find('div#contentOverlay').empty().append(overlay2);
				if(resolution_width <= '768'){
					var content_preparado = "<div class='vertical_overlay'><div id='tache_cerrar' onclick='cerrar_receta();' style='float: right; cursor:pointer; background: url(img/CERRAR.png); height: 38px; width: 38px; margin: 10px 10px 0px 0px;'></div><h3 id='receta_titulo'>Clamato preparado</h3> <img src='img/recetasclamato/Clamachela.jpg' id='img_receta' /><h4>Ingredientes</h4><div class='scroll-pane scroll-ingredientes' ><p>Clamato Fr&iacute;o 10 oz</p><p>Sal 1 pizca</p><p>Pimienta 1/2 pizca</p><p>Salsa Maggi 7 ml</p><p>Salsa Inglesa 5 ml</p><p>Jugo de Lim&oacute;n 30 ml</p><p>Salsa Tabasco 3 ml</p><p>Hielo en Cubos 1/2 taza</p></div><h4>Instrucciones</h4><div class='scroll-pane scroll-instrucciones'><p>- En vaso&nbsp; escarchado de lim&oacute;n y sal y/o chile en polvo, se agregan las salsas y el jugo de lim&oacute;n.</p><p>- Se termina de llenar con Clamato,&nbsp; pimienta y sal.</p><p>- Se agita hasta mezclar perfectamente.</p><p>- Se decora con varita de apio y rodaja de lim&oacute;n. (opcional)</p></div></div>"
				} else {
					var content_preparado = "<div style='background: url(img/recetasclamato/CLAMATOPREPARADO.png) no-repeat; width: 1020px; height:572px;'></div>"
				}

				$(document).find('div#overlay_recetas').append(content_preparado);
				$('div#overlay_recetas').fadeIn('medium');
			break;
			case "norteno":
				if(resolution_width <= '768'){
					var content_norteno = "<div class='vertical_overlay'> <h3 id='receta_titulo'>Clamato norteño</h3> <img src='img/recetasclamato/ClamatoNorteno.jpg' id='img_receta' /><h4>Ingredientes</h4><div class='scroll-pane scroll-ingredientes'><p>Clamato</p><p>Especia Italiana</p><p>Apio</p><p>Carne Seca</p><p>Lim&oacute;n</p><p>Sal</p></div><h4>Instrucciones</h4><div class='scroll-pane scroll-instrucciones'><p>- Escarcha el vaso, agrega los ingredientes y disfr&uacute;talo.</p></div></div>"
				} else {
					var content_norteno = "<div style='background: url(img/recetasclamato/CLAMATONORTENO.png) no-repeat; width: 1020px; height:572px;'></div>"
				}
				$(document).find('div#contentOverlay').empty().append(overlay2);

				$(document).find('div#overlay_recetas').append(content_norteno);
				$('div#overlay_recetas').fadeIn('medium');
			break;
			case "lagartija":
				if(resolution_width <= '768'){
					var content_lagartija = "<div class='vertical_overlay'><div id='tache_cerrar' onclick='cerrar_receta();' style='float: right; cursor:pointer; background: url(img/CERRAR.png); height: 38px; width: 38px; margin: 10px 10px 0px 0px;'></div><h3 id='receta_titulo'>Almeja y Lagartija</h3> <img src='img/recetasclamato/AlmejaYLagartija.jpg' id='img_receta' /><h4>Ingredientes</h4><div class='scroll-pane scroll-ingredientes'><p>Clamato</p><p>Menta fresca</p><p>Jarabe natural</p><p>Jugo de Lim&oacute;n</p><p>Hielos</p><p>Agua mineral Pe&ntilde;afiel</p></div><h4>Instrucciones</h4><div class='scroll-pane scroll-instrucciones' ><p>- Mezcla todos los ingredientes, vierte en un vaso alto y descora con una rodaja de lim&oacute;n y una hoja de menta fresca.</p></div></div>"
				} else {
					var content_lagartija = "<div style='background: url(img/recetasclamato/ALMEJAYLAGARTIJA.png) no-repeat; width: 1020px; height:572px;'></div>"
				}
				$(document).find('div#contentOverlay').empty().append(overlay2);
				$(document).find('div#overlay_recetas').append(content_lagartija);
				$('div#overlay_recetas').fadeIn('medium');
			break;
			case "pinta":
				if(resolution_width <= '768'){
					var content_pinta = "<div class='vertical_overlay'><div id='tache_cerrar' onclick='cerrar_receta();' style='float: right; cursor:pointer; background: url(img/CERRAR.png); height: 38px; width: 38px; margin: 10px 10px 0px 0px;'></div><h3 id='receta_titulo'>Te vas de pinta</h3> <img src='img/recetasclamato/TeVasDePinta.jpg' id='img_receta' /><h4>Ingredientes</h4><div class='scroll-pane scroll-ingredientes' ><p>Clamato</p><p>Jugo de lim&oacute;n</p><p>Hierbas finas</p><p>Pulpa de tamarindo</p><p>Hielos</p></div><h4>Instrucciones</h4><div class='scroll-pane scroll-instrucciones'><p>- Mezcla todos los ingredientes, decora con una ramita de apio y listo.</p></div></div>"
				} else {
					var content_pinta = "<div style='background: url(img/recetasclamato/TEVASDEPINTA.png) no-repeat; width: 1020px; height:572px;'></div>"
				}
				$(document).find('div#contentOverlay').empty().append(overlay2);
				$(document).find('div#overlay_recetas').append(content_pinta);
				$('div#overlay_recetas').fadeIn('medium');
			break;
			case "muertos":
				if(resolution_width <= '768'){
					var content_muertos = "<div class='vertical_overlay'><div id='tache_cerrar' onclick='cerrar_receta();' style='float: right; cursor:pointer; background: url(img/CERRAR.png); height: 38px; width: 38px; margin: 10px 10px 0px 0px;'></div><h3 id='receta_titulo'>Levanta Muertos</h3> <img src='img/recetasclamato/LevantaMuertos.jpg' id='img_receta' /><h4>Ingredientes</h4><div class='scroll-pane scroll-ingredientes'><p>Clamato</p><p>Pe&ntilde;afiel Twist Lim&oacute;n</p><p>Salsa chamoy</p><p>Salsa picante</p><p>Salsa inglesa</p><p>Chile piquin</p><p>Sal</p></div><h4>Instrucciones</h4><div class='scroll-pane scroll-instrucciones'><p>- Escarchar el tarro utilizando la salsa chamoy y el chile piqu&iacute;n.</p><p>- Se agrega hielo y las salsas al gusto, por cada 3/4 partes de Clamato se agrega 1/4 parte de Pe&ntilde;afiel Twist.</p></div></div>"
				} else {
					var content_muertos = "<div style='background: url(img/recetasclamato/LEVANTAMUERTOS.png) no-repeat; width: 1020px; height:572px;'></div>"
				}
				$(document).find('div#contentOverlay').empty().append(overlay2);
				$(document).find('div#overlay_recetas').append(content_muertos);
				$('div#overlay_recetas').fadeIn('medium');
			break;
			case "sopafria":
				if(resolution_width <= '768'){	
					var content_sopafria = "<div class='vertical_overlay'><div id='tache_cerrar' onclick='cerrar_receta();' style='float: right; cursor:pointer; background: url(img/CERRAR.png); height: 38px; width: 38px; margin: 10px 10px 0px 0px;'></div><h3 id='receta_titulo'>Sopa Fría</h3> <img src='img/recetasclamato/ClamatoSopaFria.jpg' id='img_receta' /><h4>Ingredientes</h4><div class='scroll-pane scroll-ingredientes'><p>Camar&oacute;n de pacotilla (picados) - 2 cdas</p><p>Pepino (finamente picado) - 1 cda</p><p>Rabos de ceboll&iacute;n (picados) - 1 cda</p><p>Salsa Inglesa - 10 ml</p><p>Sal - 1 pizca</p><p>Pimienta -&nbsp; 1 pizca</p><p>Hielo en cubos - 1 taza</p><p>Jugo de Lim&oacute;n - 1 oz</p><p>J&iacute;cama rayada - 1 cda</p><p>Clamato Camar&oacute;n - 6 ox</p></div><h4>Instrucciones</h4><div class='scroll-pane scroll-instrucciones'><p>- En una copa suprema se colocan los primeros ingredientes, que se mezclan con una cuchara y se terminan de llenar con Clamato Camar&oacute;n fr&iacute;o, se decora con una rodaja de lim&oacute;n y p&eacute;talos de flores.</p></div></div>"
				} else {
					var content_sopafria = "<div style='background: url(img/recetasclamato/CLAMATOSOPAFRIA.png) no-repeat; width: 1020px; height:572px;'></div>"
				}
				$(document).find('div#contentOverlay').empty().append(overlay2);
				$(document).find('div#overlay_recetas').append(content_sopafria);
				$('div#overlay_recetas').fadeIn('medium');
			break;
			case "frutimare":
				$(document).find('div#contentOverlay').empty().append(overlay2);
				if(resolution_width <= '768'){	
					var content_frutimare = "<div class='vertical_overlay'><div id='tache_cerrar' onclick='cerrar_receta();' style='float: right; cursor:pointer; background: url(img/CERRAR.png); height: 38px; width: 38px; margin: 10px 10px 0px 0px;'></div><h3 id='receta_titulo'>Fruti di mare</h3> <img src='img/recetasclamato/FrutiDiMare.jpg' id='img_receta' /><h4>Ingredientes</h4><div class='scroll-pane scroll-ingredientes' ><p>Surimi finamente picado - 2 cda</p><p>Apio finamente picado - 1 cda</p><p>Ostiones frescos - 6 piezas</p><p>Camar&oacute;n pacotilla picado - 6 cda</p><p>Hierbabuena finamente picada - 1 cdta</p><p>Clamato Camar&oacute;n - 6 oz</p><p>Sal y pimienta - 1 pizca</p><p>Jugo de lim&oacute;n - 1 oz</p><p>Salsa Tamazula o Valentina - 1 dash</p></div><h4>Instrucciones</h4><div class='scroll-pane scroll-instrucciones'><p>- En una ensaladera se mezclan perfectamente los ingredientes y se refrigeran hasta servir en copa suprema.</p><p>- Se decora con una rodaja de lim&oacute;n.</p></div></div>"
				} else {
					var content_frutimare = "<div style='background: url(img/recetasclamato/FRUTIDIMAE.png) no-repeat; width: 1020px; height:572px;'></div>"
				}
				$(document).find('div#overlay_recetas').append(content_frutimare);
				$('div#overlay_recetas').fadeIn('medium');
			break;
			case "lluviafuego":
				$(document).find('div#contentOverlay').empty().append(overlay2);
				if(resolution_width <= '768'){
					var content_lluviafuego = "<div class='vertical_overlay'><div id='tache_cerrar' onclick='cerrar_receta();' style='float: right; cursor:pointer; background: url(img/CERRAR.png); height: 38px; width: 38px; margin: 10px 10px 0px 0px;'></div><h3 id='receta_titulo'>Lluvia de fuego</h3> <img src='img/recetasclamato/LluviaDeFuego.jpg' id='img_receta' /><h4>Ingredientes</h4><div class='scroll-pane scroll-ingredientes' ><p>Clamato Camar&oacute;n - 6 oz</p><p>Hielo - 2 cubos</p><p>Jugo de Naranja - 2 oz</p><p>Durazno en alm&iacute;bar - 1 pieza</p><p>Jugo de pi&ntilde;a - 2 oz</p><p>Jarabe de granadina - 1 oz</p></div><h4>Instrucciones</h4><div class='scroll-pane scroll-instrucciones'><p>- En la licuadora se mezclan los primeros ingredientes, se coloca el jarabe de granadina en las paredes de una copa de coctel y se sirve.</p></div></div>"
				} else {
					var content_lluviafuego = "<div style='background: url(img/recetasclamato/LLUVIADEFUEGO.png) no-repeat; width: 1020px; height:572px;'></div>"
				}
				$(document).find('div#overlay_recetas').append(content_lluviafuego);
				$('div#overlay_recetas').fadeIn('medium');
			break;
			case "oriental":
				$(document).find('div#contentOverlay').empty().append(overlay2);
				if(resolution_width <= '768'){
					var content_oriental = "<div class='vertical_overlay'><div id='tache_cerrar' onclick='cerrar_receta();' style='float: right; cursor:pointer; background: url(img/CERRAR.png); height: 38px; width: 38px; margin: 10px 10px 0px 0px;'></div><h3 id='receta_titulo'>Oriental</h3> <img src='img/recetasclamato/Oriental.jpg' id='img_receta' /><h4>Ingredientes</h4><div class='scroll-pane scroll-ingredientes'><p>Clamato Camar&oacute;n - 5 oz</p><p>Hielo - 3 cubos</p><p>N&eacute;cta de mango - 2 oz</p><p>Pulpa de tamarindo - 2 oz</p><p>Jugo de lim&oacute;n - 1 oz</p><p>Sal - 1 pizca</p><p>Salsa Tabasco - 1 dash</p><p>Salsa de Soya - 1 dash</p></div><h4>Instrucciones</h4><div class='scroll-pane scroll-instrucciones'><p>- En la licuadora se mezclan los primeros 7 ingredientes, se sirve en un vaso alto y se termina de llenar con Clamato Camar&oacute;n.</p><p>- Se decora con una banderilla de mando, tamarindo y lim&oacute;n.</p></div></div>"
				} else {
					var content_oriental = "<div style='background: url(img/recetasclamato/ORIENTAL.png) no-repeat; width: 1020px; height:572px;'></div>"
				}
				$(document).find('div#overlay_recetas').append(content_oriental);
				$('div#overlay_recetas').fadeIn('medium');
			break;
			case "aguachile":
				$(document).find('div#contentOverlay').empty().append(overlay2);
				if(resolution_width <= '768'){
					var content_aguachile = "<div class='vertical_overlay'><div id='tache_cerrar' onclick='cerrar_receta();' style='float: right; cursor:pointer; background: url(img/CERRAR.png); height: 38px; width: 38px; margin: 10px 10px 0px 0px;'></div><h3 id='receta_titulo'>Aguachile</h3> <img src='img/recetasclamato/AguachileVV.jpg' id='img_receta' /><h4>Ingredientes</h4><div class='scroll-pane scroll-ingredientes'><p>Clamato Vuelve a la Vida - 500 ml</p><p>Camar&oacute;n pelado y en cubos - 250 gr</p><p>Pepino pelado y en cubos - 1/2 pieza</p><p>Cebolla picada - 2 cda</p><p>Chile serrano picado - 6 piezas</p><p>Jugo de lim&oacute;n - 1/2 taza</p><p>Jugo sazonador - 1 cdta</p><p>Ramitas de cilantro - 2</p><p>Tostadas - 8</p></div><h4>Instrucciones</h4><div class='scroll-pane scroll-instrucciones'><p>- Limpiar los camarones y quitarles el caparaz&oacute;n y las v&iacute;sceras, colocarlo280pxs en un plato y agregarles el jugo de lim&oacute;n, sal y chiles.</p><p>- Despu&eacute;s de 15 minutos, separar los camarones de la marinada y licuarla con el pepino, el cilantro, el jugo sazonador y el Clamato Vuelve a la Vida.</p><p>- Cubrir los camarones nuevamente con este licuado y reservarlos hasta servir.Se acompa&ntilde;an con tostadas.</p></div></div>"	
				} else {
					var content_aguachile = "<div style='background: url(img/recetasclamato/AGUACHILEVV.png) no-repeat; width: 1020px; height:572px;'></div>"
				}
				$(document).find('div#overlay_recetas').append(content_aguachile);
				$('div#overlay_recetas').fadeIn('medium');
			break;
			case "puestadesol":
				$(document).find('div#contentOverlay').empty().append(overlay2);
				if(resolution_width <= '768'){
					var content_puestadesol = "<div class='vertical_overlay'><div id='tache_cerrar' onclick='cerrar_receta();' style='float: right; cursor:pointer; background: url(img/CERRAR.png); height: 38px; width: 38px; margin: 10px 10px 0px 0px;'></div><h3 id='receta_titulo'>Almejas Puesta de Sol</h3> <img src='img/recetasclamato/AlmejasPuestaDeSol.jpg' id='img_receta' /><h4>Ingredientes</h4><div class='scroll-pane scroll-ingredientes'><p>Clamato Vuelve a la Vida - 1 lt</p><p>Almejas frescas - 600 gr</p><p>Pepino sin piel - 80 gr</p><p>Cebollin picado - 1 cda</p><p>Aguacate - 200 gr</p><p>Salsa Inglesa - 10 ml</p><p>Salsa Tabasco - 10 ml</p><p>Jugo de Lim&oacute;n - 2 oz</p><p>Sal y pimienta - 1 pizca</p><p>Vinagre blanco - 1 cdta</p></div><h4>Instrucciones</h4><div class='scroll-pane scroll-instrucciones'><p>- Se cocinan las almejas en agua hirviendo por 5 minutos y se escurren, se pican finamente los rabos de cebollines, los pepinos se cortan el cubos, mientras que los aguacates se colocan en el refrigerador por 1 hora m&iacute;nimo para que se afirme su pulpa, despu&eacute;s se cortan en cubos.</p><p>- En un recipiente se mezclan el Clamato Vuelve a la Vida y los jugos, se agregan los camarones y los pepinos, se a&ntilde;aden los cebollines, el vinagre y se salpimienta al gusto, se adereza con las salsas y se refrigera por 1 hora, se saca del refrigerador y se agrega el aguacate.</p><p>- Se sirve bien fr&iacute;o en copa suprema.</p></div></div>"
				} else {
					var content_puestadesol = "<div style='background: url(img/recetasclamato/ALMEJASPUESTADESOL.png) no-repeat; width: 1020px; height:572px;'></div>"
				}
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

	   	if (!container.is(e.target) && container.has(e.target).length === 0){
	        recetas.fadeOut('medium').empty();
	    }

	});

})