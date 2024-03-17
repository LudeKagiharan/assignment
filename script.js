var typed = new Typed((".skills),{
	strings:["Frontend Developer","UI designer","Software Engineer"],
	typespeed : 100,
	backspeed : 100,
	backDelay : 1000,
	loop : true
	
});
var sections = document.querySelectorAll("section");
var links = document.querySelectorAll("header nav a");
var menu = document.querySelectorAll("#menu");
var navbar = document.querySelectorAll("header nav");
menu.onlick = () =>{
	menu.classList.toggle("bx-x");
	navbar.classList.toggle("active");
};
window.onscroll = () => {
sections.forEach(section => {	
var scroll = scrollY;
var offset =section.offsetTop = 100;
var id = section.id;
if(scroll >= offset){
	links.forEach(e => {
		e.classList.remove("active")
		
	});
	document.querySelector("nav a[href="#" + id +"]").classList.add("active");
};

});

};