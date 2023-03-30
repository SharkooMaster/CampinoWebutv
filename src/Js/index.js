
let isNav = false;

function setIsNav()
{
	console.log("setIsNav");
	isNav = !isNav;
	document.getElementById("isNav").style.display = (isNav) ? "block" : "none";
}