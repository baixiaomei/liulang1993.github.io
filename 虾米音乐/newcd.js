window.onload = function(){
	// 1
	var newcd = document.getElementById('new-cd');
	var cdmain = document.getElementById('cd-main');
	var cdprev = document.getElementById("cdprev");
	var cdnext = document.getElementById("cdnext");
	function move(itaget){
		var cdmainleft = parseInt(cdmain.style.left)+itaget;
		cdmain.style.left = cdmainleft+'px';
		if (cdmainleft < -2220) {
			cdmain.style.left = -2220+'px';
		};
		if (cdmainleft > 0) {
			cdmain.style.left = 0+'px';
		};
	}
	cdnext.onclick=function(){
		move(-740);
	}
	cdprev.onclick = function(){
		move(740);
	}
	timer = setInterval(function(){
		cdnext.onclick();
	},5000)
}

