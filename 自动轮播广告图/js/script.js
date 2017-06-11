//克隆第一张图与最后一张图//
$(function() {
	var $firstImg=$(".gallery").find("li").first().clone();
	var $lastImg=$(".gallery").find("li").last().clone();
	$(".gallery").prepend($lastImg);
	$(".gallery").append($firstImg);
})


//显示箭头//
$(function()
{
	$(".banner").hover(function()
	{
		$(".leftArrow a").css({opacity:"0.4"});
		$(".rightArrow a").css({opacity:"0.4"});
	},function()
	{
		$(".leftArrow a").css({opacity:"0"});
		$(".rightArrow a").css({opacity:"0"});
	})
})


//自动播放//
function autoMove()
{
	var gallery=document.getElementsByClassName("gallery")[0];
	var index=1;
	var id=setInterval(function(){

		var left=parseInt(gallery.style.left);
		if(left<-5120)
		{
			gallery.style.left="-1024px";
		}

		$(".gallery").animate({left:"-="+1024+"px"},500);
		index++;
		if(index>5)
		{
			index=1;
		}
		showBtn(index);

	}, 2000)
	$(".banner").hover(function(){
		clearTimeout(id);
	},function(){
		id=setInterval(function()
			{
				var left=parseInt(gallery.style.left);
				if(left<-5120)
				{
				gallery.style.left="-1024px";
				}
				
				$(".gallery").animate({left:"-="+1024+"px"},500);
				index++;
				if(index>5)
				{
					index=1;
				}
				showBtn(index);
			},2000);
	})
}
autoMove();

//btn背景色切换
function showBtn(index){
	var btn=document.getElementsByClassName("btn-item-a");
	for(var i=0;i<btn.length;i++)
	{
		if(btn[i].className=="btn-item-a red")
		{
			btn[i].className="btn-item-a";
			break;
		}
	}
	btn[index-1].className="btn-item-a red";
}


//点击箭头切换图片
function arrowChange()
{
	var gallery=document.getElementsByClassName("gallery")[0];
	var leftBtn=document.getElementById("left");
	var rightBtn=document.getElementById("right");
	var index=1;
	gallery.style.left="-1024px";
	function animate(offset)
	{
		var newLeft=parseInt(gallery.style.left)+offset;
		var time=300;
		var interval=10;
		var speed=offset/(time/interval);

		function go(){
			if(speed<0&&parseInt(gallery.style.left)>newLeft||speed>0&&parseInt(gallery.style.left)<newLeft)
			{
				gallery.style.left=parseInt(gallery.style.left)+speed+"px";
				setTimeout(go,interval);
			}
			else {
				gallery.style.left=newLeft+"px";
				if(newLeft>-1024)
				{
				gallery.style.left="-5120px";
				}
				if(newLeft<-5120)
				{
				gallery.style.left="-1024px";
				}
				}
		}
		go();
		
	}

	leftBtn.onclick=function(){
		animate(1024);
		index--;
		if(index<1)
		{
			index=5;

		}
		showBtn(index);
	}
	rightBtn.onclick=function(){
		animate(-1024);
		index++;
		if(index>5)
		{
			index=1;

		}
		showBtn(index);
	}
}
arrowChange();


//点击a标签切换图片//
$(function()
{
	
	$(".btn-item-a").click(function()
	{
		//给点击的a标签换色//
		$(".btn-item-a").removeClass("red");
		$(this).addClass("red");		
	});
		//点击相应的a标签切换图片//
	$(".btn-item-a:eq(0)").click(function()
	{
		if(!$(".gallery").is(":animated"))
		{
			$(".gallery").animate({left:"-1024px"},"quick");
		}
	});
	$(".btn-item-a:eq(1)").click(function()
	{
		if(!$(".gallery").is(":animated"))
		{
			$(".gallery").animate({left:"-2048px"},"quick");
		}
	});
	$(".btn-item-a:eq(2)").click(function()
	{
		if(!$(".gallery").is(":animated"))
		{
			$(".gallery").animate({left:"-3072px"},"quick");
		}
	});
	$(".btn-item-a:eq(3)").click(function()
	{
		if(!$(".gallery").is(":animated"))
		{
			$(".gallery").animate({left:"-4096px"},"quick");
		}		
	});
	$(".btn-item-a:eq(4)").click(function()
	{
		if(!$(".gallery").is(":animated"))
		{
			$(".gallery").animate({left:"-5120px"},"quick");
		}
	});



})
