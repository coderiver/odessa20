$(document).ready(function() {

//masonry
function blocks() {	
	if ($('.items__in').length > 0) {		
		var container = document.querySelector('.items__in');
		var msnry = new Masonry( container, {
		  // options
		  columnWidth: 378,
		  itemSelector: '.block',
		  gutter: 18
		});
	};
};
blocks();

//nav
function nav() {	
	var el = $('.js-nav');
	var nav = $('.js-nav ul');
	var nav_bg = $('.js-nav-bg');
	var nav_open = $('.js-nav-open');
	var nav_close = $('.js-nav-close');
	nav.hoverIntent(nav_1, nav_2);
	function nav_1() {
		var wnd_width = $(window).width();
		if (wnd_width > 1200) {
			nav_bg.fadeIn(200);
		};
	};
	function nav_2() {
		var wnd_width = $(window).width();
		if (wnd_width > 1200) {
			nav_bg.fadeOut(200);
		};		
	};	
	nav_open.click(function(){
		el.fadeIn();
		nav_close.fadeIn();
		nav_bg.fadeIn();
	});
	nav_close.click(function(){
		el.fadeOut();
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

//scroll block
function scroll_block() {
	var el_wrap = $('.js-scroll-block-wrap');
	var el_wrap_height = el_wrap.height();
	var el_wrap_top = el_wrap.offset().top;
	var el_wrap_top_full = el_wrap_height + el_wrap_top;
	var el_parent = $('.js-scroll-block-el');	
	var el = el_parent.find('.scroll-block__in');
	var el_height = el.height();
	var el_left = el_parent.offset().left;
	var el_top = el_parent.offset().top - 20;
	var scroll_top = $(window).scrollTop();
	if (el_wrap_top_full > (scroll_top + el_height + 50)) {
		el.css('opacity', 1);
	}
	else{
		el.css('opacity', 0);
	}
	if (scroll_top > el_top) {
		el.css({'position': 'fixed', 'top': 20, 'left': el_left})
	}
	else{
		el.css({'position': 'relative', 'top': 'auto', 'left': 'auto'})
	}
}
scroll_block();

//click document
$(document).click(function() {
	$('.js-select').removeClass('is-open');
});

//window scroll
$(window).scroll(function() {
	scroll_block();
});

});