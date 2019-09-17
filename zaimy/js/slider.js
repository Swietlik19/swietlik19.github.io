(function($){

  var screenWidth = $(window).width();

  $('.header__second-menu .menu').slick({
    responsive: [
      {
        breakpoint: 4000,
        settings: "unslick",
      },
      {
        breakpoint: 1070,
        settings: {
          infinite: false,
          variableWidth: true,
          swipeToSlide: true,
          arrows: false,
        }
      }
    ]
  });

  $('#features__slider .slider1__slides').slick({
    responsive: [
      {
        breakpoint: 4000,
        settings: "unslick",
      },
      {
        breakpoint: 767,
        settings: {
          infinite: false,
          slidesToShow: 2,
          swipeToSlide: true,
          arrows: false,
          dots: true,
          infinite: true,
          appendDots: $('#features__slider .slider1__dots')
        }
      },
      {
        breakpoint: 500,
        settings: {
          infinite: false,
          slidesToShow: 1,
          swipeToSlide: true,
          arrows: false,
          dots: true,
          infinite: true,
          appendDots: $('#features__slider .slider1__dots')
        }
      }
    ]
  });

  $('#blog__slider .slider1__slides').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          dots: true,
          appendDots: $('#blog__slider .slider1__dots')
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
          appendDots: $('#blog__slider .slider1__dots')
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
          appendDots: $('#blog__slider .slider1__dots')
        }
      }
    ]
  });

  function equalHeight(sliderID) {
    $(sliderID).find('.slick-slide').height('auto');
    var slickTrack = $(sliderID).find('.slick-track');
    var slickTrackHeight = $(slickTrack).outerHeight();
    $(sliderID).find('.slick-slide').css('height', slickTrackHeight + 'px');
  }

  $('#blog__slider .slider1__slides').on('setPosition', function(){
    equalHeight('#blog__slider');
  });

  $(window).resize(function() {

    var currScreeWidth = $(window).width();

    if (currScreeWidth != screenWidth) {
      equalHeight('#blog__slider');
    }

    screenWidth = $(window).width();
  });

})(jQuery);
