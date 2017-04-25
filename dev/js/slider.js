
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

Slider.prototype.addLeftLabel = function(){
	
}

Slider.prototype.addRightLabel = function(){
	
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

module.exports=Slider;