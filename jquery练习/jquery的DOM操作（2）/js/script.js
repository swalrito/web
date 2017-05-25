$(function  () {
	

	
	$('a').mouseover(  //鼠标移入时，显示大图
		function(e)
		{
			var $tooltip=$("<div id='lgImg'><img src='"+this.href+"' alt='预览图'/>"+"<p id='title'>"+this.title+"</p>"+"</div>");  //新建div
			$('body').append($tooltip);//添加到html中
			$('#lgImg').css(
			{
				"top":e.pageY+10+'px',
				"left":e.pageX+10+'px'
			})

		})
	.mousemove(
		function(e)  //大图随鼠标移动
		{
			$('#lgImg').css(
			{
				"top":e.pageY+10+'px',
				"left":e.pageX+10+'px'
			})
		})
	.mouseout(
		function()
		{
			$('#lgImg').remove();
		})

})