(function($){

  var screenWidth = $(window).width();

  $('#products__slider .slider1__slides').slick({
    centerMode: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    appendArrows: $('#products__slider .slider1__arrows'),
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1070,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true,
          appendDots: $('#products__slider .slider1__dots')
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          appendDots: $('#products__slider .slider1__dots')
        }
      },
      {
        breakpoint: 430,
        settings: {
          centerMode: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          appendDots: $('#products__slider .slider1__dots')
        }
      }
    ]
  });

  $('#orders__slider .slider1__slides').slick({
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    appendDots: $('#orders__slider .slider1__dots'),
    responsive: [
      {
        breakpoint: 400,
        settings: {
          centerMode: false,
          arrows: false,
        }
      }
    ]
  });

  $('#insta__slider .slider1__slides').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1270,
        settings: {
          arrows: false,
          dots: true,
          appendDots: $('#insta__slider .slider1__dots'),
        }
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          dots: true,
          appendDots: $('#insta__slider .slider1__dots'),
        }
      }
    ]
  });

  $('#reviews__slider .slider1__slides').slick({
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
          appendDots: $('#reviews__slider .slider1__dots'),
        }
      },
      {
        breakpoint: 500,
        settings: {
          // centerMode: false,
          slidesToShow: 1,
          arrows: false,
          dots: true,
          appendDots: $('#reviews__slider .slider1__dots'),
        }
      }
    ]
  });


  $('#orders__slider .slider1__slides').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('#orders__slider .slick-arrow').css('opacity','0');
  });

  $('#orders__slider .slider1__slides').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('#orders__slider .slick-arrow').css('opacity','1');
  });

  $('#scr_tariff .tariff__list').slick({
    responsive: [
      {
        breakpoint: 4000,
        settings: "unslick",
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          appendDots: $('#scr_tariff .tariff__dots')
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          appendDots: $('#scr_tariff .tariff__dots')
        }
      }
    ]
  });

  $('#scr_tariff .tariff__list').on('setPosition', function(){
    equalHeight('#scr_tariff .tariff__list');
  });


  $('#reviews__slider .slider1__slides').on('setPosition', function(){
    equalHeight('#reviews__slider .slider1__slides');
  });

  function equalHeight(sliderID) {
    $(sliderID).find('.slick-slide').height('auto');
    var slickTrack = $(sliderID).find('.slick-track');
    var slickTrackHeight = $(slickTrack).outerHeight();
    $(sliderID).find('.slick-slide').css('height', slickTrackHeight + 'px');
  }

  $('#products__slider .products__slides').on('setPosition', function(){
    equalHeight('#products__slider');

    function changeOpacity(xThis, xLength, xFirst, xLast) {
      if ( xThis.find('.slider1__slide').length > xLength ) {
        $('#products__slider .products__img').addClass('transparent');
        var currIndex = Number.parseInt($('#products__slider .slick-current').attr('data-slick-index'));
        for (var i = xFirst; i <= xLast; i++) {
          var ind = i + currIndex;
          $('#products__slider .products__slide[data-slick-index="' + ind + '"] .products__img').removeClass('transparent');
        }
      }
    }

    if ( ! window.matchMedia('(max-width: 430px)').matches) {
      changeOpacity($(this),2,-1,0);
    }

    if ( ! window.matchMedia('(max-width: 576px)').matches) {
      changeOpacity($(this),3,-1,1);
    }

    if ( ! window.matchMedia('(max-width: 1070px)').matches) {
      changeOpacity($(this),4,-2,1);
    }

    if ( ! window.matchMedia('(max-width: 1250px)').matches) {
      changeOpacity($(this),5,-2,2);
    }

    if ( ! window.matchMedia('(max-width: 1450px)').matches) {
      changeOpacity($(this),6,-3,2);
    }
  });

  $(window).resize(function() {

    var currScreeWidth = $(window).width();

    if (currScreeWidth != screenWidth) {
      equalHeight('#products__slider');
      equalHeight('#scr_tariff .tariff__list');
      equalHeight('#reviews__slider .slider1__slides');
    }

    screenWidth = $(window).width();
  });

})(jQuery);
