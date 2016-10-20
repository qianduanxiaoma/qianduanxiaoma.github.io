$(function(){
	/*车牌号码点击*/
	$(".addcar-carhmrls").click(function(){
		if($(".picker-modal.modal-in").css("display")=="block"){
			$(".addcar-carhmrls img").attr("src","images/addcar-arrt.png");
		}
		$(".addcar-gray").show();
	})
	$(".addcar-gray").click(function(){
		$(".addcar-carhmrls img").attr("src","images/addcar-arrb.png");
		$(".addcar-gray").hide();
	})
	/*号牌类型选择*/
	$(".addcar-carlxti1").click(function(){
		$(this).attr("src","images/addcar-smally.png");
		$(".addcar-carlxti2").attr("src","images/addcar-bign.png");
	})
	$(".addcar-carlxti2").click(function(){
		$(this).attr("src","images/addcar-bigy.png");
		$(".addcar-carlxti1").attr("src","images/addcar-smalln.png");
	})
})