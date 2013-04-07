(function(){
	window.addEventListener('DOMContentLoaded', function(e){
		if( !!window.CSSRule.SUPPORTS_RULE ){
			var w = document.getElementById('warning');
			w.parentNode.removeChild( w );
		}
	},false);
})()
