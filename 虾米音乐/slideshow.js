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


	function move(itarget){
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
			move(-740);
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
			move(740)
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
				move(offset);
			};
			index = myIndex;
			showButton();
		}
	};
	slideshow.onmouseover = stop;
	slideshow.onmouseout = play;

	play();
	
}