
var Contenedor 					= require('./contenedor');
var Servicios  					= require('./servicios');
var Model  							= require('./model');
var SelectComponent  		= require('./selectComponent');
var InputNumberText  		= require('./inputNumberText');
var Slider  						= require('./slider');
var Label 							= require('./label');

var Simulador = function(){
	
	this.selector = {
		datos			:"#ingresarDatos",
		programas 		:"#programas",
		productos 		:"#tablaProductos",
		amortizacion 	:"#tablaAmortizacion",
		datosProducto 	:"#tablaDatos",
		barraSilder1	:"#barraSilder1",
		barraSilder2	:"#barraSilder2"
	}

	this.timeOutToCollapse=2000;
	//--modelo
	this.model= Model;
	//--servicios
	this.servicios= new Servicios();
	

	//-- componentes
	this.datos 			= new Contenedor(this.selector.datos);
	this.programas 		= new Contenedor(this.selector.programas);
	this.productos 		= new Contenedor(this.selector.productos);
	this.amortizacion 	= new Contenedor(this.selector.amortizacion);
	this.datosProducto 	= new Contenedor(this.selector.datosProducto);
	this.barraSilder1 	= new Contenedor(this.selector.barraSilder1);
	this.barraSilder2 	= new Contenedor(this.selector.barraSilder2);

	
	//-- slider's
	this.calculaPor = new SelectComponent("#calcularPor");

	this.plazo = new SelectComponent("#plazo");

	this.ingresoBruto = new InputNumberText('#ingresoMensual');

	this.sliderInput1 = new InputNumberText('#valBarra1');

	this.sliderLabel1 = new Label('etiquetaSlider1');

	this.slider1 = new Slider("#barra-1",this.model.slider.valorCasa.comprarCasa.montoCredito);
	this.slider1.addLeftLabel('#b1-min-amount');
	this.slider1.addRightLabel('#b1-max-amount');

	this.slider1.addInput(this.sliderInput1);

	this.sliderInput1.addSlider(this.slider1);
	
	
	
	this.sliderInput2 = new InputNumberText('#valBarra2');

	this.sliderLabel2 = new Label('etiquetaSlider2');

	this.slider2 = new Slider("#barra-2",this.model.slider.valorCasa.comprarCasa.cuantoCuesta);
	this.slider2.addLeftLabel('#b2-min-amount');
	this.slider2.addRightLabel('#b2-max-amount');

	this.slider2.addInput(this.sliderInput2);

	this.sliderInput2.addSlider(this.slider2);
  

	//--Eventos
	var self =this;

	//--tabs .
	$('.tabDestinos > ul > li > a').on( "click", function(){
		self.changeTabs(this.id);
	});

	//--programas
	document.querySelector(this.selector.programas+' .glyphicon'  ).addEventListener( "click", this.collapseProgramas.bind(this));
	document.querySelector(this.selector.programas+' .header-text').addEventListener( "click", this.collapseProgramas.bind(this));
	//-- Productos	
	document.querySelector(this.selector.productos+' .glyphicon'  ).addEventListener( "click", this.collapseProductos.bind(this));
	document.querySelector(this.selector.productos+' .header-text').addEventListener( "click", this.collapseProductos.bind(this));
	//-- tabla amortizacion	
	document.querySelector(this.selector.amortizacion+' .glyphicon'  ).addEventListener( "click", this.collapseAmortizacion.bind(this));	
	document.querySelector(this.selector.amortizacion+' .header-text').addEventListener( "click", this.collapseAmortizacion.bind(this));
	//-- Datos producto	
	document.querySelector(this.selector.datosProducto+' .glyphicon'  ).addEventListener( "click", this.collapseDatosProducto.bind(this));	
	document.querySelector(this.selector.datosProducto+' .header-text').addEventListener( "click", this.collapseDatosProducto.bind(this));
	//--Select 

	//document.querySelector(this.calculaPor.selector ).addEventListener( "change",this.changeCalculaPor.bind(this)); 
	this.calculaPor.element.addEventListener( "change",this.changeCalculaPor.bind(this)); 
	document.querySelector(this.plazo.selector      ).addEventListener( "change", this.changePlazo.bind(this) );
	
	//--Calcular credito
	$('#calcularCredito').on( "click", function() {
		self.calcularCredito()
	});

	//--Inicialiar entorno
	this.productos.hideFrame(0);
	this.amortizacion.hideFrame(0);
	this.datosProducto.hideFrame(0);
	this.programas.frameContentCollapse(0);
	//-- -select
	this.calculaPor.fill(this.model.collection.calculaPor.comprarCasa);
	
	this.plazo.fill(this.model.collection.plazo.comprarCasa);
	
	this.barraSilder1.hideFrame(0);
	
	this.sliderLabel2.setValue(this.calculaPor.selectedText());


}

