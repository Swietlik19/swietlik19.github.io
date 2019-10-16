(function($){

  var screenWidth = $(window).width();
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
          slidesToScroll: 1,
          swipeToSlide: true,
          arrows: false,
          dots: true,
          appendDots: $('#features__slider .slider1__dots')
        }
      },
      {
        breakpoint: 500,
        settings: {
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
          arrows: false,
          dots: true,
          appendDots: $('#features__slider .slider1__dots')
        }
      }
    ]
  });

  $('#insta__slider .slider1__slides').slick({
    responsive: [
      {
        breakpoint: 4000,
        settings: "unslick",
      },
      {
        breakpoint: 767,
        settings: {
          infinite: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          swipeToSlide: true,
          arrows: false,
          dots: true,
          appendDots: $('#insta__slider .slider1__dots')
        }
      },
      {
        breakpoint: 450,
        settings: {
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          swipeToSlide: true,
          arrows: false,
          dots: true,
          appendDots: $('#insta__slider .slider1__dots')
        }
      }
    ]
  });

  $('.accessory__slider').each(function(xi,xel) {
    var _id = '#' + $(xel).attr('id');

    $(_id + ' .slider1__slides').slick({
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
            appendDots: $(_id + ' .slider1__dots')
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            arrows: false,
            dots: true,
            appendDots: $(_id + ' .slider1__dots')
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            arrows: false,
            dots: true,
            appendDots: $(_id + ' .slider1__dots')
          }
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 2,
            arrows: false,
            dots: true,
            appendDots: $(_id + ' .slider1__dots')
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true,
            appendDots: $(_id + ' .slider1__dots')
          }
        }
      ]
    });


    $(_id + ' .slider1__slides').on('setPosition', function(){
      equalHeight(_id);
    });
  });

  function equalHeight(sliderID) {
    $(sliderID).find('.slick-slide').height('auto');
    var slickTrack = $(sliderID).find('.slick-track');
    var slickTrackHeight = $(slickTrack).outerHeight();
    $(sliderID).find('.slick-slide').css('height', slickTrackHeight + 'px');
  }

  $('#features__slider .slider1__slides').on('setPosition', function(){
    equalHeight('#features__slider');
  });

  $(window).resize(function() {

    var currScreeWidth = $(window).width();

    if (currScreeWidth != screenWidth) {
      equalHeight('#features__slider');
      $('.accessory__slider').each(function(xi,xel) {
        var _id = '#' + $(xel).attr('id');
        $(_id + ' .slider1__slides').on('setPosition', function(){
          equalHeight(_id);
        });
      });
    }

    screenWidth = $(window).width();
  });

})(jQuery);
