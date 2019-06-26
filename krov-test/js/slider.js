(function($){

  $('#partners__slider .slider1__slides').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {      
          arrows: false,
          dots: true,
          appendDots: $('#partners__slider .slider1__dots')
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,          
          arrows: false,
          dots: true,
          appendDots: $('#partners__slider .slider1__dots')
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,          
          arrows: false,
          dots: true,
          appendDots: $('#partners__slider .slider1__dots')
        }
      }
    ]
  });

  $('#reviews__slider .reviews__slides').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    dots: true,
    appendDots: $('#reviews__slider .reviews__dots'),
    responsive: [
      {
        breakpoint: 781,
        settings: {      
          arrows: false
        }
      }
    ]
  });

  $('#reviews__slider .reviews__slides').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('#reviews__slider .slick-arrow').css('opacity','0');
  });

  $('#reviews__slider .reviews__slides').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('#reviews__slider .slick-arrow').css('opacity','1');
  });

  $('#certs__slider .certs__slides').slick({    
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,    
    responsive: [
      {
        breakpoint: 1230,
        settings: {      
          arrows: false,
          dots: true,
          appendDots: $('#certs__slider .certs__dots')
        }
      },
      {
        breakpoint: 1020,
        settings: {      
          arrows: false,
          dots: true,
          appendDots: $('#certs__slider .certs__dots'),
          slidesToShow: 2
        }
      },
      {
        breakpoint: 500,
        settings: {      
          arrows: false,
          dots: true,
          appendDots: $('#certs__slider .certs__dots'),
          slidesToShow: 1
        }
      }
    ]
  });

  $('#scr1__slider .scr1__slides').slick({    
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,    
    appendDots: $('#scr1__slider .scr1__dots'),
    arrows: false,
    fade: true,
    speed: 1000
  });

  function equalHeight(sliderID) {
    var slides = $(sliderID + ' .slick-slide');    
    var stHeight = 0;
    slides.each(function(i, el) {
      $(el).css('minHeight','0' );
      if ($(el).height() > stHeight) {
        stHeight = $(el).height();
      }
    });

    $(sliderID + ' .slick-slide').css('minHeight',stHeight + 'px' );
  }

  equalHeight('#scr1__slider .scr1__slides');

  $(window).bind('resize', function(e){
    window.resizeEvt;
    $(window).resize(function() {
      clearTimeout(window.resizeEvt);
        window.resizeEvt = setTimeout(function(){
          equalHeight('#scr1__slider .scr1__slides')
        }, 250);
    });
  });
  	
})(jQuery);
