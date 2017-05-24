//为html中的P元素增加一个点击事件//
$('p').click(function  () {
	alert('点击网页中的P元素，会显示这个对话框。')
})


//使HTML中特定的表格行变色//
$("#tb tbody tr:even").css("background",'#FF0404');//偶数行变色
$("#tb tbody tr:odd").css("background", '#071BFC');//奇数行变色

//给button添加点击事件，显示选中的复选框的个数//
var $length=$("input[name='check']:checked");
$("#btn").click(function ()
{
	alert($length.length);
})