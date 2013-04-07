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

Utilities.prototype.whichVideoType = function(){
	var vid = document.querySelector('video') || document.createElement('video');
	var types = {
	  'mp4' :'video/mp4; codecs="avc1.42E01E, mp4a.40.2"', 
	  'webm':'video/webm; codecs="vp8, vorbis"',
	  'ogv' :'video/ogg; codecs="theora, vorbis"'
	}
	
	for(t in types){
		var cpt = vid.canPlayType( types[t] );
		if( cpt !== ''){
			return t; // return the first maybe or probably
			break;    // break after that.
		}	
	}
}

var Util = new Utilities();