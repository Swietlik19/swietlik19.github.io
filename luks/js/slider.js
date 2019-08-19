(function($){

  var screenWidth = $(window).width();

  $('.projects__slider').each(function(i, el) {
    $('#projects__slider' + i + ' .slider1__slides').slick({
      responsive: [
        {
          breakpoint: 4000,
          settings: "unslick",
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            swipeToSlide: true,
            arrows: false,
            dots: true,
            appendDots: ('#projects__slider' + i + ' .slider1__dots'),
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
            swipeToSlide: true,
            arrows: false,
            dots: true,
            appendDots: ('#projects__slider' + i + ' .slider1__dots')
          }
        }
      ]
    });
  });

  $('#tariffs__slider .slider1__slides').slick({
    responsive: [
      {
        breakpoint: 4000,
        settings: "unslick",
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          swipeToSlide: true,
          arrows: false,
          dots: true,
          appendDots: ('#tariffs__slider .slider1__dots'),
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          swipeToSlide: true,
          arrows: false,
          dots: true,
          appendDots: ('#tariffs__slider .slider1__dots')
        }
      }
    ]
  });

  $('#reviews__slider .slider1__slides').slick({
    slidesToShow: 1,
    swipeToSlide: true,
    appendArrows: ('#reviews__slider'),
    dots: true,
    appendDots: ('#reviews__slider .slider1__dots'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        }
      }
    ]
  });

  $('#modal__slider .modal__slides').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '#modal__slider2 .modal__slides2'
  });

  $('#modal__slider2 .modal__slides2').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    vertical: true,
    asNavFor: '#modal__slider .modal__slides',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          vertical: false,
        }
      }
    ]
  });

  $('#team__slider .slider1__slides').slick({
    infinite: true,
    slidesToShow: 4,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true,
          appendDots: '#team__slider .slider1__dots',
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
          appendDots: '#team__slider .slider1__dots',
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

  $('#tariffs__slider .slider1__slides').on('setPosition', function(){
    equalHeight('#tariffs__slider');
  });

  $(window).resize(function() {

    var currScreeWidth = $(window).width();

    if (currScreeWidth != screenWidth) {
      equalHeight('#tariffs__slider');
    }

    screenWidth = $(window).width();
  });

})(jQuery);
