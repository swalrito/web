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

//点击个人信息导航中的按钮切换主页面//
function clickScrool()
{
	$('#Home').click(function()
		{
			 $length=$("#home").nextUntil("div.scroll").length;
			//.scroll不是自身//
			if($length!=5)
			{
				if(!$(".content").is("animated"))
				{
					$("div.scroll").animate({height:"100%"},1000);
					$("#home").nextUntil("div.scroll").animate({height:"100%"},1000);
					$("div.scroll").removeClass("scroll");
					$("#home").animate({height:"100%"},1000);
					$("#home").addClass("scroll");
			}
			}
		});
	$('#Skills').click(function()
		{
			$length=$("#skills").nextUntil("div.scroll").length;
			//.scroll页面在siklls页面之后//
			if($length!=4)
			{
				if(!$(".content").is("animated"))
				
				{
					$("div.scroll").animate({height:"100%"},1000);
					$("#skills").nextUntil("div.scroll").animate({height:"100%"},1000);
					$("div.scroll").removeClass("scroll");
					$("#skills").animate({height:"100%"},1000);
					$("#skills").addClass("scroll");
			}
			}
			else {
				if(!$(".content").is("animated"))
				{
					$("#skills").prev("div.scroll").animate({height:"0px"},1000);
					$("#skills").prev("div.scroll").removeClass("scroll");
					$("#skills").addClass("scroll");
			}
			}
		});
	$('#Experience').click(function()
		{
			$length=$("#experience").nextUntil("div.scroll").length;
			console.log($length);
			//.scroll页面在experience页面之后//
			if($length!=3)
			{
				if(!$(".content").is("animated"))
				{
				$("div.scroll").animate({height:"0px"},1000);
				$("#experience").nextUntil("div.scroll").animate({height:"100%"},1000);
				$("div.scroll").removeClass("scroll");
				$("#experience").animate({height:"100%"},1000);
				$("#experience").addClass("scroll");
				}
			}
			else {
				    if(!$(".content").is("animated"))
					{
						$("div.scroll").not("#experience").animate({height:"0px"},1000);
						$("#experience").prevUntil(".scroll").not(".nav").animate({height:"0px"},1000);
						$("div.scroll").removeClass("scroll");
						$("#experience").addClass("scroll");
				}
			
			}
		});
	$('#Projects').click(function()
		{
			$length=$("#projects").nextUntil("div.scroll").length;
			if($length==2)
			{
				if(!$(".content").is("animated"))
				{
					$("div.scroll").not("#projects").animate({height:"0px"},1000);
					$("#projects").prevUntil(".scroll").not(".nav").animate({height:"0px"},1000);
					$("div.scroll").removeClass("scroll");
					$("#projects").animate({height:"100%"},1000);
					$("#projects").addClass("scroll");
					}
			}
			
		});
}

