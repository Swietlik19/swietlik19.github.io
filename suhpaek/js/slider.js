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

  // $('#partners__slider .slider1__slides').slick({
  //   infinite: true,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   swipeToSlide: true,
  //   autoplay: true,
  //   autoplaySpeed: 5000,
  //   arrows: true,
  //   responsive: [
  //     {
  //       breakpoint: 1200,
  //       settings: {
  //         arrows: false,
  //         dots: true,
  //         appendDots: $('#partners__slider .slider1__dots')
  //       }
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 3,
  //         arrows: false,
  //         dots: true,
  //         appendDots: $('#partners__slider .slider1__dots')
  //       }
  //     },
  //     {
  //       breakpoint: 550,
  //       settings: {
  //         slidesToShow: 2,
  //         arrows: false,
  //         dots: true,
  //         appendDots: $('#partners__slider .slider1__dots')
  //       }
  //     }
  //   ]
  // });

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
