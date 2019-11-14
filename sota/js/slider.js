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

  // $('#scr1__slider .scr1__slides').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   swipe: false,
  //   // asNavFor: '#scr1__slider2 .scr1__slides2'
  // });

  // $('#scr1__slider2 .scr1__slides2').slick({
  //   slidesToShow: 4,
  //   // dots: true,
  //   // swipeToSlide: true,
  //   focusOnSelect: true,
  //   asNavFor: '#scr1__slider .scr1__slides'
  //   // appendDots: $('#scr1__slider2 .slider1__dots'),
  //   // appendArrows: $('#scr1__slider2 .career__arrows-wrap'),
  // });
    var scr1Thumbs = new Swiper('#scr1__slider-thumbs', {
      spaceBetween: 1,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var scr1Swiper = new Swiper('#scr1__slider', {
      navigation: {
        nextEl: '.scr1__bottom .swiper-button-next',
        prevEl: '.scr1__bottom .swiper-button-prev',
      },
      thumbs: {
        swiper: scr1Thumbs
      }
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

  function equalHeightSwiper(sliderID) {
    $(sliderID).find('.swiper-slide').height('auto');
    var slickTrack = $(sliderID).find('.swiper-wrapper');
    var slickTrackHeight = $(slickTrack).outerHeight();
    $(sliderID).find('.swiper-slide').css('height', slickTrackHeight + 'px');
  }

  equalHeightSwiper('#scr1__slider');

  $(window).resize(function() {

    var currScreeWidth = $(window).width();

    if (currScreeWidth != screenWidth) {
      equalHeight('#scr1__slider');
    }

    screenWidth = $(window).width();
  });

})(jQuery);
