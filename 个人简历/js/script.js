//点击隐藏或显示左边个人信息导航//
$(function  () {
	$(".nav-arrow").click(function()
	{
		var $left=$(".nav").css("left");
		//判断nav当前的位置，将箭头变为右箭头或左箭头。//
		if($left=="0px")
		{
			$(".nav").animate({left:"-350px"},500);
			$(".nav-arrow").removeClass("left-arrow");
			$(".nav-arrow").addClass("right-arrow");
		}
	    else {
		$(".nav").animate({left:"0px"},500);
		$(".nav-arrow").removeClass("right-arrow");
		$(".nav-arrow").addClass("left-arrow");
	    }
	}
		)
	}
)

//操作鼠标滚轮事件，通过鼠标滚轮控制翻页//
function handleScroll(e)
{
	//判断是否为非firefox浏览器//
	if(e.wheelDelta)
	{
		//下翻页//
		if(e.wheelDelta<0)
		{
			var delta=e.wheelDelta;
			console.log(delta);
			if(!$(".J-animate").is(":animated")&&!$(".scroll").hasClass("projects"))  //判断是否处于动画状态，防止动画累加//
			$('.scroll').animate(
		{
			height :"0px"
		},1500)
		.removeClass('scroll')
		.next().addClass('scroll');
	}
	//上翻页//
	else
	{
		if(!$(".J-animate").is(":animated")&&!$(".scroll").hasClass("home"))
		$('.scroll').removeClass("scroll")
		.prev().addClass("scroll")
		.animate({height:"100%"},1500);
	}
	}
	else {
		alert(e.detail);
	}
}
function scroll()
{
	document.addEventListener('mousewheel', handleScroll);      //为非firefox浏览器绑定事件//
	document.addEventListener('DOMMouseScroll', handleScroll);  //为firefox浏览器绑定事件//
}
scroll();