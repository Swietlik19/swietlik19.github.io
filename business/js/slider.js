(function($){

  var screenWidth = $(window).width();

  // $('#partners__slider .slider1__slides').slick({
  //   infinite: true,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
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

  $('#news__slider .news__slides').slick({
    responsive: [
      {
        breakpoint: 4000,
        settings: "unslick"
      },
      {
        breakpoint: 576,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          appendDots: $('#news__slider .news__dots')
        }
      }
    ]
  });

  $('#licenses__slider .licenses__slides').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendArrows: $('#licenses__slider .licenses__slides'),
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          arrows: false,
          dots: true,
          appendDots: $('#licenses__slider .licenses__dots')
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
          appendDots: $('#licenses__slider .licenses__dots')
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
          appendDots: $('#licenses__slider .licenses__dots')
        }
      }
    ]
  });

  $('#reviews__slider .reviews__slides').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 2,
    slidesToScroll: 1,
    appendArrows: $('#reviews__slider .reviews__slides'),
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          arrows: false,
          dots: true,
          appendDots: $('#reviews__slider .reviews__dots')
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
          appendDots: $('#reviews__slider .reviews__dots')
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

  $('#news__slider .news__slides').on('setPosition', function(){
    equalHeight('#news__slider');
  });


  $('#reviews__slider .reviews__slides').on('setPosition', function(){
    equalHeight('#reviews__slider');
  });

  $(window).resize(function() {
    if ($(window).width() != screenWidth) {

      equalHeight('#news__slider');
      equalHeight('#reviews__slider');

      if (window.matchMedia('(max-width: 576px)').matches) {
        $('#news__slider .news__slides').slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          appendDots: $('#news__slider .news__dots')
        });
      } else {
        $('#news__slider .news__slides').slick('unslick');
      }
    }
  });

})(jQuery);
