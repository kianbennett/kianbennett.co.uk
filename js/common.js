// use jquery to replace #nav-placeholder with the contents of navbar.html
// able to reuse the same navbar across every page
$(function() {
	$('#nav-placeholder').load('navbar.html'); 
});