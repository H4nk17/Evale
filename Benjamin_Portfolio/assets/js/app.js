window.onscroll = function()
{
	if(document.documentElement.scrollTop > 150)
	{
		document.getElementById("navbar").style.background = "#f1f1f160";
		document.getElementById("navbar").style.padding = "10px 10px";
		document.getElementById("logo").style.color = "black";
		document.getElementById("navbar-right").style.color = "black";
	}
	else
	{
		document.getElementById("navbar").style.background = "#f1f1f160";
		document.getElementById("navbar").style.padding = "70px 10px";
		document.getElementById("logo").style.color = "black";
		document.getElementById("navbar-right").style.color = "black";
	}
	
}

var p1 = document.getElementById("one");
var p2 = document.getElementById("two");
var p3 = document.getElementById("three");
var p4 = document.getElementById("four");

let htmlCss = document.getElementById("projet1");
let javaScript = document.getElementById("projet2");
let php = document.getElementById("projet3");
let htmlCss = document.getElementById("projet4");

p2.addEventListener("click", function()
	{
		htmlCss.style.display = "contents";
	
		javaScript.style.display = "none";
		php.style.display = "none";
	});