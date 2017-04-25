

var numeral = require('numeral');

var InputNumberText = function(selector){
	console.debug('Loading InputNumberText with selector '+selector);
	this.selector=selector;
	this.element = document.getElementById(selector.replace('#',''));
	
	this.element.addEventListener( "keypress", this.onKeypress,false );
	this.element.addEventListener( "focus", this.focus.bind(this),false );
	this.element.addEventListener( "focusout", this.focusout.bind(this),false );

	this.slider=null;
} 

InputNumberText.prototype.setValue = function(value){
	this.element.value= numeral(value).format('$ 0,0');

}


InputNumberText.prototype.addSlider = function(){
	this.slider=slider;

}

InputNumberText.prototype.onKeypress = function(e){
	//--console.info(e);
    if(e.keyCode < 47 || e.keyCode > 57){
     	e.returnValue = false;
    }
}
InputNumberText.prototype.addSlider = function(slider){
	this.slider=slider;
}

InputNumberText.prototype.focus = function(e){
	this.element.value = numeral(this.element.value).format('0');
	
}

InputNumberText.prototype.focusout = function(e){
	this.element.value = numeral(this.element.value).format('$ 0,0');
	if(this.slider!=null){
		this.slider.setValue(this.element.value);
	}
}

module.exports = InputNumberText;