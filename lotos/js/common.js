(function($){

  /* Для проверки resize, т.к. на мобильном Хроме при скролле срабывает resize (без изменения ширины) */
  var screenWidth = $(window).width();

  /* Инициализация wow */
  wow = new WOW();
  wow.init();

  /* Инициализация красивых select'ов */
  $('select').niceSelect();

  /* Нужно для IE и некоторых других браузеров, чтобы понимал svg спрайты во внешних файлах */
  svg4everybody();

  /* полифил для object-fit */
  objectFitImages($('[data-object-fit-cover],[data-object-fit-contain],[data-object-fit-contain-top]'), {watchMQ: true});

  /* инициализация fancybox */
  $(".fancybox").fancybox({
    padding: 0,
    scrolling: 'auto'
  });

  /* Плавный скролл к якорю для всех ссылок с классом "inner-link" */
  $(function(){
    $('.inner-link[href^="#"]').click(function(){
      var _href = $(this).attr('href');
      $('html, body').animate({scrollTop: $(_href).offset().top - 20 +'px'});
      return false;
    });
  });

  /* Плавный скролл "вверх" */
  $('a[href^="#page_wr"]').click(function(event){
    event.preventDefault;
    var _href = $(this).attr('href');
    $('html, body').animate({scrollTop: '0px'});
    return false;
  });

  $('#header__burger').click(function() {
    $(this).toggleClass('active');
    $('.header__menu').slideToggle();
  });

  /* Открытие / закрытие модалок (кроме карты) */
  $('a.open-modal').click(function(event){
    event.preventDefault();
    var _href = $(this).attr('href');
    if ( $(_href).length > 0 ) {
      $(_href).addClass('active');
      $(_href + ' .modal__content').addClass('visible');
    }
  });

  function closeModal() {
    var activeCount = $('.modal.active').length;
    if ( activeCount > 1 ) {
      $($('.modal.active')[activeCount - 1]).removeClass('active');
      $('.modal__callback2 .modal__content').removeClass('visible');
    } else {
      $('.modal').removeClass('active');
      $('.modal__content').removeClass('visible');
    }
  }

  $(document).mouseup(function (e) {
    var container = $(".modal .modal__content");
    if (container.has(e.target).length === 0){
      closeModal();
    }
  });

  $('.modal .close').click(function(){
    closeModal();
  });

  $(document).keydown(function(eventObject){
    if( eventObject.which == 27 ){
      closeModal();
    }
  });

  // маска поля tel
  $(".wpcf7-tel").mask("+7 (999) 999-99-99");

  // Секции по типу "Вопрос - ответ"
  function toggleHidden(xParent,hideOther) {
    $(xParent + ' .top').click(function() {
      $(this).find('.open').toggleClass('active');
      $(this).siblings().slideToggle();
      if (hideOther) {
        $(this).parent().siblings().find('.open').removeClass('active');
        $(this).parent().siblings().find('.hidden').slideUp();
      }
    });
  }

  toggleHidden('.faq',true);


  $('.navigation__menu .menu > li > a').hover(function() {
    if ( !(window.matchMedia('(max-width: 992px)').matches) ) {
      $(this).addClass('active');
      $(this).parent().siblings().find('.sub-menu').slideUp();
      $(this).parent().siblings().children('a').removeClass('active');
      $(this).siblings('.sub-menu').slideDown();
    }
  });

  $('.header__menu .menu .arrow').click(function(el) {
    el.preventDefault();
    $(this).toggleClass('active');
    $(this).siblings('.sub-menu').slideToggle();
    $(this).parent().siblings().find('.arrow').removeClass('active');
    $(this).parent().siblings().find('.sub-menu').slideUp();
  });

  $('.page_wr').hover(function() {
    $('.navigation__menu .menu > li > a').removeClass('active');
    $('.navigation__menu .sub-menu').slideUp();
  });

  // фиксированное меню
  $(window).on("scroll", function() {
    var fromTop = $(document).scrollTop();
    if ( window.matchMedia('(max-width: 1070px)').matches ) {
      $(".header").toggleClass("fixed", (fromTop > 300));
      $('.page_df').toggleClass('margined', (fromTop > 300));
    }
    $(".to-top").toggleClass("fixed", (fromTop > 600));
  });

  $('img').on('dragstart', function (event) {
    event.preventDefault();
  });


  /* СЛАЙДЕРЫ */

  var prodSlider = [];

  function prodSliders() {
    if ( window.matchMedia('(max-width: 830px)').matches ) {
      if ( $('.prod__slider.swiper-container-initialized').length == 0 ) {
        prodSlider = [];
        var xInd;
        var xId = '';
        $('.prod__slider').each(function(xi,xel) {
          xInd = xi + 1;
          xId = '#prod__slider-' + xInd;
          prodSlider[xi] = new Swiper(xId, {
            spaceBetween: 14,
            slidesPerView: 1,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            loop: true,
            centeredSlides: true,
            breakpoints: {
              630: {
                slidesPerView: 3,
                centeredSlides: false,
              },
              400: {
                slidesPerView: 2,
                centeredSlides: false,
              },
            }
          });

        });
      }
    } else {
      if ( $('.prod__slider.swiper-container-initialized').length > 0 ) {
        for (var i = 0; i< prodSlider.length; i++) {
          prodSlider[i].destroy();
        }
        prodSlider = [];
      }
    }

  }

  prodSliders();

  var scr1Slider = new Swiper('#scr1__slider', {
    slidesPerView: 1,
    watchSlidesProgress: true,
    loop: true,
    navigation: {
      nextEl: '.scr1__slider .swiper-button-next',
      prevEl: '.scr1__slider .swiper-button-prev',
    },
    pagination: {
      el: '.scr1__slider .slider__dots',
    },
    effect: 'coverflow',
    speed: 1000,
  });

  var reviewsSlider = new Swiper('#reviews__slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    watchSlidesProgress: true,
    centeredSlides: true,
    loop: true,
    slideToClickedSlide: true,
    navigation: {
      nextEl: '.reviews__slider .swiper-button-next',
      prevEl: '.reviews__slider .swiper-button-prev',
    },
    pagination: {
      el: '.reviews__slider .slider__dots',
    },
    breakpoints: {
      1300: {
        slidesPerView: 3,
        spaceBetween: 76,
      },
      400: {
        slidesPerView: 3,
      },
    },
    on: {
      init: function () {
        $(window).on("load", function () {
          equalHeightSwiper2('#reviews__slider');
        });
      },
    }
  });

  var cardThumbs = new Swiper('#card__thumbs', {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 2,
    loop: true,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
      991: {
        slidesPerView: 3,
        spaceBetween: 23,
      },
      850: {
        slidesPerView: 2,
      },
      400: {
        slidesPerView: 3,
      },
    },
  });

  var cardSlider = new Swiper('#card__slider', {
    spaceBetween: 15,
    slidesPerView: 1,
    watchSlidesProgress: true,
    centeredSlides: true,
    loop: true,
    slideToClickedSlide: true,
    thumbs: {
      swiper: cardThumbs,
    },
  });

  function equalHeightSwiper(sliderID) {
    $(sliderID).find('.swiper-slide').height('auto');
    var slickTrack = $(sliderID).find('.swiper-wrapper');
    var slickTrackHeight = $(slickTrack).outerHeight();
    $(sliderID).find('.swiper-slide').css('height', slickTrackHeight + 'px');
  }

  function equalHeightSwiper2(sliderID) {
    // $(sliderID).find('.swiper-slide').height('auto');
    var slickTrack = $(sliderID).find('.swiper-slide-active');
    var slickTrackHeight = $(slickTrack).outerHeight();
    $(sliderID).find('.swiper-slide').css('height', slickTrackHeight + 'px');
  }

  equalHeightSwiper('#scr1__slider');
  equalHeightSwiper('#card__slider');


  $(window).resize(function() {

    var currScreeWidth = $(window).width();

    if (currScreeWidth != screenWidth) {
      equalHeightSwiper('#scr1__slider');
      equalHeightSwiper('#card__slider');
      equalHeightSwiper2('#reviews__slider');
      prodSliders();
    }

    screenWidth = $(window).width();
  });

})(jQuery);
