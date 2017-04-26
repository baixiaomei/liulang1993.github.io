window.onload = function(){
	var musicmain = document.getElementById('new-list-main');
	var musicprev = document.getElementById('newlistprev');
	var musicnext = document.getElementById('newlistnext')

	function moveleft(mubiao){
		var newleft = parseInt(musicmain.style.left)+mubiao;
		musicmain.style.left = newleft +'px';
		if (newleft <-2220) {
			musicmain.style.left = -2220+'px';
		}
		if (newleft >0) {
			musicmain.style.left = 0+'px';
		};
	}
	musicprev.onclick=function(){
		moveleft(740);
	}
	musicnext.onclick=function(){
		moveleft(-740);
	}
}