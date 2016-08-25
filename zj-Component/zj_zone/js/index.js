$(function(){
	var winW = $(window).width();
	var winH = $(window).height();
	var secondTop = $(".page-second").position().top;
	$(window).resize(function(){
		winW = $(window).width();
		winH = $(window).height();
		secondTop = $(".page-second").position().top;
	});
	//视差滚动
	var scrollNum = 0;
	var theTop = -$(".page-second-inner").height()/2;
	$(document).scroll(function(){
		if(($(this).scrollTop() <= (secondTop + $(".page-second").height())) && ((winH + $(this).scrollTop()) >= secondTop)){
			theTop = theTop + Math.round($(this).scrollTop() - scrollNum)/4;
			$(".page-second-inner").css({
				"top" : theTop*1.4+"px"
			}) 
			scrollNum = $(this).scrollTop();
		}
		
	});
	function navOne (){
		/***
		 *导航栏1元素内容复制
		 ***/
		$(".nav-btn>div").each(function(index,obj){
			//console.log($(obj).width()+"----"+index);
			$(obj).html($(obj).parent().text());
		});
		/***
		 *导航栏1元素点击效果
		 ***/
		$(".nav-btn").hover(function(){
			$(".nav-btn").css({
				"transform":"rotateX(0deg)"
			});
			$(this).css({
				"transform" : "rotateX(-90deg)"
			});
		});
	};
	navOne ();
	/* 1、meun【菜单】
	 * 
	 * .sf-meun-btn
	 * */
	var meunBtnTime;
	$(".sf-meun-btn").click(function(){
		$(this).css("opacity","1");
		clearTimeout(meunBtnTime);
		if($(this).hasClass("sf-meun-btn-down")){
			$(this).removeClass("sf-meun-btn-down");
			$(".nav-btn").addClass("nav-hide");
			meunBtnTime = setTimeout(function(){
				$(".sf-meun-btn").css("opacity",".3")
			},2000);
		}else{
			$(this).addClass("sf-meun-btn-down");
			$(".nav-btn").removeClass("nav-hide");
		}
	});
});

