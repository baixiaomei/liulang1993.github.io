---
layout: post
title: css的6种垂直居中的方式
description: css中的水平居中相对于比较简单，但是垂直居中稍复杂一些，特别是让你用多种形式来实现的时候，我们需要掌握的就必须要全面一些才行
category: blog
---

## 1. 使用position:absolute
	.one {
			position: absolute;
			width: 200px;
			height: 200px;
			background: red;
			top: 50%;
			left: 50%;
			margin-left: -100px;
			margin-top: -100px;
		}
	
	<div class="one">1</div>


## 2. 使用position:fixed
	.two {
			position: fixed;
			width: 200px;
			height: 200px;
			background: red;
			top: 50%;
			left: 50%;
			margin-left: -100px;
			margin-top: -100px;
		}
		
	<div class="two">2</div>	
	
这两种方法看起来非常的相似，唯一的不同就是一个使用的`absolute`,另一个使用的是`fixed`，然后都是将`div`绝对定位到`left:50%; top:50%`;注意这个地方，如果你只是这样定位在`50%`的地方，可能没法达到你预期的效果，因为，你定义的`div`还有自身的`width; height`， 所以你必须减去`div`的`width; height`的一半，才能达到居中的效果，否则会偏移半个div的位置

##	 3. 使用position:absolute, margin:auto;
	.three {
			position: fixed;
			width: 200px;
			height: 200px;
			background: red;
			left: 0;
			top: 0;
			right: 0;
			bottom: 0;
			margin:  auto;
		}
	
	<div class="three">3</div>	
	
##	 4. 使用position:fixed, margin:auto;
	.four{
			position: absolute;
			width: 200px;
			height: 200px;
			background: red;
			left: 0;
			top: 0;
			right: 0;
			bottom: 0;
			margin:  auto;
		}
	
	<div class="four">4</div>
	
这两者又是特别的相似，可以说是一样的，但是里面用到的共同技巧就是，使用绝对定位的同时，将`top; right; bottom; left	`这四个属性都设置为`0`，然后将`margin`属性设置为`auto`，从而达到我们需要的垂直居中的效果。

## 5. 使用css3的display:-webkit-box属性
	.five {
			width: 100px;
			height: 100px;
			background: red;
			position: absolute;
			left: 50%;
			top: 50%;
			transform: : translate(-50%,-50%);
			-webkit-transform: translate(-50%,-50%);
			-moz-transform: translate(-50%,-50%);
			-ms-transform: translate(-50%,-50%);
		}
		
	<div class="five">5</div>

使用`css3`的`display:-webkit-box`属性，再设置`-webkit-box-pack:center/-webkit-box-align:center`,来实现垂直居中的效果

## 6. 使用:before元素
	.six {
			position: fixed;
			display: block;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			text-align: center;
			background: red;
		}
		.six:before{
			content:'';
			display: inline-block;
			vertical-align: middle;
			height: 100%;
			background: yellow;
		}
		.six .content{
			display: inline-block;
			vertical-align: middle;
			width: 100px;
			height: 100px;
			background: green;
			line-height: 100px;
		}
	<div class="six">
		<div class="content"></div>
	</div>
		
## 结语
以上是css的几种垂直居中的方式，可以说是6种也可以说3种，不管怎么样，大家选择自己最熟悉的方式去实现自己需要的效果就可以了，如果有什么纰漏，欢迎指出，共同进步。		