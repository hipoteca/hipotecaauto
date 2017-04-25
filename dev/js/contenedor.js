
var Contenedor = function(selector){

	console.debug('Contenedor:: Loading Contenedor with selector '+selector);
	this.selector = selector ;

	this.active = true ;
}

Contenedor.prototype.hideFrame = function(timeout){
	console.debug('Contenedor :: method (hideFrame) for  '+this.selector);
	$(this.selector).hide(timeout) ;
}
Contenedor.prototype.showFrame = function(timeout){
	console.debug('Contenedor :: method (showFrame) for  '+this.selector);
	$(this.selector).show(timeout);
}

Contenedor.prototype.frameContentCollapse = function(timeOutToCollapse, show){
	console.debug('Contenedor :: method( frameContentCollapse ) for '+this.selector+' - with timeout '+timeOutToCollapse+' - show:'+show);
	if(  show == undefined || show == null ){
		show =$(this.selector+' .frame-content').is(':hidden') ;
	} 
	if(show){
		console.debug(' -> show '+this.selector)
		$( this.selector+' .glyphicon' )
		.removeClass('glyphicon-menu-right').removeClass('flecha-2-color')
		.addClass('glyphicon-menu-down').addClass('flecha-1-color');
		
		$( this.selector)
		.removeClass('frame-tab-border-2').removeClass('flecha-2')
		.addClass('frame-tab-border-1').addClass('flecha-1');

		$(this.selector+' .frame-content').show("slow");
		this.active = true ;
	}else if(!show){
		console.debug(' -> hide '+this.selector);
		
		$( this.selector+' .glyphicon' )
		.removeClass('glyphicon-menu-down').removeClass('flecha-1-color')
		.addClass('glyphicon-menu-right').addClass('flecha-2-color');;
		
		$( this.selector)
		.removeClass('frame-tab-border-1').removeClass('flecha-1')
		.addClass('frame-tab-border-2').addClass('flecha-2');

		$(this.selector+' .frame-content').hide(timeOutToCollapse);
		this.active = false ;
	}
}

module.exports = Contenedor;