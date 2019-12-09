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

  $('#career__slider .slider1__slides').slick({
    slidesToShow: 1,
    speed: 500,
    fade: true,
    dots: true,
    appendDots: $('#career__slider .slider1__dots'),
    appendArrows: $('#career__slider .career__arrows-wrap'),
  });

  $('#mission__slider .slider1__slides').slick({
    slidesToShow: 3,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    appendDots: $('#mission__slider .slider1__dots'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 374,
        settings: {
          arrows: false,
          slidesToShow: 1,
        }
      }
    ]
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

  $('.employees__slider').each(function(xi,xel) {
    var xId = '#' + $(this).attr('id');
    $(this).find('.employees__slides').slick({
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 5000,
      swipeToSlide: true,
      rows: 2,
      responsive: [
        {
          breakpoint: 1330,
          settings: {
            arrows: false,
            dots: true,
            appendDots: $(xId + ' .slider1__dots'),
          }
        },
        {
          breakpoint: 730,
          settings: {
            slidesToShow: 2,
            arrows: false,
            dots: true,
            appendDots: $(xId + ' .slider1__dots'),
          }
        }
      ]
    });
  });


  // $('#story__slider2 .story__slides2').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   infinite: false,
  //   speed: 500,
  //   arrows: false,
  //   fade: true,
  //   swipe: false,
  //   asNavFor: '#story__slider .story__slides'
  // });

  // $('#story__slider .story__slides').slick({
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   swipeToSlide: true,
  //   arrows: false,
  //   // focusOnSelect: true,
  //   infinite: false,
  //   speed: 2000,
  //   waitForAnimate: false,
  //   responsive: [
  //     {
  //       breakpoint: 700,
  //       settings: {
  //         slidesToShow: 3,
  //       }
  //     },
  //     {
  //       breakpoint: 576,
  //       settings: {
  //         slidesToShow: 2,
  //       }
  //     },
  //     {
  //       breakpoint: 400,
  //       settings: {
  //         slidesToShow: 1,
  //       }
  //     }
  //   ]
  // });

  var storySlider = new Swiper('#story__slider ',{
    initialSlide: 0,
    slidesPerView: 'auto',
    width: 295,
    touchRatio: 1,
    slideToClickedSlide: !0
    // breakpoints: {
    //     701: {
    //       slidesPerView: 4,
    //     },
    //     576: {
    //       slidesPerView: 3,
    //     },
    //     401: {
    //       slidesPerView: 2,
    //     },
    //   }
  });

  $('#story__slider .story__slide').mouseover(function() {
    storySlider.slideTo($(this).index(), 3000)
  });

  // var xPrev = 0;

  // storySlider.on('slideChangeTransitionEnd', function(){
  //   var xCheck = -1;
  //   $('#story__slider .story__slide').each(function(xi,xel) {
      // if ($(xel).hasClass('swiper-slide-active')) {
      //   if (xi > xPrev) {
      //     xCheck = xi;
      //   } else {
      //     xCheck = xi - 1;
      //   }
      // }

      // if (xCheck == -1 || xi == xCheck) {
      //   $(xel).addClass('story-active');
      // } else {
      //   $(xel).removeClass('story-active');
      // }
  //   });
  // });


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

  function equalHeight(sliderID) {
    $(sliderID).find('.slick-slide').height('auto');
    var slickTrack = $(sliderID).find('.slick-track');
    var slickTrackHeight = $(slickTrack).outerHeight();
    $(sliderID).find('.slick-slide').css('height', slickTrackHeight + 'px');
  }

  $('#scr1__slider .scr1__slides').on('setPosition', function(){
    equalHeight('#scr1__slider');
  });

  // $('#story__slider .story__slides').on('setPosition', function(){
  //   equalHeight('#story__slider');
  // });

  $(window).resize(function() {

    var currScreeWidth = $(window).width();

    if (currScreeWidth != screenWidth) {
      equalHeight('#scr1__slider');
      // equalHeight('#story__slider');
    }

    screenWidth = $(window).width();
  });

})(jQuery);
