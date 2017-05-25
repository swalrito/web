$(function  () {
	$("a.tooltip").mouseover(  //鼠标移入时，增加提示//
function(e)
{
	 this.myTitle=this.title;
	 this.title='';
	var $tooltip=$("<div id='tooltip'>"+this.myTitle+"</div>");//创建一个div
	$('body').append($tooltip);                          //追加到body中
	$("#tooltip").css({
		"top":e.pageY+10+'px',
		"left":e.pageX+10+'px'
	}
		).show("fast")
}
		)
	.mouseout(                 //鼠标移出时，删除提示//
		function()
		{
			this.title=this.myTitle;
			$("#tooltip").remove();

		})
	.mousemove(
		function(e)  //鼠标移动时，标记也跟着移动//
		{
			$('#tooltip')
			.css(
			{
				'top':e.pageY+10+'px',
				'left':e.pageX+10+'px'
			}
				)
		})
})