Simulador.prototype.precio = function(){
	this.slider2.updateParams(this.model.slider.valorCasa.comprarCasa.cuantoCuesta);
	this.barraSilder2.showFrame(0);
	this.sliderLabel2.setValue(this.calculaPor.selectedText());
	this.barraSilder1.hideFrame(0);
	this.slider1.addInput(this.sliderInput1);
	this.slider2.addInput(this.sliderInput2);
}

Simulador.prototype.monto = function(){
	this.slider1.updateParams(this.model.slider.valorCasa.comprarCasa.montoCredito);
	this.barraSilder1.showFrame(0);		
	this.sliderLabel1.setValue(this.calculaPor.selectedText());
	this.slider2.updateParams(this.model.slider.valorCasa.comprarCasa.cuantoCuesta);
	this.barraSilder2.showFrame(0);
	this.slider1.addInput(this.sliderInput1);
	this.slider2.addInput(this.sliderInput2);
}

Simulador.prototype.pago = function(){
	this.slider1.updateParams(this.model.slider.valorCasa.comprarCasa.pagoMensual);
	this.barraSilder1.showFrame(0);		
	this.sliderLabel1.setValue(this.calculaPor.selectedText());
	this.barraSilder2.hideFrame(0);
	this.slider1.addInput(this.sliderInput1);
}

