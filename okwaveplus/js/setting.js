$('.faq-list__q').on('click', function () {
	$(this).toggleClass('on').next().slideToggle(200);
});

$(function () {
	objectFitImages('img');
});

// link anchor
if (window.location.hash)
	scroll(0, 0);
setTimeout(function () {
	scroll(0, 0);
}, 1);

$(function () {
	var headerHeight = $("#header").outerHeight();
	if (window.location.hash) {
		$('html,body').animate({
			scrollTop: $(window.location.hash).offset().top - headerHeight
		}, 800);
	}
});
$(function () {
	$('.link[href^="#"]').click(function () {
		var headerHeight = $("#header").outerHeight();
		var speed = 800;
		var href = jQuery(this).attr("href");
		var target = jQuery(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top - headerHeight;
		$('body,html').animate({scrollTop: position}, speed, 'swing');
		return false;
	});
});

//siider-home
$('.voice-slider').slick({
	dots: false,
	arrows: true,
	focusOnSelect: true,
	pauseOnHover: false,
	infinite: false,
	speed: 200,
	autoplay: false,
	cssEase: 'linear',
	responsive: [
		{
			breakpoint: 835,
			settings: {
				dots: true,
			}
		}
	]
});

//matchHeight
$('.community-list__box').matchHeight();
// $('.voice-box__item').matchHeight();
jQuery(function ($) {
	$('.community-list__box').matchHeight();
	// $('.voice-box__item').matchHeight();
});