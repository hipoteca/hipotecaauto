var Label = function(selectorById){
	this.selector	=selectorById;
	this.element 	=document.getElementById(this.selector.replace('#',''));
}

Label.prototype.setValue = function (value){
	$(this.element).text(value)
}


module.exports=Label;