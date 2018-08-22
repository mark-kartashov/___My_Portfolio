$(function() {

	$('.menu-btn').on('click', function() {

		var elem = $(this),
		    item = $('.menu__list'),
		    active = 'is-active',
		    play = 'menu__list--play',
		    blur_bl = $('aside'),
		    blur = 'blur';

		if (  elem.hasClass(active) ) {
			elem.removeClass(active);
			$(item.get().reverse()).each(function(i) {
				var row = $(this);
					setTimeout(function() {
						row.removeClass(play);
				}, 50*i);
			});
			blur_bl.removeClass(blur);
			$(blur_bl.get().reverse()).each(function(e) {
				var row_1 = $(this);
					setTimeout(function() {
						blur_bl.removeClass(blur);
				}, 50*e);
			});
		}

		else {
			elem.addClass(active);
			item.each(function(i) {
				var row = $(this);
					setTimeout(function() {
						row.addClass(play);
				}, 50*i);
			});
			blur_bl.addClass(blur);
			$(blur_bl.get().reverse()).each(function(e) {
				var row_1 = $(this);
					setTimeout(function() {
						blur_bl.addClass(blur);
				}, 50*e);
			});
		}

	});
	
});
