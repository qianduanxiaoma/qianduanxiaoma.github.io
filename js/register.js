$(function(){
	/*input获得焦点时改变边框颜色*/
	$(".register-con input").focus(function(){
		$(this).css("border","1px solid #2cc5b4");
	})
	$(".register-con input").blur(function(){
		$(this).css("border","1px solid #d6d9eb");
	})
	/*手机号input获得焦点时改变验证码按钮样式*/
	$(".registerc-phone input").blur(function(){
		//$(this).css("border","1px solid #2cc5b4");
		$(".registerc-yzmr button").css("background-color","#2cc5b4");
	})
	/*验证码点击*/
	$(".registerc-yzmr button").bind("click",function(){
		var time=60;
		fun();
		function fun(){		
			time--;
			$(".registerc-yzmr button").html(time+"s");
			$(".registerc-yzmr button").css("background-color","#95e2d9");
			if(time>0){
				setTimeout(fun, 1000);
				$(".registerc-yzmr button").attr("disabled", true);				
			}
			else{
				$(".registerc-yzmr button").html("获取验证码").removeAttr("disabled");
				$(".registerc-yzmr button").css("background-color","#2cc5b4");
			}
		}
	})

})