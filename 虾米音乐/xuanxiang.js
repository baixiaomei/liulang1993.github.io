$(function(){
	var $bannerNav = $("#banner-nav li");
	$bannerNav.click(function(){
		$(this).addClass("selected")
				.siblings().removeClass("selected");
		var index= $bannerNav.index(this);
		$("#banner-main div")
				.eq(index).show()
				.siblings().hide();
	})

		var $hotNav = $("#hotnav li");
		$hotNav.click(function(){
			$(this).addClass("hotselected")
					.siblings().removeClass("hotselected");
			var index= $hotNav.index(this);
			$("#hotnav-main div")
					.eq(index).show()
					.siblings().hide();
		})
})
