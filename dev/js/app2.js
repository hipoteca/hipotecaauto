

window.jQuery = window.$ = require("jquery");

require("bootstrap");
require("bootstrap-slider");

var Simulador = require('./simulador');
 
$(document).ready(function() {

	var simulador= new Simulador();
	
	$('[data-toggle="tooltip"]').tooltip();	
	
}); 