$(function(){
	/*固定tab栏点击*/
	$(".index-tab li").click(function(){
		$(this).addClass('indextabi-current').siblings().removeClass('indextabi-current');
	})
	$(".index-tabo").click(function(){
		$(".index-tabo img").attr("src","images/index-tabweii.png");
		$(".index-tabt img").attr("src","images/index-tabcheo.png");
		$(".index-tabth img").attr("src","images/index-tabzio.png");
		$(".index-tabf img").attr("src","images/index-tabgeo.png");
	})
	$(".index-tabt").click(function(){
		$(".index-tabo img").attr("src","images/index-tabweio.png");
		$(".index-tabt img").attr("src","images/index-tabchei.png");
		$(".index-tabth img").attr("src","images/index-tabzio.png");
		$(".index-tabf img").attr("src","images/index-tabgeo.png");
	})
	$(".index-tabth").click(function(){
		$(".index-tabo img").attr("src","images/index-tabweio.png");
		$(".index-tabt img").attr("src","images/index-tabcheo.png");
		$(".index-tabth img").attr("src","images/index-tabzii.png");
		$(".index-tabf img").attr("src","images/index-tabgeo.png");
	})
	$(".index-tabf").click(function(){
		$(".index-tabo img").attr("src","images/index-tabweio.png");
		$(".index-tabt img").attr("src","images/index-tabcheo.png");
		$(".index-tabth img").attr("src","images/index-tabzio.png");
		$(".index-tabf img").attr("src","images/index-tabgei.png");
	})
})