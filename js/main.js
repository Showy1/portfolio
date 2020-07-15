$(function(){
  "use strict";

  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });

  // $('button').click(function(){
  $('form').submit(function(){
    // $('#thxMessage').addClass("show");
    $('button').hide();
    $('#thxMessage').fadeIn(1000);
  });

  $('#hamburger').click(function(){
    $("body").addClass("show");
  })
  $('#close, a[href^="#"]').click(function(){
    $("body").removeClass("show");
  })
});
