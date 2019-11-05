(function($){

  var screenWidth = $(window).width();
  // $('#company__slider .slider1__slides').slick({
  //   responsive: [
  //     {
  //       breakpoint: 4000,
  //       settings: "unslick",
  //     },
  //     {
  //       breakpoint: 992,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         swipeToSlide: true,
  //         arrows: false,
  //         dots: true,
  //         appendDots: $('#company__slider .slider1__dots')
  //       }
  //     },
  //     {
  //       breakpoint: 576,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         swipeToSlide: true,
  //         arrows: false,
  //         dots: true,
  //         appendDots: $('#company__slider .slider1__dots')
  //       }
  //     }
  //   ]
  // });

  $('.prod__slider').each(function(xi,xel) {
    var _id = '#' + $(xel).attr('id');
    $(_id + ' .slider1__slides').slick({
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      swipeToSlide: true,
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
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            arrows: false,
            dots: true,
            appendDots: $(_id + ' .slider1__dots')
          }
        },
        {
          breakpoint: 800,
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

            infinite: true,
            centerMode: true,
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

  $('#partners__slider .slider1__slides').slick({
    infinite: true,
    // variableWidth: true,

    slidesToScroll: 1,
    slidesToShow: 5,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          arrows: false,
          dots: true,
          appendDots: $('#partners__slider .slider1__dots')
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true,
          appendDots: $('#partners__slider .slider1__dots')
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
          appendDots: $('#partners__slider .slider1__dots')
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          variableWidth: true,
          arrows: false,
          dots: true,
          appendDots: $('#partners__slider .slider1__dots')
        }
      }
    ]
  });

  $('#partners__slider .slider1__slides').on('setPosition', function(){
    equalHeight('#partners__slider');
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
      equalHeight('#partners__slider');
      $('.prod__slider').each(function(xi,xel) {
        var _id = $(xel).attr('id');
        equalHeight(_id);
      });
    }

    screenWidth = $(window).width();
  });

})(jQuery);
