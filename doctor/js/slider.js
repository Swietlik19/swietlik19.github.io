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

  $('#certs__slider .slider1__slides').slick({
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
          appendDots: $('#certs__slider .slider1__dots')
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
          appendDots: $('#certs__slider .slider1__dots')
        }
      }
    ]
  });

  $('#result__slider .slider1__slides').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    speed: 1000,
    responsive: [
      {
        breakpoint: 1070,
        settings: {
          arrows: false,
          dots: true,
          appendDots: $('#result__slider .slider1__dots')
        }
      }
    ]
  });

  // function equalHeight(sliderID) {
  //   $(sliderID).find('.slick-slide').height('auto');
  //   var slickTrack = $(sliderID).find('.slick-track');
  //   var slickTrackHeight = $(slickTrack).outerHeight();
  //   $(sliderID).find('.slick-slide').css('height', slickTrackHeight + 'px');
  // }

  // $('#products__slider1 .slider1__slides').on('setPosition', function(){
  //   equalHeight('#products__slider1');
  // });

  $(window).resize(function() {

    var currScreeWidth = $(window).width();

    if (currScreeWidth != screenWidth) {
      // equalHeight('#products__slider1');
    }

    screenWidth = $(window).width();
  });

})(jQuery);
