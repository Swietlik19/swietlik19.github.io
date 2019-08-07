(function($){

  var screenWidth = $(window).width();

  $('#advantages__slider .slider1__slides').slick({
    responsive: [
      {
        breakpoint: 4000,
        settings: "unslick",
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
          appendDots: $('#advantages__slider .slider1__dots')
        }
      }
    ]
  });

  $('#application__slider .slider1__slides').slick({
    responsive: [
      {
        breakpoint: 4000,
        settings: "unslick",
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
          appendDots: $('#application__slider .slider1__dots')
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
          appendDots: $('#application__slider .slider1__dots')
        }
      }
    ]
  });

  $('#projects__slider .slider1__slides').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
          appendDots: $('#projects__slider .slider1__dots')
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
          appendDots: $('#projects__slider .slider1__dots')
        }
      }
    ]
  });

  $('#best__slider .slider1__slides').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
          appendDots: $('#best__slider .slider1__dots')
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
          appendDots: $('#best__slider .slider1__dots')
        }
      }
    ]
  });

  $('#delivery__slider .slider1__slides').slick({
    responsive: [
      {
        breakpoint: 4000,
        settings: "unslick",
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
          appendDots: $('#delivery__slider .slider1__dots')
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
          appendDots: $('#delivery__slider .slider1__dots')
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

  $('#advantages__slider .slider1__slides').on('setPosition', function(){
    equalHeight('#advantages__slider');
  });

  $('#application__slider .slider1__slides').on('setPosition', function(){
    equalHeight('#application__slider');
  });

  $('#best__slider .slider1__slides').on('setPosition', function(){
    equalHeight('#best__slider');
  });

  $('#delivery__slider .slider1__slides').on('setPosition', function(){
    equalHeight('#delivery__slider');
  });

  $(window).resize(function() {

    var currScreeWidth = $(window).width();

    if (currScreeWidth != screenWidth) {
      equalHeight('#advantages__slider');
      equalHeight('#application__slider');
      equalHeight('#best__slider');
      equalHeight('#delivery__slider');
    }

    screenWidth = $(window).width();
  });

})(jQuery);
