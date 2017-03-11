function insertAfter(newElement,targetElement)
{
	var parent=targetElement.parentNode;
	if(parent.lastChild==targetElement)
	{
		parent.appendChild(newElement);
	}else
	{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}
function positionimg()
{
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById)return false;
	if(!document.getElementById("linklist")) return false;
	var slideshow=document.createElement("div");
	slideshow.setAttribute("id","slideshow");
	var preview=document.createElement("img");
	preview.setAttribute("src","images/list.jpg");
	preview.setAttribute("id","preview");
	preview.setAttribute("alt","picture");
	slideshow.appendChild(preview);
	var list=document.getElementById("linklist");
	insertAfter(slideshow,list);
}
addLoadEvent(positionimg);