function getStyle(obj,attr){
	if (obj.currentStyle) {
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	}
}

function startMove(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var moveover = true;
		for(var attr in json){
			var cur = 0;
			if (cur == 'opacity') {
				cur = Math.round(parseFloat(getStyle(obj.attr))*100);
			}else{
				cur = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - cur)/10;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			if (cur != json[attr]) {
				moveover = false;
			}
			if (attr == 'opacity') {
				obj.style.filter = 'alpha(opacity:'+(cur + speed)+')';
				obj.style.opacity = (cur + speed)/100;
			}else{
				obj.style[attr] = cur + speed + 'px';
			}
		}
		if (moveover) {
			clearInterval(obj.timer);
			if (callback) {
				callback();
			};
		};
	},30)
}