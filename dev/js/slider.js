
var numeral = require('numeral');

var Slider = function(selectorById,params){
	//--

	this.selector= selectorById;
	this.params ={
		min : 1,
		max : 100,
		step : 10
	};
	this.params = $.extend( this.params, params );
	this.sliderInput = null;
	this.enabledSliderInput=false;
	this.leftLabel=null;
	this.rightLabel=null;

	//--add slider 
	$(this.selector).slider(this.params);
	
	this.element = document.getElementById(this.selector.replace('#',''));

} 
Slider.prototype.addInput = function(sliderInput){

	this.sliderInput = sliderInput;
	this.enabledSliderInput=true;
	$(this.element).on('change',this.changeSlide.bind(this));
	this.sliderInput.setValue( this.params.min );
}

Slider.prototype.addLeftLabel = function(selectorById){
	this.leftLabel=document.getElementById(selectorById.replace('#',''));
	$(this.leftLabel).text('Mínimo ' + numeral(this.params.min).format(' $ 0,0') );
}
 
Slider.prototype.addRightLabel = function(selectorById){
	this.rightLabel=document.getElementById(selectorById.replace('#',''));
	$(this.rightLabel).text( 'Máximo '+numeral(this.params.max).format(' $ 0,0') );
}

Slider.prototype.setValue = function(value){
	console.debug('Slider:: method(setValue) for ' + this.selector);
	$(this.element).slider("setValue", numeral(value).format('0'));
}

Slider.prototype.changeSlide = function(event){

	if(this.enabledSliderInput){
		this.sliderInput.setValue(this.element.value);
	}
}
Slider.prototype.updateParams = function(params){
	console.debug('Slider:: updateParams(setValue) for ' + this.selector);
	console.info(params)
	this.params = $.extend( this.params, params );
	$(this.selector).slider(this.params);
	$(this.leftLabel).text('Mínimo ' + numeral(this.params.min).format(' $ 0,0') );
	$(this.rightLabel).text( 'Máximo '+numeral(this.params.max).format(' $ 0,0') );
	this.sliderInput.setValue(this.element.value);
	//---
}


module.exports=Slider;