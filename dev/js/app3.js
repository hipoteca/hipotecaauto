
var Contenedor 	= require('./contenedor');
var Servicios  	= require('./servicios');
var Model  		= require('./model');
var SelectComponent  		= require('./selectComponent');

var Simulador = function(){
	
	this.selector={
		datos					:"#ingresarDatos",
		programas 		:"#programas",
		productos 		:"#tablaProductos",
		amortizacion 	:"#tablaAmortizacion",
		datosProducto :"#tablaDatos"
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

	this.calculaPor = new SelectComponent("#calcularPor");

	this.plazo = new SelectComponent("#plazo");

	//--Eventos
	var self =this;

	//--tabs 
	$('.tabDestinos > ul > li > a').on( "click", function(){
		self.changeTabs(this.id);
	});
	//--datos
	$(this.selector.datos+' .glyphicon').on( "click", this.collapseDatos );
	$(this.selector.datos+' .header-text').on( "click", this.collapseDatos );
	/*
	$(this.selector.datos+' .glyphicon').on( "click", function() {
		self.collapseDatos();
	});
	$(this.selector.datos+' .header-text').on( "click", function() {
  		self.collapseDatos();
	});*/
	//--programas
	$(this.selector.programas+' .glyphicon').on( "click", function() {
  		self.collapseProgramas();
	});	
	$(this.selector.programas+' .header-text').on( "click", function() {
  		self.collapseProgramas();
	});
	//-- Productos	
	$(this.selector.productos+' .glyphicon').on( "click", function() {
  		self.collapseProductos();
	});	
	$(this.selector.productos+' .header-text').on( "click", function() {
  		self.collapseProductos();
	});
	//-- tabla amortizacion	
	$(this.selector.amortizacion+' .glyphicon').on( "click", function() {
  		self.collapseAmortizacion();
	});	
	$(this.selector.amortizacion+' .header-text').on( "click", function() {
  		self.collapseAmortizacion();
	});
	//-- Datos producto	
	$(this.selector.datosProducto+' .glyphicon').on( "click", function() {
  		self.collapseDatosProducto();
	});	
	$(this.selector.datosProducto+' .header-text').on( "click", function() {
  		self.collapseDatosProducto();
	});

	$(this.calculaPor.selector ).on( "change", function() {
		self.changeCalculaPor($(this).val());
	});
	$(this.plazo.selector ).on( "change", function() {
		self.changePlazo($(this).val());
	});
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


}
Simulador.prototype.changeCalculaPor =function(option) {
	console.debug('method(changeCalculaPor) for '+option);
	this.model.data.calculaPor = option;
	console.info('implementar... ');
}
Simulador.prototype.changePlazo =function(option) {
	console.debug('method(changePlazo) for '+option);
	this.model.data.plazo = option;
	console.info('implementar... ');
}
Simulador.prototype.changeTabs =function(tab) {
	console.debug('method(changeTabs) for '+tab);
	this.model.data.tab = tab;
	switch(tab){
		case "comprarCasa": 		
			this.calculaPor.fill(this.model.collection.calculaPor.comprarCasa);
			this.plazo.fill(this.model.collection.plazo.comprarCasa);
			this.collapseDatos(true);
		break;
		case "comprarTerreno": 		
			this.calculaPor.fill(this.model.collection.calculaPor.comprarTerreno);
			this.plazo.fill(this.model.collection.plazo.comprarTerreno);
			this.collapseDatos(true);
		break;
	}
}
Simulador.prototype.collapseDatos = function(show){

	console.debug('method(collapseDatos)');
	console.info(this)
	this.productos.hideFrame();
	this.amortizacion.hideFrame();
	this.datosProducto.hideFrame();
	this.datos.frameContentCollapse(2000,show);
}
Simulador.prototype.collapseProgramas = function(){
	console.debug('method( collapseProgramas)');
	this.productos.hideFrame();
	this.amortizacion.hideFrame();
	this.datosProducto.hideFrame();
	this.programas.frameContentCollapse(2000);
}
Simulador.prototype.collapseProductos = function(show){
	console.debug('method(collapseProductos)');
	this.amortizacion.hideFrame();
	this.datosProducto.hideFrame();
	this.productos.showFrame();
	this.datos.frameContentCollapse(2000,false);
	this.programas.frameContentCollapse(2000,false);
	this.productos.frameContentCollapse(2000,show);
}
Simulador.prototype.collapseAmortizacion = function(show){
	console.debug('method(collapseAmortizacion)');
	this.amortizacion.showFrame();
	this.datosProducto.showFrame();
	this.productos.frameContentCollapse(2000,false);
	this.amortizacion.frameContentCollapse(2000,show);
}
Simulador.prototype.collapseDatosProducto = function(show){
	console.debug('method(collapseDatosProducto)');
	this.datosProducto.frameContentCollapse(2000,show);
} 
Simulador.prototype.calcularCredito = function(){
	//-- llamamos al servicio para llenar 
		this.llenarTablaProductos( this.servicios.productSimulation(this.model.data) );
		//--llamamos la iteraccion
  	this.collapseProductos(true);
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
		self.collapseAmortizacion(true);
		
	});
}

Simulador.prototype.llenarTablaAmortizacion = function(responseproductos){
	console.debug('method(llenarTablaAmortizacion) ');	
}






module.exports = Simulador;