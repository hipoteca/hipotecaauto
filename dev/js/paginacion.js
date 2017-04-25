
var Paginacion = function(selector){
	this.selector			=selector;
	this.registros		= 0;
	this.paginas		= 0;
	this.regPorPagina	= 10;
	this.paginasActuales= [];
	this.actual= 1;

	this.setRegistros = function(registros){

		this.registros=registros;

		//--calculamos paginacion
		this.calcular();

		//--creamos paginas
		$(this.selector).append('<li id="pag-previus" ><a  href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>');		
		for(var i=1; i <= this.paginas; i++ ){
			$(this.selector).append('<li id="pag-'+i+'" class="hidden" ><a href="#">'+i+'</a></li>');
		}
		$(this.selector).append('<li id="pag-next"  ><a  href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>');		

		var self = this;
		//--asignamos eventos a paginas 
		for(var i=1; i<= this.paginas; i++){
			$('#pag-'+i).bind('click',function(){
				self.mostrarPagina( this.id.substring(4) );
			});
		}
		//--asignamos eventos a siguiente
		$('#pag-next').bind('click',function(){
			self.siguiente()
 		});
 		//--asignamos eventos a anterior
 		$('#pag-previus').bind('click',function(){
			self.anterior();
 		});

 		//-- actions 
 		this.clean();
		this.showActual();
	}

	this.clean = function(){
		for(var i=1; i<= this.paginas;i++){
			$('#pag-'+i).addClass('hidden').removeClass('active');
			if(i==this.actual){
				$('#pag-'+i).addClass('active');
			}
		}
	}

	this.showActual = function(){
		this.paginasActuales.forEach(function(element){
			$('#pag-'+element).removeClass('hidden');
 		})
	}

	this.calcular = function(){
		this.paginas = Math.ceil(this.registros/this.regPorPagina); 
		this.rango()
	}

	this.rango = function(){
		console.info('rango()');
		this.paginasActuales =[];
		console.info('Pagina '+this.actual+' de '+this.paginas);
		
		var init = 1;
		var top  = 5;
		if(this.paginas > 5 ){
			init=this.actual-2;
			top = this.actual+2
			if(init<1){
				top=top+(init*-1)+1
			}
			if(top>this.paginas){
				init=init-(top-this.paginas);
			}
		}
		
    for (var i = init; i <=top; i++) {
    	if (i >= 1 && i <= this.paginas ) 
    		this.paginasActuales.push(i);
    }
    console.info('rango: '+this.paginasActuales)
	}

	this.siguiente = function(){
		console.info(this.paginas+' :: '+this.actual)
		if(this.paginas >  this.actual){
			this.actual = this.actual+1		
			this.rango();		
			this.clean();
			this.showActual();
		}
	}

	this.anterior = function(){
		console.info(this.paginas+' :: '+this.actual)
		if(this.actual > 1   ){
			this.actual = this.actual-1		
			this.rango();		
			this.clean();
			this.showActual();
		}
	}

	this.mostrarPagina = function(pagina){
		console.info(' Set: '+pagina);
		this.actual= parseInt(pagina);
		this.rango();		
		this.clean();
		this.showActual();
	}
}

module.exports = Paginacion;
