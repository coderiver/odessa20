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

//tabs
function tabs() {
	var el = $('.js-tabs');
	var item = el.find('.tabs__item');
	var btn = el.find('.tabs__nav button');
	var el_join = $('.js-join');
	var btn_join = el_join.find('.join-nav__btns button');
	var title = el_join.find('.join-nav__text');
	item.hide();
	item.first().show();
	btn.click(function() {
		if (!$(this).hasClass('is-active')) {
			btn.removeClass('is-active');
			item.hide();
			$(this).addClass('is-active');
			var tab = $(this).attr('data-tab');
			$('.' + tab).fadeIn();
			btn_join.each(function() {
				if ($(this).attr('data-tab') == tab) {
					btn_join.removeClass('is-active');
					$(this).addClass('is-active');
				};
			});
		};
	});	
	btn_join.click(function() {
		if (!$(this).hasClass('is-active')) {
			var text = $(this).attr('data-text');
			var tab = $(this).attr('data-tab');
			btn_join.removeClass('is-active');
			title.html(text);
			$(this).addClass('is-active');
			item.hide();
			$('.' + tab).fadeIn();
			btn.each(function() {
				if ($(this).attr('data-tab') == tab) {
					btn.removeClass('is-active');
					$(this).addClass('is-active');
				};
			});
		};
	});
};
tabs();

//click document
$(document).click(function() {
	$('.js-select').removeClass('is-open');
});

//window resize
$(window).resize(function() {

});

});