---
layout:     post
title:      如何解决电商网站菜单栏的Div共用border效果？
category: blog
description: 当鼠标滑过的时候，发现隐藏的Div和显示的Div相接的border，被隐藏。
---

## DIV共线实例

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
![效果图](/images/vvimg/共用2.png "Title")

不管我怎么设置仿佛最好的效果就是如上图所示， 当时我在想， 我到底是哪里出了问题，考虑到了优先级z-index的问题，
但是就是没有做好，很是懊恼，后来我想着我能不能给予一个元素让他来执行我要的占位覆盖的方法，这里我想到了行内元素<span>
利用行内元素，我做了一下的代码修改：
		
	//将一个新的span标签添加到显示的DIV中，然后添加一个:hover伪类在span标签上：

	.main:hover span{
		float:right;
		position:absolute;
		right:-2px;
		border-right:2px solid pink;
		width:20px;
		height:200px;
		z-index:3 //这里的这个值一定要大于显示或者隐藏的div的z-index,不然无法起到遮挡的效果
	}
		

修改后的代码示意图如下：
![修改之后代码示意图](/images/vvimg/共线3.png "Title")

然后惊喜就出现了，效果图如下所示：
![修改之后效果图](/images/vvimg/y1.png "Title")


>好了，看完上面这些简陋的代码，可想而知，电商的菜单栏也是运用了这样的做法：
![效果图](/images/vvimg/共用1.png "Title")


## 结语

小伙伴们可以去尝试一下了，如果看完本文有收获，希望可以一起促进。


如有不足请指出， 我一定会改进的。










