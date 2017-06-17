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

//点击小图切换大图//
$(function(){
	$(".bottomImg-imgItems li").click(function(event)
	{
		var $tg_index=$(event.target).attr("title");
		var moveLength=$tg_index*(-800)-(-800);
		if(!$(".leftImg-imgItems ul").is(":animated"))
		
		{
			$(".leftImg-imgItems ul").animate({left:moveLength+"px"},"normal");
			showBorder($tg_index);
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

		$(".rightImg-lg img").removeClass("J-display");
		$(".rightImg-lg img:eq("+$num+")").addClass("J-display");
		if(!$(".leftImg-imgItems ul").is(":animated"))
		{
			$(".leftImg-imgItems ul").animate({left:-2*$num*$lgImg+"px"},"normal");
			smMove(2*$num+1);
			showBorder(2*$num+1);
		}
	})
})