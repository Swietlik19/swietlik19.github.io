(function($){

  var screenWidthSlider = $(window).width();
  var newsSlickPB = 576;
  var profiSlickPB = 992;

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
        breakpoint: 350,
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

  function newsSlider() {
    $('#news__slider .news__slides').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      appendDots: $('#news__slider .news__dots')
    });
  }

  function profiSlider() {
    $('#profi__slider .profi__slides').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      appendDots: $('#profi__slider .profi__dots'),
      responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
    });
  }

  if (window.matchMedia('(max-width: ' + newsSlickPB + 'px)').matches) {
    newsSlider();
  }

  if (window.matchMedia('(max-width: ' + profiSlickPB + 'px)').matches) {
    profiSlider();
  }

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
    var currScreeWidth = $(window).width();

    if (currScreeWidth != screenWidthSlider) {

      equalHeight('#news__slider');
      equalHeight('#reviews__slider');

      if ( !(currScreeWidth > newsSlickPB && screenWidthSlider > newsSlickPB || currScreeWidth <= newsSlickPB && screenWidthSlider <= newsSlickPB) ) {
        if (window.matchMedia('(max-width: ' + newsSlickPB + 'px)').matches) {
          newsSlider();
        } else {
          $('#news__slider .news__slides').slick('unslick');
        }
      }

      if ( !(currScreeWidth > profiSlickPB && screenWidthSlider > profiSlickPB || currScreeWidth <= profiSlickPB && screenWidthSlider <= profiSlickPB) ) {
        if (window.matchMedia('(max-width: ' + profiSlickPB + 'px)').matches) {
          profiSlider();
        } else {
          $('#profi__slider .profi__slides').slick('unslick');
        }
      }

    }
    screenWidthSlider = $(window).width();
  });

})(jQuery);
