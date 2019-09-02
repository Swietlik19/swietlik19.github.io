(function($){

  var screenWidth = $(window).width();

  $('#scr1__slider .scr1__slides').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
    appendDots: $('#scr1__slider .scr1__dots'),
  });

  $.each(['#prod__slider','#prod__slider2'], function(xi,xel) {
    $(xel + ' .slider1__slides').slick({
      infinite: true,
      slidesToShow: 4,
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
            appendDots: $(xel + ' .slider1__dots'),
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            arrows: false,
            dots: true,
            appendDots: $(xel + ' .slider1__dots'),
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            arrows: false,
            dots: true,
            appendDots: $(xel + ' .slider1__dots'),
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true,
            appendDots: $(xel + ' .slider1__dots'),
            centerMode: true,
          }
        }
      ]
    });

    $(xel + ' .slider1__slides').on('setPosition', function(){
      equalHeight(xel);
    });

  });

  $('#popular__slider .slider1__slides').slick({
    infinite: true,
    slidesToShow: 4,
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
          appendDots: $('#popular__slider .slider1__dots'),
        }
      },
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true,
          appendDots: $('#popular__slider .slider1__dots'),
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
          appendDots: $('#popular__slider .slider1__dots'),
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          variableWidth: true,
          arrows: false,
          dots: true,
          appendDots: $('#popular__slider .slider1__dots'),
        }
      }
    ]
  });


  $('.catalog-nav__list').slick({
    responsive: [
      {
        breakpoint: 4000,
        settings: "unslick",
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 8,
          swipeToSlide: true,
          arrows: false,
          dots: false,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 7,
          swipeToSlide: true,
          arrows: false,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 6,
          swipeToSlide: true,
          arrows: false,
          dots: false,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 5,
          swipeToSlide: true,
          arrows: false,
          dots: false,
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 4,
          swipeToSlide: true,
          arrows: false,
          dots: false,
        }
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 3,
          swipeToSlide: true,
          arrows: false,
          dots: false,
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

  $(window).resize(function() {

    var currScreeWidth = $(window).width();

    if (currScreeWidth != screenWidth) {
      equalHeight('#prod__slider');
      equalHeight('#prod__slider2');
    }

    screenWidth = $(window).width();
  });

})(jQuery);
