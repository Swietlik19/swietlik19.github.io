(function($){

  /* Для проверки resize, т.к. на мобильном Хроме при скролле срабывает resize (без изменения ширины) */
  var screenWidth = $(window).width();

  /* Инициализация wow */
  wow = new WOW({mobile: false})
  wow.init();

  /* Нужно для IE и некоторых других браузеров, чтобы понимал svg спрайты во внешних файлах */
  svg4everybody();

  /* полифил для object-fit */
  objectFitImages($('[data-object-fit-cover],[data-object-fit-cover-top],[data-object-fit-contain]'), {watchMQ: true});

  /* Инициализация красивых select'ов */
  $('select').niceSelect();

  /* инициализация fancybox */
  $(".fancybox").fancybox({
    padding: 0,
    scrolling: 'auto'
  });

  /* инициализация кастомного скроллбара */
  $(window).on("load",function(){
    $(".faq__list").mCustomScrollbar({
      theme: "minimal-dark",
      scrollInertia: 4000,
    });
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

  $('.burger').click(function() {
    $(this).toggleClass('active');
    $('.header__menu').toggleClass('active');
    if ( !(window.matchMedia('(max-width: 1020px)').matches) ) {
      $('.header__add').toggle();
      $('body').toggleClass('disabled');
    }
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

  $('.faq--jobs .faq__list > li:first-of-type .open').addClass('active');
  $('.faq--jobs .faq__list > li:first-of-type .hidden').show();

  // фиксированные шапка
  $(window).on("scroll", function() {
    var fromTop = $(document).scrollTop();
    if (fromTop > 10) {
      $(".header").addClass("fixed");
      if ( !(window.matchMedia('(max-width: 1020px)').matches) ) {
        $(".header__bottom").hide();
        $('.header .burger').appendTo('.header__top');
      }
    } else {
      $(".header").removeClass("fixed");
      if ( !(window.matchMedia('(max-width: 1020px)').matches) ) {
        $(".header__bottom").show();
        $('.header .burger').appendTo('.header__menu');
      }
    }

    $(".to-top").toggleClass("fixed", (fromTop > 600));
  });

  if ( window.matchMedia('(max-width: 1020px)').matches ) {
    $('.header__add-col').appendTo('.header__menu');
  }

  // Табы
  $('.techs .tabs__nav a').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().siblings().removeClass('current');
    $(this).parent().addClass('current');
    $('.techs__tab').not(_href).hide();
    $(_href).fadeIn();
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('html, body').animate({scrollTop: $(_href).offset().top - 70 +'px'});
    }
  });
  $('.catalog2 .js-window__nav a').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().siblings().removeClass('current');
    $(this).parent().addClass('current');
    $('.catalog2__tab').not(_href).hide();
    $(_href).fadeIn();
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('html, body').animate({scrollTop: $(_href).offset().top - 70 +'px'});
    }
  });
  $('.prod-item__nav a').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().siblings().removeClass('current');
    $(this).parent().addClass('current');
    $('.prod-item__tab').not(_href).hide();
    $(_href).fadeIn();
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('html, body').animate({scrollTop: $(_href).offset().top - 70 +'px'});
    }
  });
  $('.techs__item').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    var _num = _href.replace('#techs__content-tab-','');
    var _imgId = '#techs__img-' + _num;
    var _mainTab = $(this).parents('.techs__tab');
    _mainTab.find('.techs__content-tab').not(_href).hide();
    _mainTab.find('.techs__img').not(_imgId).hide();
    $(_href).fadeIn();
    $(_imgId).fadeIn();
  });
  $('.techs__tab:not(#techs__tab-0)').hide();
  $('.window .window__nav a').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    $(this).parents('li').siblings().find('.btn__wrap').removeClass('btn__wrap--orange');
    $(this).parent().addClass('btn__wrap--orange');
    $('.window__tab').not(_href).hide();
    $(_href).fadeIn();
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('html, body').animate({scrollTop: $(_href).offset().top - 70 +'px'});
    }
  });

  $('.examples__thumbs a').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().siblings().find('a').removeClass('current');
    $(this).addClass('current');
    $('.examples__slider-tab').not(_href).hide();
    $(_href).fadeIn();
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('html, body').animate({scrollTop: $(_href).offset().top - 70 +'px'});
    }
  });

  $('img').on('dragstart', function (event) {
    event.preventDefault();
  });

  $(".calculator__range").each(function() {
    var xMin = $(this).attr('min');
    var xMax = $(this).attr('max');
    var xFrom = $(this).attr('value');
    $(this).ionRangeSlider({
      min: xMin,
      max: xMax,
      from: xFrom,
      step: 1,
      hide_min_max: true,
    });
  });

  $('.your-file input').change(function() {
    var fileName = $(this).val();
    fileName = fileName.replace (/\\/g, '/').split ('/').pop ();
    $(this).parents('label').find('span').text(fileName);
  });

  $('.window__show').click(function() {
    $('.window__left').toggleClass('active');
    $('.window__catalog').toggleClass('active');
  });

  // "Читать всё" в politics
  $('.politics__show').click(function() {
    $(this).parent().siblings('.politics__content').toggleClass('opened');
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $(this).find('span').text('Скрыть');
    } else {
      $(this).find('span').text('Читать все');
    }
  });

  function hideMore() {
    $('.politics__content').each(function(xi,xel) {
      if ($(xel).innerHeight() + 5 <= $(xel).css('max-height').replace('px','')) {
        $(xel).parents('.politics__wrap').find('.politics__show').hide();
      }
    })
  }
  hideMore();

  if (window.matchMedia('(max-width: 767px)').matches) {
    var _cont = $('.foundament__count').parents('.window__catalog');
    $('.foundament__count').appendTo(_cont);
  }

  /* СЛАЙДЕРЫ */

  var reviewsVideos = new Swiper('#reviews__videos', {
    slidesPerView: 2,
    spaceBetween: 8,
    watchSlidesProgress: true,
    watchOverflow: true,
    navigation: {
      nextEl: '.reviews__videos-btns .swiper-button-next',
      prevEl: '.reviews__videos-btns .swiper-button-prev',
    },
    pagination: {
      el: '.reviews__videos-btns .swiper-dots',
    },
    breakpoints: {
      767: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  });

  $('.prod-item .reviews__videos').each(function(xi,xel) {
    var xId = '#' + $(xel).attr('id');
    var xBtns = $(xel).parents('.reviews__wrap').find('.reviews__videos-btns');
    var reviewsVideos2 = new Swiper(xId, {
      slidesPerView: 1,
      watchSlidesProgress: true,
      watchOverflow: true,
      spaceBetween: 8,
      navigation: {
        nextEl: xBtns.find('.swiper-button-next'),
        prevEl: xBtns.find('.swiper-button-prev'),
      },
      pagination: {
        el: xBtns.find('.swiper-dots'),
      },
      breakpoints: {
        991: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        450: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
    });
  });

  var catalogSlider = new Swiper('#catalog__slider', {
    slidesPerView: 2,
    spaceBetween: 5,
    slidesPerColumn: 3,
    slidesPerColumnFill: 'row',
    watchSlidesProgress: true,
    watchOverflow: true,
    breakpoints: {
      1070: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        slidesPerColumnFill: 'row',
        spaceBetween: 28,
      },
      767: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        slidesPerColumnFill: 'row',
        spaceBetween: 15,
      },
    },
  });

  var certsSlider = new Swiper('#certs__slider', {
    slidesPerView: 2,
    spaceBetween: 8,
    watchSlidesProgress: true,
    watchOverflow: true,
    navigation: {
      nextEl: '.certs__slider-btns .swiper-button-next',
      prevEl: '.certs__slider-btns .swiper-button-prev',
    },
    pagination: {
      el: '.certs__slider-btns .swiper-dots',
    },
    breakpoints: {
      767: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      380: {
        slidesPerView: 3,
        spaceBetween: 8,
      },
    },
  });

  var certsSlider2 = new Swiper('#certs__slider-about', {
    slidesPerView: 2,
    spaceBetween: 8,
    watchSlidesProgress: true,
    watchOverflow: true,
    navigation: {
      nextEl: '.certs__slider-btns .swiper-button-next',
      prevEl: '.certs__slider-btns .swiper-button-prev',
    },
    pagination: {
      el: '.certs__slider-btns .swiper-dots',
    },
    breakpoints: {
      1070: {
        slidesPerView: 4,
        spaceBetween: 36,
      },
      767: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      575: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  });

  var productionSlider = new Swiper('#production__gallery-slider', {
    slidesPerView: 2,
    spaceBetween: 7,
    watchSlidesProgress: true,
    watchOverflow: true,
    navigation: {
      nextEl: '.production__gallery-btns .swiper-button-next',
      prevEl: '.production__gallery-btns .swiper-button-prev',
    },
    pagination: {
      el: '.production__gallery-btns .swiper-dots',
    },
    breakpoints: {
      500: {
        slidesPerView: 2,
        spaceBetween: 20,
        direction: 'vertical',
      },
    },
  });

  $('.reviews__text').each(function(xi,xel) {
    var xId = '#' + $(xel).attr('id');
    var xBtns = $(xel).parents('.reviews__text-wrap').find('.reviews__text-btns');
    var xTabs = false;
    var prodSlider = new Swiper(xId, {
      slidesPerView: 1,
      watchSlidesProgress: true,
      watchOverflow: true,
      spaceBetween: 30,
      navigation: {
        nextEl: xBtns.find('.swiper-button-next'),
        prevEl: xBtns.find('.swiper-button-prev'),
      },
      pagination: {
        el: xBtns.find('.swiper-dots'),
      },
    });
  });

  var galleryThumbs = new Swiper('#prod-item__thumbs', {
    slidesPerView: 2,
    spaceBetween: 8,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    centerInsufficientSlides: true,
    navigation: {
      nextEl: '.prod-item__thumbs-btns .swiper-button-next',
      prevEl: '.prod-item__thumbs-btns .swiper-button-prev',
    },
    pagination: {
      el: '.prod-item__imgs-btns .swiper-dots',
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 28,
      },
      450: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  });

  var prodItemGallery = new Swiper('#prod-item__imgs', {
    slidesPerView: 1,
    spaceBetween: 30,
    watchSlidesProgress: true,
    watchOverflow: true,
    thumbs: {
      swiper: galleryThumbs
    }
  });

  var examplesThumbs = new Swiper('#examples__thumbs', {
    slidesPerView: 2,
    spaceBetween: 4,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    centerInsufficientSlides: true,
    breakpoints: {
      850: {
        slidesPerView: 4,
        spaceBetween: 12,
      },
      650: {
        slidesPerView: 4,
        spaceBetween: 8,
      },
      575: {
        slidesPerView: 3,
        spaceBetween: 8,
      },
    },
  });

  // var examplesSlider = new Swiper('#examples__slider', {
  //   slidesPerView: 1,
  //   spaceBetween: 30,
  //   watchSlidesProgress: true,
  //   watchOverflow: true,
  //   navigation: {
  //     nextEl: '.examples__slider-btns .swiper-button-next',
  //     prevEl: '.examples__slider-btns .swiper-button-prev',
  //   },
  //   pagination: {
  //     el: '.examples__slider-btns .swiper-dots',
  //   },
  // });

  $('.examples__slider').each(function(xi,xel) {
    var _this = $(xel);
    var xBtns = _this.parents('.examples__slider-wrap').find('.examples__slider-btns');
    var examplesSider = new Swiper(_this, {
      slidesPerView: 1,
      watchSlidesProgress: true,
      watchOverflow: true,
      spaceBetween: 30,
      navigation: {
        nextEl: xBtns.find('.swiper-button-next'),
        prevEl: xBtns.find('.swiper-button-prev'),
      },
      pagination: {
        el: xBtns.find('.swiper-dots'),
      },
    });
  });

  $('.examples__slider-tab:not(:first-of-type)').hide();

  function moveBurger() {
    if (window.matchMedia('(max-width: 1020px)').matches) {
      $('.header .burger').appendTo('.header__top');
    } else {
      $('.header .burger').appendTo('.header__menu');
    }
  }

  moveBurger();

  $(window).resize(function() {

    var currScreeWidth = $(window).width();

    if (currScreeWidth != screenWidth) {
      moveBurger();
    }

    screenWidth = $(window).width();
  });

})(jQuery);
