//底部小图点击滚动//
$(function  () {
	var $smPage=$(".bottomImg-imgItems").find("li").length-6;
	var $smImg=parseInt( $(".bottomImg-imgItems").find("li").css("width"))+14;

	$(".bottomImg .rightArrow").click(function()
	{
		var $sm_index=-parseInt($(".bottomImg-imgItems ul").css("left"))/$smImg;
		if($sm_index==$smPage)
		{
			return false;
			
		}
		else{
			if(!$(".bottomImg-imgItems ul").is(":animated"))
			{
				if(!$(".bottomImg-imgItems ul").is("animated"))
			{
				$(".bottomImg-imgItems ul").animate({left:"-="+$smImg+"px"},"normal");
				$sm_index++;
		    }
		    }
	}
	})

	$(".bottomImg .leftArrow").click(function()
	{
		var $sm_index=parseInt($(".bottomImg-imgItems ul").css("left"))/$smImg;
		if($sm_index==0)
		{
			return false;
			
		}
		else{
			if(!$(".bottomImg-imgItems ul").is(":animated"))
			{
			$(".bottomImg-imgItems ul").animate({left:"+="+$smImg+"px"},"normal");
			$sm_index--;
		}
	}
	})
})

//大图点击滚动//
$(function(){
	var $lgPage=$(".leftImg-imgItems").find("img").length;
	var $lgLength=parseInt($(".leftImg-imgItems").css("width"));
	

	$(".leftImg .rightArrow").click(function(){
		var $lg_index=parseInt($(".leftImg-imgItems ul").css("left"))/-800;
		if($lg_index==($lgPage-1))
		{
			return false;
		}
		else
		{
			if(!$(".leftImg-imgItems ul").is(":animated"))
		{
		$(".leftImg-imgItems ul").animate({left:"-="+$lgLength+"px"},"normal");
		$lg_index++;
		showBorder($lg_index+1);
		smMove($lg_index+1);
		changePlan($lg_index);
		changeCamera($lg_index);
	}
		}
		
	})

		$(".leftImg .leftArrow").click(function(){
		var $lg_index=parseInt($(".leftImg-imgItems ul").css("left"))/-800;
		if($lg_index==0)
		{
			return false;
		}
		else
		{
			if(!$(".leftImg-imgItems ul").is(":animated"))
			{
		$(".leftImg-imgItems ul").animate({left:"+="+$lgLength+"px"},"normal");
		$lg_index--;
		showBorder($lg_index+1);
		smMove($lg_index+1);
		changePlan($lg_index);
		changeCamera($lg_index);
	}
		}
		
	})
})

//小图滚动随大图滚动而滚动//
function showBorder(index)
{
	var i=index-1;
	$(".bottomImg-imgItems li").removeClass("J-border");
	$(".bottomImg-imgItems li:eq("+i+")").addClass("J-border");
}

//点击小图切换大图与平面图//
$(function(){
	$(".bottomImg-imgItems li").click(function(event)
	{
		var $tg_index=$(event.target).attr("title");
		var moveLength=$tg_index*(-800)-(-800);
		if(!$(".leftImg-imgItems ul").is(":animated"))
		
		{
			$(".leftImg-imgItems ul").animate({left:moveLength+"px"},"normal");
			changePlan($tg_index-1);
			showBorder($tg_index);
			changeCamera($tg_index-1);
	    }
	})
})

//大图移动到一定程度下方小图也会移动//
function smMove(lg_index){
	var $smImg_width=parseInt($(".bottomImg-imgItems li").css("width"))+14;
	var $sm_left=parseInt($(".bottomImg-imgItems ul").css("left"))-1884;
	var $sm_width=parseInt($(".bottomImg-imgItems ul").css("width"));
	if(lg_index>4)
	{
		if(-$sm_left>=$sm_width)
		{
			return false;
		}
		else
		{
			if(!$(".bottomImg-imgItems ul").is(":animated"))
		{
			$(".bottomImg-imgItems ul").animate({left:"-="+$smImg_width+"px"});
		}		
		}

	}
	else
	{
		if($sm_left>=-1884)
		{
			return false;
		}
		else
		{
			if(!$(".bottomImg-imgItems ul").is(":animated"))

		{
			$(".bottomImg-imgItems ul").animate({left:"+="+$smImg_width+"px"});	
		}		
		}
	}

}

//平面图显示//
$(function(){
	$(".rightImg-sm img").click(function(){
		var $num=$(this).attr("title");
		var $lgImg=parseInt($(".leftImg-imgItems li").css("width"));

		$(".rightImg-lg-items").removeClass("J-display");
		$(".rightImg-lg-items:eq("+$num+")").addClass("J-display");

		$(".rightImg-sm img").removeClass("J-border");
		$(this).addClass("J-border");

		$(".rightImg-lg-items-camera").attr("src","images/camera113.png");
		$(".rightImg-lg-items:eq("+$num+") .rightImg-lg-items-camera:eq(0)").attr("src","images/camera-red.png");
		if(!$(".leftImg-imgItems ul").is(":animated"))
		{
			$(".leftImg-imgItems ul").animate({left:-2*$num*$lgImg+"px"},"normal");
			smMove(2*$num+1);
			showBorder(2*$num+1);
		}
	})
})


//大图切换到一定程度，平面图也切换//
function changePlan(index){
	switch (index) {
		case 0:
		$(".rightImg-sm img:eq(0)").click();
		break;
		case 1:
		$(".rightImg-sm img:eq(0)").click();
		break;
		case 2:
		$(".rightImg-sm img:eq(1)").click();
		break;
		case 3:
		$(".rightImg-sm img:eq(1)").click();
		break;
		case 4:
		$(".rightImg-sm img:eq(2)").click();
		break;
		case 5:
		$(".rightImg-sm img:eq(2)").click();
		break;
		case 6:
		$(".rightImg-sm img:eq(3)").click();
		break;
		case 7:
		$(".rightImg-sm img:eq(3)").click();
		break;
	}
}

//点击摄像头图片切换大图//
$(function(){
	$(".rightImg-lg-items-camera").click(function(){
		var $title=parseInt($(this).attr("title"));
		$(".leftImg-imgItems ul").animate({left:$title*(-800)+"px"},"normal");
		$(".rightImg-lg-items-camera").attr("src","images/camera113.png");
		$(this).attr("src","images/camera-red.png");

		showBorder($title+1);
	})
})

//大图切换到一定位置，摄像头图标相应切换//
function changeCamera(index){
	$(".rightImg-lg-items-camera").attr("src","images/camera113.png");
	$(".rightImg-lg-items-camera:eq("+index+")").attr("src","images/camera-red.png");
}