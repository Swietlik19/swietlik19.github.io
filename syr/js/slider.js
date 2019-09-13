(function($){

  var screenWidth = $(window).width();

  $('#scr1__slider .scr1__slides').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    fade: true,
    swipe: false,
    asNavFor: '#scr1__slider2 .scr1__slides2'
  });

  $('#scr1__slider2 .scr1__slides2').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    asNavFor: '#scr1__slider .scr1__slides',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          vertical: false
        }
      }
    ]
  });

  $('#partners__slider .slider1__slides').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1210,
        settings: {
          arrows: false,
          dots: true,
          appendDots: $('#partners__slider .slider1__dots'),
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true,
          appendDots: $('#partners__slider .slider1__dots'),
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
          appendDots: $('#partners__slider .slider1__dots'),
        }
      }
    ]
  });


  $('#story__slider2 .story__slides2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    speed: 500,
    arrows: false,
    fade: true,
    swipe: false,
    asNavFor: '#story__slider .story__slides'
  });

  $('#story__slider .story__slides').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    asNavFor: '#story__slider2 .story__slides2',
    focusOnSelect: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });

  $('#company__slider .slider1__slides').slick({
    responsive: [
      {
        breakpoint: 4000,
        settings: "unslick",
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          swipeToSlide: true,
          arrows: false,
          dots: true,
          appendDots: $('#company__slider .slider1__dots')
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          swipeToSlide: true,
          arrows: false,
          dots: true,
          appendDots: $('#company__slider .slider1__dots')
        }
      }
    ]
  });

  $('#story__slider .story__slides').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('#story__slider .story__slide').each(function(xi,xel) {
      if (xi < nextSlide) {
        $(xel).addClass('story-active');
      } else {
        $(xel).removeClass('story-active');
      }
    });
  });

  function equalHeight(sliderID) {
    $(sliderID).find('.slick-slide').height('auto');
    var slickTrack = $(sliderID).find('.slick-track');
    var slickTrackHeight = $(slickTrack).outerHeight();
    $(sliderID).find('.slick-slide').css('height', slickTrackHeight + 'px');
  }

  $('#scr1__slider .scr1__slides').on('setPosition', function(){
    equalHeight('#scr1__slider');
  });

  $(window).resize(function() {

    var currScreeWidth = $(window).width();

    if (currScreeWidth != screenWidth) {
      equalHeight('#scr1__slider');
    }

    screenWidth = $(window).width();
  });

})(jQuery);