//操作鼠标滚轮事件，通过鼠标滚轮控制翻页//
function handleScroll(e)
{
	//判断是否为非firefox浏览器//
	if(e.wheelDelta)
	{
		//下翻页//
		if(e.wheelDelta<0)
		{
			if(!$(".J-animate").is(":animated")&&!$(".scroll").hasClass("projects"))  //判断是否处于动画状态，防止动画累加//
			$('.scroll').animate({height :"0px"},1500)
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
		//下翻页//
		if(e.detail>0)
		{
			if(!$(".J-animate").is(":animated")&&!$(".scroll").hasClass("projects"))  //判断是否处于动画状态，防止动画累加//
			$('.scroll').animate({height :"0px"},1500)
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
}
function scroll()
{
	document.addEventListener('mousewheel', handleScroll);      //为非firefox浏览器绑定事件//
	document.addEventListener('DOMMouseScroll', handleScroll);  //为firefox浏览器绑定事件//
}

//首页显示更多文本
$(function ()
{
	$("#intro span").click(function(){
		$("#reson").show(1000);
		$("#intro span").remove();
	});
	$("#reson span").click(function(){
		$("#exper").show(1000);
		$("#reson span").remove();
	});

}
)

//对skill页面中添加动画特效
$(function(){
	//用show/hide动画//
	$(".hide").hover(function()
		{
			if(!$(this).children(".backinfo").is(":animated"))
			{
				$(this).children(".backinfo").show(1000)
				.prevAll().hide(1000);
		    }
		},function()
		{
			if(!$(this).children(".backinfo").is(":animated"))
			{
			$(this).children(".backinfo").hide(1000)
			.prevAll().show(1000);
		    }
		});

	//fade特效//
	$(".fade").hover(function()
	{
		if(!$(this).children(".backinfo").is(":animated"))
		{
		$(this).children().fadeOut(1000);
		$(this ).children(".backinfo").fadeIn(1000);
	    }  
		
	},function()
	{
		if(!$(this).children(".backinfo").is(":animated"))
		{
			$(this ).children(".backinfo").fadeOut(1000);
			$(this).children(".backinfo").prevAll().fadeIn(1000);
	   }
	});

	//slide动画//
	$(".slide").hover(function()
	{
		if(!$(this).children(".backinfo").is(":animated"))
		{
		$(this).children().slideUp(1000);
		$(this ).children(".backinfo").slideDown(1000);
		}
	},function()
	{
		if(!$(this).children(".backinfo").is(":animated"))
		{
		$(this ).children(".backinfo").slideUp(1000);
		$(this).children(".backinfo").prevAll().slideDown(1000);
		 }
	})
 })


//时间节点特效，循环放大缩小//
$(function()
{
	setInterval(function(){
		$('.items-node').animate({width:"30px",height:"30px",marginLeft:"-15px",marginTop:"-15px"},800);
		$('.items-node').animate({width:"20px",height:"20px",marginLeft:"-10px",marginTop:"-10px"},800);
	}, 1600)
})


//幻灯片播放
$(function()
{
	var page=1;
	var i=3;
	var len=$(".projeccts-list-items").length;
	var page_count=Math.ceil(len/i)
	var $width=$('.projeccts-info').width();
	var $lastWidth=-(page_count-1)*parseInt($width);
	//点击按钮切换//
	$(".btn-right").click(function()
	{
		if(page==page_count)
		{
			if(!$(".projeccts-list").is(":animated"))
			$(".projeccts-list").animate({left:"0px"},"normal");
			page=1;
		}
		else
		{
			if(!$(".projeccts-list").is(":animated"))
			$(".projeccts-list").animate({left:"-="+$width},"normal");
			page++;
		}
		
		
	})
	$(".btn-left").click(function()
	{
		if(!$(".projeccts-list").is(":animated"))
		{
			if(page!=1)
			{
				$(".projeccts-list").animate({left:"+="+$width},"normal");
				page--;
			}
			else
			{
				$(".projeccts-list").animate({left:$lastWidth+"px"},"normal");
				page=page_count;
			}
		}
		
		
	})

	//自动切换//
	var id=setInterval(function()
		{
			if(page==page_count)
		{
			if(!$(".projeccts-list").is(":animated"))
			$(".projeccts-list").animate({left:"0px"},"normal");
			page=1;
		}
		else
		{
			if(!$(".projeccts-list").is(":animated"))
			$(".projeccts-list").animate({left:"-="+$width},"normal");
			page++;
		}
		},2000)
	//停止自动切换//
	$(".projeccts-list").hover(function()
	{
		clearInterval(id);
	},function()
	{
		id=setInterval(function()
		{
			if(page==page_count)
		{
			if(!$(".projeccts-list").is(":animated"))
			$(".projeccts-list").animate({left:"0px"},"normal");
			page=1;
		}
		else
		{
			if(!$(".projeccts-list").is(":animated"))
			$(".projeccts-list").animate({left:"-="+$width},"normal");
			page++;
		}
		},2000);
	});
	$(".btn").hover(function()
	{
		clearInterval(id);
	},function()
	{
		id=setInterval(function()
		{
			if(page==page_count)
		{
			if(!$(".projeccts-list").is(":animated"))
			$(".projeccts-list").animate({left:"0px"},"normal");
			page=1;
		}
		else
		{
			if(!$(".projeccts-list").is(":animated"))
			$(".projeccts-list").animate({left:"-="+$width},"normal");
			page++;
		}
		},2000);
	});
})

//首页尾页箭头动画效果//
$(function(){
	var id=setInterval(function(){
		$(".arrow a").animate({bottom:"+="+"20px"},500);
		$(".arrow a").animate({bottom:"-="+"20px"},500);
	},1000)
})

//点击箭头切换页面//
$(function(){
	$(".downArrow").click(function(){
		$(".home").animate({height:"0px"},1500);
		$(".home").removeClass("scroll");
		$(".skills").addClass("scroll");
	});
	$(".upArrow").click(function(){
		$(".experience").animate({height:"100%"},1500).addClass("scroll");
		$(".projects").removeClass("scroll");
	})
})
scroll();
clickScrool();