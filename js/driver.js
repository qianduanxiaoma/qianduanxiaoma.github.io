$(function(){
	$(".driver-click li").click(function(){
		$(this).addClass('driverc-current').siblings().removeClass('driverc-current');
		$(".driver-con").children().children("li").eq($(this).index()).show().siblings().hide();
	})
})