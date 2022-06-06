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

//matchHeight
$(function ($) {
	$('.community-list__box').matchHeight();
	$('.benefit-img').matchHeight();
});

// DETECT MAC
var deviceDetect = navigator.platform;
var appleDevicesArr = ['MacIntel', 'MacPPC', 'Mac68K', 'Macintosh', 'iPhone',
	'iPod', 'iPad', 'iPhone Simulator', 'iPod Simulator', 'iPad Simulator', 'Pike'];

// If on Apple device
if(appleDevicesArr.includes(deviceDetect)) {
	$(".mv-btn .inn").addClass("mac");
}