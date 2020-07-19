$(function(){
  "use strict";

  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('html, body').animate({scrollTop:position}, speed, "swing");
    return false;
  });

  var top = $('#top')
  top.hide();

  $(window).scroll(function (){
    var scroll = $(this).scrollTop();
    var windowHeight = $(this).height();

    if(scroll > 100){
      top.fadeIn();
    }else{
      top.fadeOut();
    }

    $('.container').find('*').each(function(){
      var imgPos = $(this).offset().top;
      if(scroll > imgPos - windowHeight + 50){
        $(this).animate({'opacity':'1'},500);
      }
    });
  });

  top.click(function(){
    $('html, body').animate({scrollTop: 0}, 500);
  });

  $('form').submit(function(){
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
