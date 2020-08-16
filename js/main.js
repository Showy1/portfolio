$(function(){
  "use strict";

  //include
  $('#header').load('include/header.html');
  $('#footer').load('include/footer.html');


  // Loading
  $(window).on('load', function(){
    $('#loader').fadeOut();
  });

  // Smooth Scrolling
  // if(location.pathname == '/'){
  switch (location.pathname){
    case '/':
    case '/portfolio/':
    $(document).on('click', 'a[href^="./"]', function(){
      var speed = 500;
      var href = $(this).attr('href');

      if(href != './'){
        href = href.slice(2);
      }

      var target = $(href == './' ? 'html' : href);
      var position = target.offset().top;
      $('html, body').animate({scrollTop:position}, speed, 'swing');
      return false;
    });
    break;
  }

  // Mouse Stalker
  // $('.mv').mousemove(function(e){
  //   $('#stalker').css('transform', 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)');
  // });

  // Scroll Top & FadeIn Scripts
  var top = $('#top')
  top.hide();

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
  var slider = $('.slider')

  slider.slick({
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 5000,
    arrows: false,
    centerMode: true,
    centerPadding: '10%',
  });

  slider.on('beforeChange', function(){
    $('.slick-current').removeClass('is-active');
  });
  slider.on('afterChange', function(){
    $('.slick-current').addClass('is-active');
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
  $(document).on('click', '#close, a[href^="./"]', function(){
    $("body").removeClass("show");
  })
});
