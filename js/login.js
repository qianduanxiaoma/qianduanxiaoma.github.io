$(function(){
	$(".login-shuru input").focus(function(){
		$(this).css("border","1px solid #2cc5b4");
	})
	$(".login-shuru input").blur(function(){
		$(this).css("border","1px solid #494f55");
	})
})