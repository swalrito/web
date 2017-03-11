function moveElement(elementID,final_x,final_y,interval)
{
	if(!document.getElementById) return false;
	if(!document.getElementById(elementID)) return false;
	var ele=document.getElementById(elementID);
	if(ele.movement)
	{
		clearTimeout(ele.movement);
	}
	if(!ele.style.left)
	{
		ele.style.left="0px";
	}
	if(!ele.style.top)
	{
		ele.style.top="0px";
	}
	var xpos=parseInt(ele.style.left);
	var ypos=parseInt(ele.style.top);
	var dist=0;
	if(xpos==final_x&&ypos==final_y)
		{return true;}
	if(xpos<final_x)
		{
			dist=Math.ceil((final_x-xpos)/10);
			xpos=xpos+dist;
		}
	if(xpos>final_x)
		{
			dist=Math.ceil((xpos-final_x)/10);
			xpos=xpos-dist;
		}
	if(ypos<final_y)
		{
			dist=Math.ceil((final_y-ypos)/10);
			ypos=ypos+dist;
		}
	if(ypos>final_y)
		{
			dist=Math.ceil((ypos-final_y)/10);
			ypos=ypos-final_y;
		}
	ele.style.left=xpos+"px";
	ele.style.top=ypos+"px";
	var repeat="moveElement('"+elementID+"','"+final_x+"','"+final_y+"','"+interval+"')";
	ele.movement=setTimeout(repeat,interval);
}