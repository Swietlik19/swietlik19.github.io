(function($){

  /* Для проверки resize, т.к. на мобильном Хроме при скролле срабывает resize (без изменения ширины) */
  var screenWidth = $(window).width();

  /* Инициализация wow */
  wow = new WOW({mobile: false})
  wow.init();

  /* Нужно для IE и некоторых других браузеров, чтобы понимал svg спрайты во внешних файлах */
  svg4everybody();

  /* полифил для object-fit */
  objectFitImages($('[data-object-fit-cover],[data-object-fit-cover-left],[data-object-fit-contain]'), {watchMQ: true});

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

  /* Раскрытие меню в футере на мобильных устройствах */

  $('.footer__menu .footer__col--two .footer__title').click(function() {
    if (window.matchMedia('(max-width: 767px)').matches) {
      $(this).siblings('.menu').slideToggle();
      $(this).find('.arrow').toggleClass('active');
    }
  });


  // фиксированное меню и кнопка "вверх"
  $(window).on("scroll", function() {
    var fromTop = $(document).scrollTop();
    $(".header").toggleClass("fixed", (fromTop > 300));
    $(".to-top").toggleClass("fixed", (fromTop > 600));
  });

  $('img').on('dragstart', function (event) {
    event.preventDefault();
  });


  /* СЛАЙДЕРЫ */

  function equalHeightSwiper(sliderID) {
    $(sliderID).find('.swiper-slide').height('auto');
    var slickTrackHeight = Math.max($(sliderID).find('.swiper-slide').outerHeight());
    $(sliderID).find('.swiper-slide').css('height', slickTrackHeight + 'px');
  }

  var scr1Slider = new Swiper('#scr1__slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    watchSlidesProgress: true,
    loop: true,
    autoplay: {
      delay: 8000,
    },
    navigation: {
      nextEl: '#scr1__slider .swiper-button-next',
      prevEl: '#scr1__slider .swiper-button-prev',
    },
    pagination: {
      el: '#scr1__slider .swiper-pagination',
      type: 'fraction',
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    speed: 1500,
    on: {
      init: function () {
        $(window).on("load", function () {
          equalHeightSwiper('#scr1__slider');
        });
      },
    }
  });

  if (window.matchMedia('(max-width: 800px)').matches) {
    var categoriesSlider = new Swiper('#categories__slider', {
      slidesPerView: 1,
      spaceBetween: 10,
      watchSlidesProgress: true,
      loop: true,
      centeredSlides: true,
      navigation: {
        nextEl: '#categories__slider .swiper-button-next',
        prevEl: '#categories__slider .swiper-button-prev',
      },
      pagination: {
        el: '#categories__slider .swiper-dots',
        dynamicBullets: true,
      },
      breakpoints: {
        500: {
          slidesPerView: 2,
          centeredSlides: false,
        },
      },
    });
  }

  if (window.matchMedia('(max-width: 767px)').matches) {
    prodSlider = [];
    var xInd;
    var xId = '';
    $('.prod__slider').each(function(xi,xel) {
      xInd = xi + 1;
      xId = '#prod__slider-' + xInd;
      prodSlider[xi] = new Swiper(xId, {
        slidesPerView: 1,
        spaceBetween: 10,
        watchSlidesProgress: true,
        loop: true,
        navigation: {
          nextEl: xId + ' .swiper-button-next',
          prevEl: xId + ' .swiper-button-prev',
        },
        pagination: {
          el: xId + ' .swiper-dots',
          dynamicBullets: true,
        },
        breakpoints: {
          630: {
            slidesPerView: 3,
          },
          374: {
            slidesPerView: 2,
          },
        },
      });
    });
  }

  var reviewsSlider = new Swiper('#reviews__slider', {
    slidesPerView: 1,
    spaceBetween: 10,
    watchSlidesProgress: true,
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: '#reviews__slider .swiper-button-next',
      prevEl: '#reviews__slider .swiper-button-prev',
    },
    pagination: {
      el: '#reviews__slider .swiper-dots',
      dynamicBullets: true,
    },
  });

  $(window).resize(function() {

    var currScreeWidth = $(window).width();

    if (currScreeWidth != screenWidth) {
      equalHeightSwiper('#scr1__slider');
    }

    screenWidth = $(window).width();
  });

})(jQuery);
