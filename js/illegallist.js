$(function(){
	$(".illegallistc-tabt li").click(function(){
		$(this).addClass('illegallistctt-cur').siblings().removeClass('illegallistctt-cur');
		$(".illegallistc-tabc li").eq($(this).index()).show().siblings().hide();
	})
})