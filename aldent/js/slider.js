(function($){

  var screenWidth = $(window).width();

  $('#reviews__slider .slider1__slides').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    appendArrows: $('#reviews__slider .slider1__nav'),
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('#blog__slider .slider1__slides').slick({
    responsive: [
      {
        breakpoint: 4000,
        settings: "unslick",
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          swipeToSlide: true,
          appendArrows: ('#blog__slider .slider1__nav'),
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          swipeToSlide: true,
          appendArrows: ('#blog__slider .slider1__nav'),
        }
      }
    ]
  });

  $('#about__slider .slider1__slides').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    appendArrows: $('#about__slider .slider1__nav'),
    responsive: [
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('#certs__slider .slider1__slides').slick({
    infinite: true,
    centerMode: true,
    variableWidth: true,
    slidesToShow: 3,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    appendArrows: $('#certs__slider .slider1__nav'),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          centerMode: false,
          variableWidth: false,
          slidesToShow: 2,
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

  $('#reviews__slider .slider1__slides').on('setPosition', function(){
    equalHeight('#reviews__slider');
  });

  $('#blog__slider .slider1__slides').on('setPosition', function(){
    equalHeight('#blog__slider');
  });

  $('#certs__slider .slider1__slides').on('setPosition', function(){
    equalHeight('#certs__slider');
  });

  $(window).resize(function() {

    var currScreeWidth = $(window).width();

    if (currScreeWidth != screenWidth) {
      equalHeight('#reviews__slider');
      equalHeight('#blog__slider');
      equalHeight('#certs__slider');
    }

    screenWidth = $(window).width();
  });

})(jQuery);
