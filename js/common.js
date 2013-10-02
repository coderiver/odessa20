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
	var nav = $('.js-nav');
	var nav_bg = $('.js-nav-bg');
	var nav_open = $('.js-nav-open');
	var nav_close = $('.js-nav-close');
	nav.mouseenter(function() {
		var wnd_width = $(window).width();
		if (wnd_width > 1200) {
			nav_bg.fadeIn(200);
		};
	});
	nav_bg.mouseenter(function() {
		var wnd_width = $(window).width();
		if (wnd_width > 1200) {
			nav_bg.fadeOut(200);
		};		
	});
	nav_open.click(function(){
		nav.fadeIn();
		nav_close.fadeIn();
		nav_bg.fadeIn();
	});
	nav_close.click(function(){
		nav.fadeOut();
		nav_close.fadeOut();
		nav_bg.fadeOut();
	});
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

//select
function select() {
	var el = $('.js-select');
	var el_title = el.find('span');
	var item = el.find('li');
	var list = el.find('ul');
	el_title.click(function() {
		el.removeClass('is-open');
		list.hide();
		$(this).parent().toggleClass('is-open');
		$(this).next().toggle();
	});
	item.click(function() {
		var val = $(this).text();
		$(this).parent().prev().addClass('is-selected');
		$(this).parent().prev().html(val);
		$(this).parent().next().val(val);
		$(this).parent().hide();
		el.removeClass('is-open');
	});
	el.click(function(event){
	  event.stopPropagation();
	});
};
select();

//click document
$(document).click(function() {
	$('.js-select').removeClass('is-open');
});

//window resize
$(window).resize(function() {

});

});