function positionMessage()
{
	if(!document.getElementById) return false;
	if(!document.getElementById("Message")) return false;
	var ele=document.getElementById('Message');
	ele.style.position="absolute";
	ele.style.top="50px";
	ele.style.left="100px";
	moveElement("Message",200,100,10);
}
addLoadEvent(positionMessage);