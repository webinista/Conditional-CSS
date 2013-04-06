var Utilities = function(){};

Utilities.prototype.updateText = function(parent,newNode,oldNode){
	var fc =  parent.firstChild;
	
	// TO DO: Add error checking for node types.
	
	if(fc){
		parent.replaceChild(newNode,oldNode);
	} else {
		parent.appendChild(newNode);
	}
}

/* Removes all non-word characters */
Utilities.prototype.stripNWChars = function(inputText){
	return inputText.replace(/\W/gi,'');
}

var Util = new Utilities();