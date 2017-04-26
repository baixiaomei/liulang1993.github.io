window.onload = function(){
	var slideshow = document.getElementById('slideshow');
	var main = document.getElementById("slideshow-main");
	var showbuttons = document.getElementById("showbutton").getElementsByTagName('span');
	var index = 1;
	var prev = document.getElementById('prev');
	var next = document.getElementById('next');
	var animated = false;
	function showButton(){
	  	for (var i = 0; i < showbuttons.length; i++) {
	  			if (showbuttons[i].className == 'on') {
	  				showbuttons[i].className = '';
	  				break;
	  			};
	  		};	

	  	showbuttons[index - 1].className = 'on';
	}
	function startmove(itarget){
		animated = true;
		var newLeft = parseInt(main.style.left) + itarget;
		var time = 300;
		var interval = 10;
		var speed = itarget/(time/interval);
		function go(){
			if ((speed < 0 && parseInt(main.style.left)>newLeft) ||
				(speed > 0 && parseInt(main.style.left)<newLeft)
				) {
				main.style.left = parseInt(main.style.left)+speed +'px';
				setTimeout(go,interval);
			}else{
				animated = false;

				main.style.left = newLeft +'px';
				if (newLeft < -4440) {
					main.style.left = -1480 +'px'
				};
				if (newLeft > -740) {
					main.style.left = -3700 +'px';
				};
			}
		}	
		go();
	}
	//自动播放
    function play(){
    	timer = setInterval(function(){
    		next.onclick();
    	},3000);
    }
    // 停止播放
    function stop(){
    	clearInterval(timer);
    }
	next.onclick=function(){
		if (index == 5) {
			index = 1
		}else{
			index = index+1;
		}
		if (!animated) {
			startmove(-740);
		}
		showButton();
	}
	prev.onclick=function(){
		if (index == 1) {
			index = 5
		}else{
			index = index-1;
		}
		if (!animated) {
			startmove(740)
		};	
		showButton();
	}	
	for (var i = 0; i < showbuttons.length; i++) {
		showbuttons[i].onclick = function(){
			if (this.className == 'on') {
				return;
			};

			var myIndex = parseInt(this.getAttribute('index'));
			var offset = -740 * (myIndex - index)
			if (!animated) {
				startmove(offset);
			};
			index = myIndex;
			showButton();
		}
	};
	slideshow.onmouseover = stop;
	slideshow.onmouseout = play;

	play();


	// 2
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

	// 3
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
