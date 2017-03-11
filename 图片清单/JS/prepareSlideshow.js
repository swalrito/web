function prepareSldeshow()
{
	if(!document.getElementById) return false;
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById("preview")) return false;
	if(!document.getElementById("linklist")) return false;
	var preview=document.getElementById("preview");
	var list=document.getElementById("linklist");
	var links=list.getElementsByTagName("a");
	links[0].onmouseover=function()
	{moveElement("preview",0,0,10);}
	links[1].onmouseover=function()
	{moveElement("preview",-550,0,10);}
	links[2].onmouseover=function()
	{moveElement("preview",-1100,0,10);}
	links[3].onmouseover=function()
	{moveElement("preview",-1650,0,10);}
	links[4].onmouseover=function()
	{moveElement("preview",-2220,0,10);}
}
addLoadEvent(prepareSldeshow);