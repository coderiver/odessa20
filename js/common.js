$(document).ready(function() {

//masonry
function blocks() {	
	if ($('.items__in').length > 0) {		
		var container = document.querySelector('.items__in');
		var msnry = new Masonry( container, {
		  // options
		  itemSelector: '.block',
		  gutter: 18
		});
	};
};
blocks();

//nav
function nav() {
	var nav = $('.nav');
	var nav_bg = $('.nav__bg');
	nav.mouseenter(function() {nav_bg.fadeIn();});
	nav.find('ul').mouseleave(function() {nav_bg.fadeOut();});
};
nav();

//show-hide content in m-slider
$('.js-m-slider').click(function() {
	if (!$(this).hasClass('is-close')) {
		$(this).addClass('is-close');
		$(this).next().fadeOut();
	}
	else {
		$(this).removeClass('is-close');
		$(this).next().fadeIn();
	}
});

});