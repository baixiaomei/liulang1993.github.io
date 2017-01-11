window.onload=function(){
	var slideshow = document.getElementById('slideshow')
	var list = document.getElementById('list')
	var buttons = document.getElementById('buttons').getElementsByTagName('span')
	var prev = document.getElementById('prev')
	var next = document.getElementById('next')
	//每次等到图片显示完毕以后才能再次点击的优化
	var animated = false;
	var timer;
	// 小圆点显示提示
	var index = 1;
	// 小圆点操作函数
	function showButton(){
		for (var i = 0; i < buttons.length; i++) {
				if (buttons[i].className == 'on') {
					buttons[i].className = '';
					break;
				};
			};	
		buttons[index - 1].className = 'on';
	}
	// 箭头操作函数
	function animate(offset){
		animated = true;
		var newLeft = parseInt(list.style.left)+offset;
		var time = 500;// 图片位移时间
		var interval = 10;//图片位移间隔时间；
		var speed = offset/(time/interval);//每次的位移量
		// 什么情况下才做位移
		function go(){
			if( (speed<0 && parseInt(list.style.left)>newLeft)||
				(speed>0 && parseInt(list.style.left)<newLeft)) {
					list.style.left=parseInt(list.style.left)+speed+'px';
					setTimeout(go,interval);
			}
			else{
				animated  = false;
				list.style.left = newLeft +'px';
				if(newLeft>-740){
					list.style.left=-3700+'px';
				}
				if(newLeft<-3700){
					list.style.left=-740+'px';
				}
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
	// 添加事件绑定(以下可以合并成一个参数，animate)
	/*
		next.onclick = function(){
			list.style.left = parseInt(list.style.left) - 740 +'px';
		}
		prev.onclick = function(){
			list.style.left = parseInt(list.style.left) + -740 +'px';
		}
	*/
	// 箭头事件简写如下
		next.onclick = function(){
			if (index == 5)
			{
				index = 1;
			}
			else{
				index += 1;
			}

			showButton();//小圆点移动
			if(!animated)
				{
					animate(-740);
				}//图片移动
		}
		prev.onclick = function(){
			if (index == 1)
			{
				index = 5;
			}
			else{
				index -= 1;
			}
			showButton();//小圆点移动
			if(!animated)
				{
					animate(740);//图片移动	
				} 
		}
		// 按钮事件
		for (var i = 0; i < buttons.length; i++) {
				// 如果按钮就在当前图片，再次点击当前图片要保证光标不会跑动，仍然留在当前left.
				buttons[i].onclick= function(){
				if (this.className == 'on') {
					return;
				};	
				var myIndex = parseInt(this.getAttribute('index'))//dom自定义属性获取	
				var offset = -740*(myIndex - index);
				index = myIndex;
				showButton();	
				if(!animated) 
					{
						animate(offset);
					}
			}
		};
		slideshow.onmouseover = stop;
		slideshow.onmouseout = play;

		play();


}//结束window.onload