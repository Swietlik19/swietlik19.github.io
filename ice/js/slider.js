(function($){

  var screenWidth = $(window).width();
  $('#insta__slider .slider1__slides').slick({
    responsive: [
      {
        breakpoint: 4000,
        settings: "unslick",
      },
      {
        breakpoint: 575,
        settings: {
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

  $('#serv__slider .slider1__slides').slick({
    responsive: [
      {
        breakpoint: 4000,
        settings: "unslick",
      },
      {
        breakpoint: 1070,
        settings: {
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
          arrows: false,
          dots: true,
          appendDots: $('#serv__slider .slider1__dots')
        }
      }
    ]
  });

  $('#about__slider .slider1__slides').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    appendArrows: $('#about__slider .slider1__arrows')
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
