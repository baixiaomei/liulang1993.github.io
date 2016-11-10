---
layout:     post
title:      如何解决电商网站菜单栏的Div共用border效果？
category: blog
description:当鼠标滑过的时候，发现隐藏的Div和显示的Div相接的border，被隐藏。
---

##Div共用border

当鼠标移至菜单列表的时候，两个区域的边线无缝连接。如何做到这一点呢， 之前我被这个问题一直困扰，于是现在用最简单的栗子来说明一下。
在这里要强调一下， 我在这个地方困扰了很长时间， 没有找到很好的方法，最后也是通过逆向思维来处理这个问题，发现可以行得通。
于是我写了一段简陋的代码，如下：
	//显示的Div
	.main{
	position:relative;
	width:200px;
	height:200px;
	background-color:pink;
	}
	//隐藏的Div
	.list{
	position:absolute;//这是相对于显示的div而言的
	left:200px;
	top:-2px;//这是讲border的像素加入了
	width:400px;
	height:400px;
	background-color:pink;
	z-index:2;//这个z-index值是相对于显示的div而言的，要比显示的div优先级高
	display:none;
	}
	//加入鼠标移入的:hover
	.main:hover{
	border: 2px solid blue;
	border-right:none;
	margin-right:-2px;
	}
	.main:hover .list{
	border:2px solid blue;
	display:block;
	}

以上代码显示出来的效果如下图所示：
![alt text](/vvimg/共用2.png "Title")	

