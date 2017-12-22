/*
 * Third party
 */
//= ../../bower_components/jquery/dist/jquery.js

//= ../../node_modules/slick-carousel/slick/slick.js

//= ../../node_modules/owl.carousel/dist/owl.carousel.min.js

(function($) {
$(function() {

	$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	});

});
})(jQuery);

(function($) {
$(function() {

	$('ul.tabs__caption-top').on('click', 'li:not(.active)', function() {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.tabs-top').find('div.tabs__content-top').removeClass('active').eq($(this).index()).addClass('active');
	});

});
})(jQuery);