Simulador.prototype.changeCalculaPor =function(event) {
	console.debug('method(changeCalculaPor) for '+this.calculaPor.element.value);
	this.model.data.calculaPor = this.calculaPor.element.value;
	//---swicht
	
	switch(this.model.data.calculaPor){
		case "precioCasa": 		
			this.precio();
		break;
		case "montoCreditoCasa": 	
			this.monto();
		break;
		case "pagoMensualCasa":	
			this.pago();
		break;
		
		case "precioTerreno": 		
			this.precio();
		break;
		case "montoCreditoTerreno": 		
			this.monto();
		break;
		case "pagoMensualTerreno": 		
			this.pago();
		break;
		
		case "precioCasaRemodelar": 		
			this.precio();
		break;
		case "montoCreditoRemodelar":		
			this.monto();
		break;
		case "pagoMensualRemodelar": 		
			this.pago();
		break;
		
		case "deudaCredito": 
			this.monto();
		break;
			
		case "precioCasaLiquidez":		
			this.precio();
		break;
		case "montoCreditoLiquidez": 		
			this.monto();
		break;
		case "pagoMensualLiquidez": 		
			this.pago();
		break;
	}
	
	console.info('implementar... '+this.model.data.calculaPor);
}
Simulador.prototype.changePlazo =function(event) {
	console.debug('method(changePlazo) for '+this.plazo.element.value);
	this.model.data.plazo = this.plazo.element.value;
	console.info('implementar... ');
}
Simulador.prototype.changeTabs =function(tab) {
	console.debug('method(changeTabs) for '+tab);
	this.model.data.tab = tab;
	

	switch(tab){
		case "comprarCasa": 		
			this.calculaPor.fill(this.model.collection.calculaPor.comprarCasa);
			this.plazo.fill(this.model.collection.plazo.comprarCasa);
			this.collapseDatos(null,true);
			this.programas.showFrame(200);
			this.sliderLabel2.setValue(this.calculaPor.selectedText());
		break;
		case "comprarTerreno": 		
			this.calculaPor.fill(this.model.collection.calculaPor.comprarTerreno);
			this.plazo.fill(this.model.collection.plazo.comprarTerreno);
			this.collapseDatos(null,true);
			this.programas.hideFrame();
			this.sliderLabel2.setValue(this.calculaPor.selectedText());
			
		break;
		case "remodelarCasa":		
			this.calculaPor.fill(this.model.collection.calculaPor.remodelarCasa);
			this.plazo.fill(this.model.collection.plazo.remodelarCasa);
			this.collapseDatos(null,true);
			this.sliderLabel2.setValue(this.calculaPor.selectedText());
		break;
		case "cambiarHipoteca": 		
			this.calculaPor.fill(this.model.collection.calculaPor.cambiarHipoteca);
			this.plazo.fill(this.model.collection.plazo.cambiarHipoteca);
			this.collapseDatos(null,true);
			this.sliderLabel2.setValue("¿Cuanto vale mi hipoteca?");
		break;
		case "obtenerLiquidez": 		
			this.calculaPor.fill(this.model.collection.calculaPor.obtenerLiquidez);
			this.plazo.fill(this.model.collection.plazo.obtenerLiquidez);
			this.collapseDatos(null,true);
			this.sliderLabel2.setValue(this.calculaPor.selectedText());
		break;

	}
}
Simulador.prototype.collapseDatos = function(event,show){

	console.debug('method(collapseDatos)');
	//console.info(this);
	console.info(event);
	console.info(show);
	this.productos.hideFrame();
	this.amortizacion.hideFrame();
	this.datosProducto.hideFrame();
	this.datos.frameContentCollapse(2000,show);
}
Simulador.prototype.collapseProgramas = function(event,show){
	console.debug('method( collapseProgramas)');
	this.productos.hideFrame();
	this.amortizacion.hideFrame();
	this.datosProducto.hideFrame();
	this.programas.frameContentCollapse(2000);
}
Simulador.prototype.collapseProductos = function(event,show){
	console.debug('method(collapseProductos)');
	this.amortizacion.hideFrame();
	this.datosProducto.hideFrame();
	this.productos.showFrame();
	//this.datos.frameContentCollapse(2000,false);
	this.programas.frameContentCollapse(2000,false);
	this.productos.frameContentCollapse(2000,show);
}
Simulador.prototype.collapseAmortizacion = function(event,show){
	console.debug('method(collapseAmortizacion)');									
	this.amortizacion.showFrame();
	this.datosProducto.showFrame();
	this.productos.frameContentCollapse(2000,false);
	this.amortizacion.frameContentCollapse(2000,show);
}
Simulador.prototype.collapseDatosProducto = function(event,show){
	console.debug('method(collapseDatosProducto)');
	this.datosProducto.frameContentCollapse(2000,show);
} 
Simulador.prototype.calcularCredito = function(){
		//-- llamamos al servicio para llenar la tabla de productos
		this.llenarTablaProductos( this.servicios.productSimulation(this.model.data) );
		//--llamamos la iteraccion
  	this.collapseProductos(null,true);
}
Simulador.prototype.llenarTablaProductos = function(responseproductos){
	console.debug('method(llenarTablaProductos) ');
	console.info(responseproductos);

	//--por cada producto retornado se agrega evento
	var self = this;
	console.info($('#tablaAmortizacion1'))
	$('#tablaAmortizacion1').on( "click", function() {
		//--se llama al servicio que llena la tabla de amortizacion
		self.llenarTablaAmortizacion( self.servicios.productSimulation(this.model) );
		self.collapseAmortizacion(null,true);
		self.datosProducto.frameContentCollapse(0,false);
		
	});
}

Simulador.prototype.llenarTablaAmortizacion = function(responseproductos){
	console.debug('method(llenarTablaAmortizacion) ');	
}






module.exports = Simulador;