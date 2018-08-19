$(function() {
	$(function() {
		$('.menu_icon').on('click', function() {
			$(this).closest('.menu').toggleClass('menu_state_open') && $(".main-aside").css("width","50vw");
		});
	})
});
