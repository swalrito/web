var id=setInterval(autoMove, 5000);

function aMove()
{
	var gallery=document.getElementsByClassName('gallery')[0];

	var a=document.getElementById('a');
	var b=document.getElementById('b');
	var c=document.getElementById('c');
	var d=document.getElementById('d');
	var e=document.getElementById('e');

	a.style.backgroundColor = '#ffffff';
	b.style.backgroundColor = '#ffffff';
	c.style.backgroundColor = '#ffffff';
	d.style.backgroundColor = '#ffffff';
	e.style.backgroundColor = '#ffffff';
	a.style.backgroundColor = '#ff0000';
	gallery.style.left = '0px';

	
}

function bMove()
{
	var gallery=document.getElementsByClassName('gallery')[0];

	var a=document.getElementById('a');
	var b=document.getElementById('b');
	var c=document.getElementById('c');
	var d=document.getElementById('d');
	var e=document.getElementById('e');

	a.style.backgroundColor = '#ffffff';
	b.style.backgroundColor = '#ffffff';
	c.style.backgroundColor = '#ffffff';
	d.style.backgroundColor = '#ffffff';
	e.style.backgroundColor = '#ffffff';
	b.style.backgroundColor = '#ff0000';
	gallery.style.left = '-1024px';

	
}

function cMove()
{
	var gallery=document.getElementsByClassName('gallery')[0];

	var a=document.getElementById('a');
	var b=document.getElementById('b');
	var c=document.getElementById('c');
	var d=document.getElementById('d');
	var e=document.getElementById('e');

	a.style.backgroundColor = '#ffffff';
	b.style.backgroundColor = '#ffffff';
	c.style.backgroundColor = '#ffffff';
	d.style.backgroundColor = '#ffffff';
	e.style.backgroundColor = '#ffffff';
	c.style.backgroundColor = '#ff0000';
	gallery.style.left = '-2048px';

	
}

function dMove()
{
	var gallery=document.getElementsByClassName('gallery')[0];


	var a=document.getElementById('a');
	var b=document.getElementById('b');
	var c=document.getElementById('c');
	var d=document.getElementById('d');
	var e=document.getElementById('e');

	a.style.backgroundColor = '#ffffff';
	b.style.backgroundColor = '#ffffff';
	c.style.backgroundColor = '#ffffff';
	d.style.backgroundColor = '#ffffff';
	e.style.backgroundColor = '#ffffff';
	d.style.backgroundColor = '#ff0000';
	gallery.style.left = '-3072px';

	
}

function eMove()
{
	var gallery=document.getElementsByClassName('gallery')[0];

	var a=document.getElementById('a');
	var b=document.getElementById('b');
	var c=document.getElementById('c');
	var d=document.getElementById('d');
	var e=document.getElementById('e');

	a.style.backgroundColor = '#ffffff';
	b.style.backgroundColor = '#ffffff';
	c.style.backgroundColor = '#ffffff';
	d.style.backgroundColor = '#ffffff';
	e.style.backgroundColor = '#ffffff';
	e.style.backgroundColor = '#ff0000';
	gallery.style.left = '-4096px';

	
}

function showArrow()
{
	var left=document.getElementById('left');
	var right=document.getElementById('right');

	left.style.opacity='0.3';
	right.style.opacity='0.3';

	clearInterval(id);
}

function notShowArrow()
{
	var left=document.getElementById('left');
	var right=document.getElementById('right');

	left.style.opacity='0';
	right.style.opacity='0';
}

function leftMove()
{
	var gallery=document.getElementsByClassName('gallery')[0];
	var xpos=gallery.style.left;
	var x=parseInt(xpos);
	var a=document.getElementById('a');
	var b=document.getElementById('b');
	var c=document.getElementById('c');
	var d=document.getElementById('d');
	var e=document.getElementById('e');

	a.style.backgroundColor = '#ffffff';
	b.style.backgroundColor = '#ffffff';
	c.style.backgroundColor = '#ffffff';
	d.style.backgroundColor = '#ffffff';
	e.style.backgroundColor = '#ffffff';
	if(xpos!="0px")
	{

		gallery.style.left=x+1024+'px';
	}
	showBtnRed();	    
}

function rightMove()
{
	var gallery=document.getElementsByClassName('gallery')[0];
	var xpos=gallery.style.left;
	var x=parseInt(xpos);
	var a=document.getElementById('a');
	var b=document.getElementById('b');
	var c=document.getElementById('c');
	var d=document.getElementById('d');
	var e=document.getElementById('e');

	a.style.backgroundColor = '#ffffff';
	b.style.backgroundColor = '#ffffff';
	c.style.backgroundColor = '#ffffff';
	d.style.backgroundColor = '#ffffff';
	e.style.backgroundColor = '#ffffff';
	if(xpos!="-4096px")
	{
		if(xpos=='')
		{
			x=0;
		}
		gallery.style.left=x-1024+'px';
	}
	showBtnRed();	
}

function showBtnRed()
{
	var gallery=document.getElementsByClassName('gallery')[0];
	var xpos=gallery.style.left;
	var a=document.getElementById('a');
	var b=document.getElementById('b');
	var c=document.getElementById('c');
	var d=document.getElementById('d');
	var e=document.getElementById('e');

	a.style.backgroundColor = '#ffffff';
	b.style.backgroundColor = '#ffffff';
	c.style.backgroundColor = '#ffffff';
	d.style.backgroundColor = '#ffffff';
	e.style.backgroundColor = '#ffffff';
	if(xpos==' '||xpos=="0px")
	{
		a.style.backgroundColor = '#ff0000';
		
	}
	else
    {
		if(xpos=='-1024px')
		{
			b.style.backgroundColor = '#ff0000';
			
		}
		else 
		{
			if(xpos=='-2048px')
			{
				c.style.backgroundColor = '#ff0000';
				
			}
			else
			{
				if(xpos=='-3072px')
				{
					d.style.backgroundColor = '#ff0000';
					
				}
				else 
				{
					if(xpos=='-4096px')
					{
						e.style.backgroundColor = '#ff0000';
						
					}
				}
			}
		}
	}

}
function autoMove()
{
	var gallery=document.getElementsByClassName('gallery')[0];
	var xpos=gallery.style.left;
	var x=parseInt(xpos);
	if(xpos!='-4096px')
	{
		if(xpos=='')
		{
			x=0;
		}
		gallery.style.left=x-1024+'px';
	}
	else
	{
		gallery.style.left = '0px';
	
	}
	showBtnRed();
}


function btnActive()
{
	var a=document.getElementById('a');
	var b=document.getElementById('b');
	var c=document.getElementById('c');
	var d=document.getElementById('d');
	var e=document.getElementById('e');

	var left =document.getElementById('left');
	var right=document.getElementById('right');

	var gallery=document.getElementsByClassName('gallery')[0];
	var left=document.getElementById('left');
	var right=document.getElementById('right');
	var btn=document.getElementsByClassName('btn')[0];

	var btn=document.getElementsByClassName('btn')[0];

	

	a.onclick=aMove;
	b.onclick=bMove;
	c.onclick=cMove;
	d.onclick=dMove;
	e.onclick=eMove;

	gallery.onmouseover=showArrow;
	left.onmouseover=showArrow;
	right.onmouseover=showArrow;

	gallery.onmouseout=function(){notShowArrow();id=setInterval(autoMove, 5000);} 
	left.onmouseout=function(){notShowArrow();id=setInterval(autoMove, 5000);} 
	right.onmouseout=function(){notShowArrow();id=setInterval(autoMove, 5000);} 


	left.onclick=leftMove;
	right.onclick=rightMove;
}
btnActive();