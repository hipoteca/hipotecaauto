	function setEditedValue(editedField) {
		prepaymentsArray = [] 
		
		var editedValue = $(editedField).next("input").val() || $(editedField).val()
		
		$(editedField).parent().toggleClass("hidden") 
		
		if(!editedValue || editedValue == 0){
		  $(editedField).parent().siblings().toggleClass("hidden").html("$ 0.00")
		} else {
		  $(editedField).parent().siblings().toggleClass("hidden").html("$ "+editedValue+".00")
		}
		
		
	}

	function editField(selectedField){
	  $(selectedField).toggleClass("hidden");
	  $(selectedField).next().toggleClass("hidden")
	}
	
	
	function formatoCantidad(idInput,valor){
		var valor=valor;
		valor = valor.split("$");
		valor= valor.toString().replace(/,/g, "");
		valor = valor.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		$("#"+idInput).val("$ "+valor);

		parseFloat(valor)
	console.log("c"+valor);
	}
	
	var productoPagina = 1;
	var maxProductoPagina = 3;
	var minProductoPagina = 1;
	
	function sigPage() {
		console.info("productoPagina" + productoPagina)
		if (productoPagina < maxProductoPagina) {
			$('td.prod-col-' + productoPagina).addClass("hidden-xs")
			productoPagina++;
			$('td.prod-col-' + productoPagina).removeClass("hidden-xs")

		}
		$("#pagina" ).text(productoPagina);
	}
	
	function antPage() {
		console.info("productoPagina" + productoPagina)
		if (productoPagina > minProductoPagina) {
			$('td.prod-col-' + productoPagina).addClass("hidden-xs")
			productoPagina--;
			$('td.prod-col-' + productoPagina).removeClass("hidden-xs")

		}
		$("#pagina" ).text(productoPagina);
	}
	
	
	/* Interaciones de para cada seccion */
	
	function btnCalcularCredito() {
		$("#tablaAmortizacion").hide();
		$("#tablaDatos").hide();
		$("#productos").hide();
		$("#tablaProductos").show();
		$("#seccionTablaProductos").show();
		$("#frameTablas").show();
		muestraTablaProductos();
		muestraIngresarDatos();
		ocultaProgramas();
	}
	
	function despliegaPanel(selectedRow) {
		if ($(selectedRow).hasClass("glyphicon-plus")) {
			$(selectedRow).closest("tr").next("tr").show()
			$(selectedRow).removeClass("glyphicon-plus").addClass("glyphicon-minus")
		} else if ($(selectedRow).hasClass("glyphicon-minus")) {
			$(selectedRow).closest("tr").next("tr").hide()
			$(selectedRow).removeClass("glyphicon-minus").addClass("glyphicon-plus")
		}
	}
	
	function muestraIngresarDatos(){
		$("#ingresarDatos-flecha").removeClass("glyphicon glyphicon-menu-down").addClass("glyphicon glyphicon-menu-right");
		$("#ingresarDatos-flecha").removeClass("flecha-1-color").addClass("flecha-2-color");
		$("#ingresarDatos").removeClass("flecha-1").addClass("flecha-2");
		$("#ingresarDatos").removeClass("frame-tab-border-1").addClass("frame-tab-border-2");
	}
	
	function ocultaIngresarDatos(){
		$("#ingresarDatos-flecha").removeClass("glyphicon glyphicon-menu-right").addClass("glyphicon glyphicon-menu-down");
		$("#ingresarDatos-flecha").removeClass("flecha-2-color").addClass("flecha-1-color");
		$("#ingresarDatos").removeClass("frame-tab-border-2").addClass("frame-tab-border-1");
		$("#ingresarDatos").removeClass("flecha-2").addClass("flecha-1");
	}
	
	function ocultaProgramas(){
		$("#programas-flecha").removeClass("glyphicon glyphicon-menu-down").addClass("glyphicon glyphicon-menu-right");
		$("#programas-flecha").removeClass("flecha-1-color").addClass("flecha-2-color");
		$("#programas").removeClass("flecha-1").addClass("flecha-2");
		$("#programas").removeClass("frame-tab-border-1").addClass("frame-tab-border-2");
	}

	function muestraTablaProductos(){
		$("#flechaTabla").removeClass("glyphicon glyphicon-menu-right").addClass("glyphicon glyphicon-menu-down");
		$("#flechaTabla").removeClass("flecha-2-color").addClass("flecha-1-color");
		$("#tablaProductos").removeClass("frame-tab-border-2").addClass("frame-tab-border-1");
		$("#tablaProductos").removeClass("flecha-2").addClass("flecha-1");
	}
	
	function ocultaTablaProductos(){
		$("#flechaTabla").removeClass("glyphicon glyphicon-menu-down").addClass("glyphicon glyphicon-menu-right");
		$("#flechaTabla").removeClass("flecha-1-color").addClass("flecha-2-color");
		$("#tablaProductos").removeClass("frame-tab-border-1").addClass("frame-tab-border-2");
		$("#tablaProductos").removeClass("flecha-1").addClass("flecha-2");
	}

	function desplegarDatos() {
		if ($("#simulador").is(':hidden')) {			
			$("#simulador").show();
			
			ocultaIngresarDatos();

			$("#tablaProductos").hide();
			$("#tablaAmortizacion").hide();
			$("#tablaDatos").hide();
			$("#frameTablas").hide();
			
		} else {
			$("#simulador").hide();
			
			muestraIngresarDatos();
		}
	}

	function desplegarProgramas() {
		if ($("#productos").is(':hidden')) {
			$("#productos").show();
			
			$("#programas-flecha").removeClass("glyphicon glyphicon-menu-right").addClass("glyphicon glyphicon-menu-down");
			$("#programas-flecha").removeClass("flecha-2-color").addClass("flecha-1-color");
			$("#programas").removeClass("frame-tab-border-2").addClass("frame-tab-border-1");
			$("#programas").removeClass("flecha-2").addClass("flecha-1");

			$("#tablaProductos").hide();
			$("#tablaAmortizacion").hide();
			$("#tablaDatos").hide();
			$("#frameTablas").hide();
		} else {
			$("#productos").hide();
			
			ocultaProgramas();
		}
	}

	function desplegarTabProductos(){
		if ($("#seccionTablaProductos").is(':hidden')) {
			$("#seccionTablaProductos").show();
	
			muestraTablaProductos();
			
			$("#tablaAmortizacion").hide();
			$("#tablaDatos").hide();

		} else {
			$("#seccionTablaProductos").hide();
			
			ocultaTablaProductos();
		}
	}
	
	function desplegarTabAmort(){
		if ($("#seccionTablaAmort").is(':hidden')) {
			$("#seccionTablaAmort").show();
			$("#actualizar").show();
			$("#tabAmort-flecha").removeClass("glyphicon glyphicon-menu-right").addClass("glyphicon glyphicon-menu-down");
			$("#tabAmort-flecha").removeClass("flecha-2-color").addClass("flecha-1-color");
			$("#tablaAmorizacion").removeClass("frame-tab-border-2").addClass("frame-tab-border-1");
			$("#tablaAmortizacion").removeClass("flecha-2").addClass("flecha-1");
			
		} else {
			$("#seccionTablaAmort").hide();
			$("#actualizar").hide();
			$("#tabAmort-flecha").removeClass("glyphicon glyphicon-menu-down").addClass("glyphicon glyphicon-menu-right");
			$("#tabAmort-flecha").removeClass("flecha-1-color").addClass("flecha-2-color");
			$("#tablaAmortizacion").removeClass("frame-tab-border-1").addClass("frame-tab-border-2");
			$("#tablaAmortizacion").removeClass("flecha-1").addClass("flecha-2");
		}
	}
	
	function desplegarTabDatos(){
		if ($("#seccionTablaDatos").is(':hidden')) {
			$("#seccionTablaDatos").show();
			
			$("#tabDatos-flecha").removeClass("glyphicon glyphicon-menu-right").addClass("glyphicon glyphicon-menu-down");
			$("#tabDatos-flecha").removeClass("flecha-2-color").addClass("flecha-1-color");
			$("#tablaDatos").removeClass("frame-tab-border-2").addClass("frame-tab-border-1");
			$("#tablaDatos").removeClass("flecha-2").addClass("flecha-1");
			
			
		} else {
			$("#seccionTablaDatos").hide();
		
			$("#tabDatos-flecha").removeClass("glyphicon glyphicon-menu-down").addClass("glyphicon glyphicon-menu-right");
			$("#tabDatos-flecha").removeClass("flecha-1-color").addClass("flecha-2-color");
			$("#tablaDatos").removeClass("frame-tab-border-1").addClass("frame-tab-border-2");
			$("#tablaDatos").removeClass("flecha-1").addClass("flecha-2");

		}
	}
	
	function desplegarRecursos(){
		if ($("#recursos").is(':hidden')) {
			$("#recursos").show();
		
		}else{
			$("#recursos").hide();
		}
	}
	
	function desplegarGastos(){
		if ($("#gasto").is(':hidden')) {
			$("#gasto").show();
		
		}else{
			$("#gasto").hide();
		}
	}
	
	function muestraTablas(){
		
		desplegarTabProductos();
		$("#tablaAmortizacion").show();
		$("#tablaDatos").show();
		$("#seccionTablaDatos").hide();
	}
	
	/* End Interaciones de para cada seccion */

	/* Cargar valores de los slider */

	function calculaPor(valor) {
		
		var valor = $("#calcularPor").val();
		var v2 = document.getElementById("calcularPor");
		var valor2 = v2.options[v2.selectedIndex].value;
		var tituloSlider1 = v2.options[v2.selectedIndex].text;
		$("#etiquetaSlider1").text(tituloSlider1);
		
		if (valor == "precioCasa" || valor == "precioCasaRemodelar") {
			$("#barraSilder1").hide();
			$("#barraSilder2").show();

			$("#b2-min-amount").text('Mínimo $180,000');
			$("#b2-max-amount").text('Máximo $20,000,000');
			
			$("#valBarra2").val(180000);
			$("#barra-2").slider({
				min : 180000,
				max : 20000000,
				step : 1000,
				value : 180000
			});
			
			$("#valBarra2").val("180,000");
			$("#barra-2").slider("setValue", 180000);
		}

		else if (valor == "montoCreditoCasa" || valor == "montoCreditoRemodelar" || valor == "deudaCredito") {
			$("#barraSilder1").show();
			$("#barraSilder2").show();

			$("#b1-min-amount").text("Mínimo $50,000");
			$("#b1-max-amount").text("Máximo $18,000,000");

			$("#b2-min-amount").text("Mínimo $180,000");
			$("#b2-max-amount").text("Máximo $20,000,000");

			$("#barra-1").slider({
				min : 50000,
				max : 18000000,
				step : 1000
			});
			$("#valBarra1").val("50,000");

			$("#barra-2").slider({
				min : 180000,
				max : 20000000,
				step : 1000
			});
			$("#valBarra2").val("180,000");

			$("#barra-1").slider("setValue", 50000);
			$("#barra-2").slider("setValue", 180000);

		}

		else if (valor == "pagoMensualCasa" || valor == "pagoMensualTerreno" || valor == "pagoMensualRemodelar" || valor == "pagoMensualLiquidez") {
			$("#barraSilder1").show();
			$("#barraSilder2").hide();

			$("#b1-min-amount").text("Mínimo $2,000");
			$("#b1-max-amount").text("Máximo $50,000");
			$("#barra-1").slider({
				min : 2000,
				max : 50000,
				step : 1000
			});
			$("#valBarra1").val("2,000");

			$("#barra-1").slider("setValue", 2000);
		}

		else if (valor == "precioTerreno") {
			$("#barraSilder1").hide();
			$("#barraSilder2").show();

			$("#b2-min-amount").text("Mínimo $300,000");
			$("#b2-max-amount").text("Máximo $3,000,000");

			$("#barra-2").slider({
				min : 300000,
				max : 3000000,
				step : 1000
			});
			$("#valBarra2").val("300,000");

			$("#barra-2").slider("setValue", 300000);
		}

		else if (valor == "montoCreditoTerreno") {
			$("#barraSilder1").show();
			$("#barraSilder2").show();

			$("#b1-min-amount").text("Mínimo $150,000");
			$("#b1-max-amount").text("Máximo $2,100,000");

			$("#b2-min-amount").text("Mínimo $300,000");
			$("#b2-max-amount").text("Máximo $3,000,000");

			$("#barra-1").slider({
				min : 150000,
				max : 2100000,
				step : 1000
			});
			$("#valBarra1").val("150,000");

			$("#barra-2").slider({
				min : 300000,
				max : 3000000,
				step : 1000
			});
			$("#valBarra2").val("300,000");

			$("#barra-1").slider("setValue", 150000);
			$("#barra-2").slider("setValue", 300000);

		}

		else if (valor == "precioCasaLiquidez") {
			$("#barraSilder1").hide();
			$("#barraSilder2").show();

			$("#b2-min-amount").text("Mínimo $180,000");
			$("#b2-max-amount").text("Máximo $10,000,000");

			$("#barra-2").slider({
				min : 180000,
				max : 10000000,
				step : 1000
			});
			$("#valBarra2").val("180,000");

			$("#barra-2").slider("setValue", 180000);

		}

		else if (valor == "montoCreditoLiquidez") {
			$("#barraSilder1").show();
			$("#barraSilder2").show();

			$("#b1-min-amount").text("Mínimo $85,000");
			$("#b1-max-amount").text("Máximo $7,500,000");

			$("#b2-min-amount").text("Mínimo $180,000");
			$("#b2-max-amount").text("Máximo $10,000,000");

			$("#barra-1").slider({
				min : 85000,
				max : 7500000,
				step : 1000
			});
			$("#valBarra1").val("85,000");

			$("#barra-2").slider({
				min : 180000,
				max : 10000000,
				step : 1000
			});
			$("#valBarra2").val("180,000");

			$("#barra-1").slider("setValue", 85000);
			$("#barra-2").slider("setValue", 180000);
		}
	}

	

	function setValueInSlider(sliderId, value) {
		value = value.replace(/,/gi, "")
		$("#" + sliderId).slider("setValue", parseInt(value))
	}

	/* End carga valores de sliders*/

	
	/*Inicializa los valores de cada destino*/
	function cargarSelect(valor) {

		if (valor == "COMPRAR_CASA") {
			$("#programas").show();
			$("#tablaProductos").hide();
			$("#tablaAmortizacion").hide();
			$("#tablaDatos").hide();
			$("#simulador").show();
			$("#frameTablas").hide();
			ocultaIngresarDatos();
			

		} else if (valor == "COMPRAR_TERRENO" || valor == "REMODELAR_CASA" || valor == "CAMBIAR_HIPOTECA" || valor == "OBTENER_LIQUIDEZ") {
			$("#tablaProductos").hide();
			$("#programas").hide();
			$("#productos").hide();
			$("#tablaAmortizacion").hide();
			$("#tablaDatos").hide();
			$("#programas").hide();
			$("#simulador").show();
			$("#frameTablas").hide();
			ocultaIngresarDatos();
			
		} 
		
		var arrayCalcularPor = new Array(
				new Array("COMPRAR_CASA","precioCasa", "Cuánto cuesta la casa que quiero comprar"),
				new Array("COMPRAR_CASA", "montoCreditoCasa","El monto de crédito que necesito"), 
				new Array("COMPRAR_CASA", "pagoMensualCasa","Cuánto quiero pagar al mes"),
				new Array("COMPRAR_TERRENO", "precioTerreno","Cuánto cuesta el terreno que quiero comprar"),
				new Array("COMPRAR_TERRENO", "montoCreditoTerreno","El monto de crédito que necesito"), 
				new Array("COMPRAR_TERRENO", "pagoMensualTerreno","Cuánto quiero pagar al mes"),

				new Array("REMODELAR_CASA", "precioCasaRemodelar","Cuánto cuesta la casa que quiero remodelar"),
				new Array("REMODELAR_CASA", "montoCreditoRemodelar","El monto de crédito que necesito"), 
				new Array("REMODELAR_CASA", "pagoMensualRemodelar","Cuánto quiero pagar al mes"),

				new Array("CAMBIAR_HIPOTECA", "deudaCredito","Cuánto debo de mi crédito"),

				new Array("OBTENER_LIQUIDEZ", "precioCasaLiquidez","Cuánto cuesta la casa que tengo"), 
				new Array("OBTENER_LIQUIDEZ", "montoCreditoLiquidez","El monto de crédito que necesito"), 
				new Array("OBTENER_LIQUIDEZ", "pagoMensualLiquidez","Cuánto quiero pagar al mes"));

		document.getElementById("calcularPor").options.length = 0;
		for (i = 0; i < arrayCalcularPor.length; i++) {
			if (arrayCalcularPor[i][0] == valor) {
				document.getElementById("calcularPor").options[document.getElementById("calcularPor").options.length] = new Option(arrayCalcularPor[i][2], arrayCalcularPor[i][1]);

				if (valor == "CAMBIAR_HIPOTECA"){
					$("#etiquetaSlider2").text("¿Cuánto vale mi Hipoteca?");
				}else{
				var v2 = document.getElementById("calcularPor");
				var valor2 = v2.options[v2.selectedIndex].value;
				var tituloSlider2 = v2.options[v2.selectedIndex].text;
				var tituloSlider2 = "¿" + tituloSlider2 + "?";
				$("#etiquetaSlider2").text(tituloSlider2);
				}
			}
		}

		var arrayPlazo = new Array(
				new Array("COMPRAR_CASA", "VEINTE","20 años"), 
				new Array("COMPRAR_CASA", "QUINCE", "15 años"),
				new Array("COMPRAR_CASA", "DIEZ", "10 años"),
				new Array("COMPRAR_CASA", "CINCO", "5 años"),

				new Array("COMPRAR_TERRENO", "DIEZ", "10 años"), 
				new Array("COMPRAR_TERRENO", "CINCO", "5 años"),

				new Array("REMODELAR_CASA", "VEINTE", "20 años"), 
				new Array("REMODELAR_CASA", "QUINCE", "15 años"), 
				new Array("REMODELAR_CASA", "DIEZ", "10 años"), 
				new Array("REMODELAR_CASA", "CINCO", "5 años"),

				new Array("CAMBIAR_HIPOTECA", "VEINTE", "20 años"), 
				new Array("CAMBIAR_HIPOTECA", "DICINUEVE", "19 años"), 
				new Array("CAMBIAR_HIPOTECA", "DIECIOCHO", "18 años"), 
				new Array("CAMBIAR_HIPOTECA", "DIECISIETE", "17 años"),
				new Array("CAMBIAR_HIPOTECA", "DIECISEIS", "16 años"),
				new Array("CAMBIAR_HIPOTECA", "QUINCE", "15 años"), 
				new Array("CAMBIAR_HIPOTECA", "CATORCE", "14 años"), 
				new Array("CAMBIAR_HIPOTECA", "TRECE", "13 años"), 
				new Array("CAMBIAR_HIPOTECA", "DOCE", "12 años"), 
				new Array("CAMBIAR_HIPOTECA", "ONCE", "11 años"), 
				new Array("CAMBIAR_HIPOTECA", "DIEZ", "10 años"), 
				new Array("CAMBIAR_HIPOTECA", "NUEVE", "9 años"), 
				new Array("CAMBIAR_HIPOTECA", "OCHO", "8 años"), 
				new Array("CAMBIAR_HIPOTECA", "SIETE", "7 años"),
				new Array("CAMBIAR_HIPOTECA", "SIES", "6 años"), 
				new Array("CAMBIAR_HIPOTECA", "CINCO", "5 años"),

				new Array("OBTENER_LIQUIDEZ", "VEINTE", "20 años"),
				new Array("OBTENER_LIQUIDEZ", "QUINCE", "15 años"), 
				new Array("OBTENER_LIQUIDEZ", "DIEZ", "10 años"), 
				new Array("OBTENER_LIQUIDEZ", "CINCO", "5 años"));

		document.getElementById("plazo").options.length = 0;
		for (i = 0; i < arrayPlazo.length; i++) {
			if (arrayPlazo[i][0] == valor) {document.getElementById("plazo").options[document.getElementById("plazo").options.length] = new Option(arrayPlazo[i][2], arrayPlazo[i][1]);
			}
		}
		calculaPor(valor);
	}
	
	/*End Inicializa los valores de cada destino*/
	
	/*Inicializa los valores de los programas*/
	
	function cargaProgramas(valor) {
		var arrayProgramas = new Array(

		new Array("INFONAVIT", "cofinavit", "Cofinavit"), 
		new Array("INFONAVIT", "infonavit", "Apoyo Infonavit"),

		new Array("FOVISSSTE", "alia2", "Alia2"), 
		new Array("FOVISSSTE","respalda2", "Respalda2"));

		if (valor == 0) {
			document.getElementById("selectPrograma").disabled = true;
		} else {
			document.getElementById("selectPrograma").options.length = 0;
			for (i = 0; i < arrayProgramas.length; i++) {
				if (arrayProgramas[i][0] == valor) {document.getElementById("selectPrograma").options[document.getElementById("selectPrograma").options.length] = new Option(arrayProgramas[i][2], arrayProgramas[i][1]);
				}
			}
			document.getElementById("selectPrograma").disabled = false;
		}

		var producto = $("#selectApoyo").val();

		if (producto == "FOVISSSTE") {

			$("#sueldo").hide();
			$("#porcentaje").hide();
			$("#monto").show();
			$("#subcuenta").show();
			$("#gastos").hide();

		} else {
			$("#sueldo").hide();
			$("#porcentaje").show();
			$("#monto").show();
			$("#subcuenta").show();
			$("#gastos").show();
		}
	}

	function tipoPrograma(valor) {

		var programa = $("#selectPrograma").val();

		if (programa == "infonavit") {
			$("#sueldo").show();
			$("#porcentaje").hide();
			$("#monto").hide();
			$("#subcuenta").hide();
			$("#gastos").hide();

		} else if (programa == "cofinavit") {
			$("#sueldo").hide();
			$("#porcentaje").show();
			$("#monto").show();
			$("#subcuenta").show();
			$("#gastos").show();
		}

		else if (programa == "respalda2") {
			$("#sueldo").hide();
			$("#porcentaje").hide();
			$("#monto").hide();
			$("#subcuenta").show();
			$("#gastos").hide();

		} else if (programa == "alia2") {
			$("#sueldo").hide();
			$("#porcentaje").hide();
			$("#monto").show();
			$("#subcuenta").show();
			$("#gastos").hide();
		}
		
	}
	

	var productoPagina=1;
	var maxProductoPagina=3;
	function siguiente(){
		console.info("productoPagina"+productoPagina)
		if(productoPagina<maxProductoPagina){
			$('td.prod-col-'+productoPagina).addClass("hidden-xs")
			productoPagina++;
			$('td.prod-col-'+productoPagina).removeClass("hidden-xs")
			

		}
		console.info("productoPagina"+productoPagina)
	}
	$(document).ready(function() {
		
		$("#ingresoMensualBruto").val("$");
		$("#sueldoCliente").val("$");
		$("#montoCredito").val("$");
		$("#saldoSubcuenta").val("$");
		$("#cuantoPagar").val("$");

	
		$("#frameTablas").hide();
		$("#pagina" ).text(productoPagina);
		
		$(function () {
			$('[data-toggle="tooltip"]').tooltip()
		})
		
		
	$("#barra-1").change(
		function() {
			var barraValue = $(this).val();
			barraValue = barraValue.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
			$("#valBarra1").val("$" + barraValue);
		});

	$("#barra-2").change(
			function() {
				var barraValue = $(this).val();
				barraValue = barraValue.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
				$("#valBarra2").val("$" + barraValue);
			});
			
			
		cargarSelect("COMPRAR_CASA");
		cargaProgramas("INFONAVIT");
		calculaPor("COMPRAR_CASA");
		$("#sueldo").hide();
		$("#tablaProductos").hide();
		$("#productos").hide();
		$("#tablaAmortizacion").hide();
		$("#tablaDatos").hide();
		$("#frameTablas").hide();

	});