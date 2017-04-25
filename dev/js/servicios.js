
var Servicios = function(){

}

Servicios.prototype.productSimulation = function(data){
	console.debug("Servicios::method(productSimulation) ");
	console.info(data);
	
	return {dato1:"valor 1"};
}

module.exports = Servicios; 