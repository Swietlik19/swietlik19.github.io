(function($){

  var screenWidthSlider = $(window).width();
  /* Переменная breakpoint для second-menu слайдера, когда он меняется с unslick на slick и обратно. Иначе выдаёт ошибку */
  var secondMenuSlickPB = 900;

  $('#scr1__slider .scr1__slides').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    dots: true,
    appendArrows: $('.scr1__arrows'),
    appendDots: $('.scr1__dots'),
    fade: true,
    speed: 700
  });

  if ( !(window.matchMedia('(max-width: 650px)').matches) ) {
    $('#insta__slider .insta__slides').slick({
      infinite: true,
      slidesToScroll: 1,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
      rows: 2,
      arrows: true,
      swipe: false
    });
  }

  if (window.matchMedia('(max-width: 650px)').matches) {
    $('#insta__slider .insta__slides').slick({
      infinite: true,
      slidesToScroll: 1,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
      rows: 1,
      dots: true,
      appendDots: $('#insta__slider .insta__dots'),
      swipe: true,
      arrows: false
    });
  }


  var firstInit = true

  $('#insta__slider .insta__slides').on('setPosition', function(){
    if (firstInit)  {
      $(this).slick('slickNext');
      firstInit = false;
    }
  });

  $('#insta__slider .insta__slides').on('beforeChange', function(){
    if ( !(firstInit) ) {
      $('.insta__block--one').addClass('disabled');
    }
  });


  $('#scr1__slider .scr1__slides').on('afterChange', function(event, slick, currentSlide){
    var currentNum = currentSlide + 1;
    $('#scr1__slider .slider1__num').text('' + currentNum + '');
  });

  $('#products__slider1 .products__slides').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    appendArrows: $('#products__slider1'),
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          centerMode: true,
          infinite: true,
          arrows: false
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          infinite: true,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          infinite: true,
          arrows: false
        }
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          infinite: true,
          arrows: false
        }
      }
    ]
  });

  $('#products__slider2 .products__slides').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    appendArrows: $('#products__slider2'),
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          centerMode: true,
          infinite: true,
          arrows: false
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          infinite: true,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          infinite: true,
          arrows: false
        }
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          infinite: true,
          arrows: false
        }
      }
    ]
  });

  function secondMenuSlider() {
    $('.header__second-menu .menu').slick({
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 2,
      arrows: false,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 5
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 4
          }
        }
      ]
    });
  }

  if (window.matchMedia('(max-width: ' + secondMenuSlickPB + 'px)').matches) {
    secondMenuSlider();
  }

  $('.header__second-menu .menu').on('beforeChange', function() {
    $('.header__second-menu .menu > .menu-item-has-children .sub-menu__wrap').hide();
    $('.header__second-menu .menu > .menu-item-has-children').removeClass('active');
  });

  $('#blog__slider .blog__slides').slick({
    centerMode: true,
    centerPadding: '16px',
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1
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

  $('#products__slider1 .products__slides').on('setPosition', function(){
    equalHeight('#products__slider1');
    equalHeight('#products__slider2');
  });

  $(window).resize(function() {

    var currScreeWidth = $(window).width();

    if (currScreeWidth != screenWidthSlider) {

      equalHeight('#products__slider1');

      if ( !(currScreeWidth > secondMenuSlickPB && screenWidthSlider > secondMenuSlickPB || currScreeWidth <= secondMenuSlickPB && screenWidthSlider <= secondMenuSlickPB) ) {
        if (window.matchMedia('(max-width: ' + secondMenuSlickPB + 'px)').matches) {
          secondMenuSlider();
        } else {
          $('.header__second-menu .menu').slick('unslick');
        }
      }
    }
    screenWidthSlider = $(window).width();
  });



})(jQuery);
