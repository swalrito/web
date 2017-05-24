//隐藏第七个及之后开始的品牌，除了最后一个其它商品//
var $category=$("ul li:gt(7):not(:last)");
$category.hide();

//给showMore绑定点击事件//
var $btn=$(".showMore a");
$btn.click(
	function (){
		if($category.is(":visible"))
		{
			
			//隐藏显示的品牌，并将a链接的名字改为“显示全部品牌”,取消高亮//
			$category.hide();
	    	$(".showMore a span").text("显示全部品牌");
	    	$("li a").filter(":contains('佳能')").removeClass("light");
			
	    }
	    else {
	    	//显示隐藏的品牌，并将a链接的名字改为“收起全部商品”，并高亮推荐商品//
	    	$category.show();
			$(".showMore a span").text("收起全部商品");
			$("li a").filter(":contains('佳能')").addClass("light");
	    }
	})
