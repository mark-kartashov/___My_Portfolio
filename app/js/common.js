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
						blur_bl.removeClass(blur).css('width','100px');
				}, 50*i);
			});
		}

		else {
			elem.addClass(active);
			item.each(function(i) {
				var row = $(this);
					setTimeout(function() {
						row.addClass(play);
						blur_bl.addClass(blur).css('width','50vh');
				}, 50*i);
			});
		}

	});
	
});
