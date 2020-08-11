$(function(){
  "use strict";

  //include
  $('#header').load('include/header.html');
  $('#footer').load('include/footer.html');

  // Smooth Scrolling
  $(document).on('click', 'a[href^="#"]', function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('html, body').animate({scrollTop:position}, speed, "swing");
    return false;
  });

  // Mouse Stalker
  // $('.mv').mousemove(function(e){
  //   $('#stalker').css('transform', 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)');
  // });

  // Scroll Top & FadeIn Scripts
  var top = $('#top')
  top.hide();

  // $(window).scroll(function (){
  //   var scroll = $(this).scrollTop();
  //   var windowHeight = $(this).height();
  //
  //   if(scroll > 100){
  //     top.fadeIn();
  //   }else{
  //     top.fadeOut();
  //   }
  //
  //   $('.container').find('*').each(function(){
  //     var imgPos = $(this).offset().top;
  //     if(scroll > imgPos - windowHeight + 50){
  //       $(this).animate({'opacity':'1'},500);
  //     }
  //   });
  // });
  $(window).on('scroll load', function (){
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

  // Clone Outline
  $('.outline').clone().removeClass('origin').appendTo('#outline_clone');

  // Accordion
  $(document).on('click', '.accordion', function(){
    $('.accordion_inner').stop(true,true).slideToggle();
  });


  // slick
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 7000,
  });

  // Contact Form Change
  $('form').submit(function(){
    $('button').hide();
    $('#thxMessage').fadeIn(1000);
  });

  // Hamburger Menu
  $(document).on('click', '#hamburger', function(){
    $("body").addClass("show");
  })
  $(document).on('click', '#close, a[href^="#"]', function(){
    $("body").removeClass("show");
  })
});
