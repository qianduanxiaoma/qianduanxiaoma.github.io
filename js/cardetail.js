$(function(){
	var h = $(document).height()-241;
	$(".cardetailc-dzc").height(h);

	/*地区点击*/
	$(".cardetailc-dz").click(function(){
		if($(".cardetailc-dz img").attr("src")=="images/cardeatil-arrb.png"){
			$('.cardetailc-dzc').show();
			$(".cardetailc-dz span").css("color","#2cc5b4");
			$(".cardetailc-dz img").attr("src","images/cardeatil-arrt.png");
		}else{
			$(".cardetailc-dzc").hide();
			$(".cardetailc-dz span").css("color","#8b9bab");
			$(".cardetailc-dz img").attr("src","images/cardeatil-arrb.png");
		}
		$(".cardetailc-sxc").hide();
		$(".cardetailc-sx span").css("color","#8b9bab");
		$(".cardetailc-sx img").attr("src","images/cardeatil-arrb.png");
	})
	$(".cardetailc-dzc li").click(function(){
		$(this).addClass('cardetailc-dzcic').siblings().removeClass('cardetailc-dzcic');
		$(".cardetailc-dz span").text($(this).text());
		$(".cardetailc-dzc").hide();
		$(".cardetailc-dz span").css("color","#8b9bab");
		$(".cardetailc-dz img").attr("src","images/cardeatil-arrb.png");
	})
	/*筛选点击*/
	$(".cardetailc-sx").click(function(){
		if($(".cardetailc-sx img").attr("src")=="images/cardeatil-arrb.png"){
			$('.cardetailc-sxc').show();
			$(".cardetailc-sx span").css("color","#2cc5b4");
			$(".cardetailc-sx img").attr("src","images/cardeatil-arrt.png");
		}else{
			$(".cardetailc-sxc").hide();
			$(".cardetailc-sx span").css("color","#8b9bab");
			$(".cardetailc-sx img").attr("src","images/cardeatil-arrb.png");
		}
		$(".cardetailc-dzc").hide();
		$(".cardetailc-dz span").css("color","#8b9bab");
		$(".cardetailc-dz img").attr("src","images/cardeatil-arrb.png");
	})
	$(".cardetailc-sxc li").click(function(){
		$(this).addClass('cardetailc-sxcic').siblings().removeClass('cardetailc-sxcic');
		$(".cardetailc-sx span").text($(this).text());
		$(".cardetailc-sxc").hide();
		$(".cardetailc-sx span").css("color","#8b9bab");
		$(".cardetailc-sx img").attr("src","images/cardeatil-arrb.png");
	})
})