(function($){

  /* Для проверки resize, т.к. на мобильном Хроме при скролле срабывает resize (без изменения ширины) */
  var screenWidth = $(window).width();

  /* Инициализация wow */
  wow = new WOW({mobile: false})
  wow.init();

  /* Нужно для IE и некоторых других браузеров, чтобы понимал svg спрайты во внешних файлах */
  svg4everybody();

  /* полифил для object-fit */
  objectFitImages($('[data-object-fit-cover],[data-object-fit-contain]'), {watchMQ: true});

  /* инициализация fancybox */
  $(".fancybox").fancybox({
    padding: 0,
    scrolling: 'auto'
  });

  if (window.matchMedia('(max-width: 767px)').matches) {

    /* инициализация кастомного скроллбара */
    $(window).on("load",function(){
      $(".prod .tabs__nav-wrap").mCustomScrollbar({
        theme: "dark",
        scrollInertia: 10000,
        axis:"x",
      });
    });
  }

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
  $("[type=tel]").mask("+7 (999) 999-99-99");

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

  // фиксированные шапка
  $(window).on("scroll", function() {
    var fromTop = $(document).scrollTop();
    $(".header").toggleClass("fixed", (fromTop > 10));
    $(".to-top").toggleClass("fixed", (fromTop > 600));
  });

  // Табы
  $('.prod .js-tabs__nav a').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().siblings().removeClass('current');
    $(this).parent().addClass('current');
    $('.prod__tab').not(_href).hide();
    $(_href).fadeIn();
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('html, body').animate({scrollTop: $(_href).offset().top - 70 +'px'});
    }
  });

  $('img').on('dragstart', function (event) {
    event.preventDefault();
  });

  if (window.matchMedia('(max-width: 991px)').matches) {
    $('.footer__title').click(function() {
      $(this).toggleClass('active');
      $(this).siblings('.footer__hidden').fadeToggle();
      $('html, body').animate({scrollTop: $(this).offset().top - 20 +'px'});
    });
  }

  if (window.matchMedia('(max-width: 1170px)').matches) {
    $('.header__phones').appendTo('.header__top');
  }

  if (window.matchMedia('(max-width: 900px)').matches) {
    $('.header__catalog-btn').appendTo('.header__top');
    $('.header__links').appendTo('.header__top');
  }

  if (window.matchMedia('(max-width: 575px)').matches) {
    $('.header__search').appendTo('.header__df');
  }

  $('.catalog__show').click(function() {
    if ( $(this).hasClass('active') ) {
      $(this).text('Все подкатегории');
    } else {
      $(this).text('Скрыть');
    }
    $(this).toggleClass('active');
    $(this).siblings('.catalog__to-show').toggleClass('active');
  });

  /* СЛАЙДЕРЫ */

  var scr1Slider = new Swiper('#scr1__slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    watchSlidesProgress: true,
    loop: true,
    watchOverflow: true,
    navigation: {
      nextEl: '.scr1__slider-btns .swiper-button-next',
      prevEl: '.scr1__slider-btns .swiper-button-prev',
    },
    pagination: {
      el: '.scr1__slider-btns .swiper-dots',
    },
  });

  $('.prod__slider').each(function(xi,xel) {
    var xId = '#' + $(xel).attr('id');
    var xBtns = $(xel).parents('.prod__wrap').find('.prod__slider-btns');
    var xTab = $(this).parents('.prod__tab');
    var prodSlider = new Swiper(xId, {
      slidesPerView: 2,
      watchSlidesProgress: true,
      watchOverflow: true,
      spaceBetween: 5,
      navigation: {
        nextEl: xBtns.find('.swiper-button-next'),
        prevEl: xBtns.find('.swiper-button-prev'),
      },
      on: {
        init: function () {
          $(window).on("load", function () {
            if (xTab) {
              if (xTab.attr('id') != 'prod__tab-0') {
                xTab.hide();
              }
            }
          });
        },
      },
      breakpoints: {
        1400: {
          slidesPerView: 5,
          spaceBetween: 14,
        },
        991: {
          slidesPerView: 4,
          spaceBetween: 14,
        },
        650: {
          slidesPerView: 3,
          spaceBetween: 14,
        },
        460: {
          slidesPerView: 2,
          spaceBetween: 8,
        },
      },
    });
  });

  var blogSlider = new Swiper('#blog__slider', {
    slidesPerView: 2,
    spaceBetween: 7,
    watchSlidesProgress: true,
    watchOverflow: true,
    breakpoints: {
      575: {
        slidesPerView: 3,
        spaceBetween: 16,
        slidesPerColumn: 2,
        slidesPerColumnFill: 'row',
      },
      430: {
        slidesPerView: 2,
      },
    },
  });

  if (window.matchMedia('(max-width: 1170px)').matches) {
    var catalogSlider = new Swiper('#catalog__slider', {
      slidesPerView: 1,
      spaceBetween: 8,
      watchSlidesProgress: true,
      watchOverflow: true,
      breakpoints: {
        820: {
          slidesPerView: 3,
        },
        420: {
          slidesPerView: 2,
        },
      },
    });
  }

  $(window).resize(function() {

    var currScreeWidth = $(window).width();

    if (currScreeWidth != screenWidth) {

    }

    screenWidth = $(window).width();
  });

})(jQuery);
