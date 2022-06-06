// JavaScript Document


$(function(){

  /* Scroll */
  $('a[href^="#"]').click(function() {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
  
  /* nav */
  var $header = $('#header');
  $(window).scroll(function() {
    if ($(window).scrollTop() > 880) {
      $header.addClass('is-fixed');
    } else {
      $header.removeClass('is-fixed');
    }
  });

});


$(document).ready(function() {
  $('.has-animation').each(function(index) {
    $(this).delay($(this).data('delay')).queue(function(){
      $(this).addClass('animate-in');
    });
  });
});





