
var SelectComponent = function(selector){
	console.debug('Loading SelectComponent with selector '+selector);
	this.selector=selector;
	this.element = document.getElementById(selector.replace('#',''));
	//console.info(this.element)
	
}

SelectComponent.prototype.fill = function(collection){
	console.debug('SelectComponent::method(fill) for '+this.selector);
	//console.info(this)
	this.clean();
	var self= this;
	collection.forEach(function(item,index){
		self.element.options.add(new Option(item.text,item.value))
	});
	this.element.value=collection[0].value;
	this.element.dispatchEvent(new Event('change'));
}
SelectComponent.prototype.clean = function(){
	while(this.element.length>0 ){
		this.element.remove(0);
	}
}

module.exports = SelectComponent; 