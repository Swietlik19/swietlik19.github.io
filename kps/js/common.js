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

  /* Инициализация красивых select'ов */
  $('select').niceSelect();

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
      $(".prod-item__nav-wrap").mCustomScrollbar({
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

  $('.header__catalog-btn').click(function() {
    $(this).find('.burger').toggleClass('active');
    $('.header__catalog').toggleClass('active');
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

  $('.prod-item .js-tabs__nav a').click(function(event) {
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

  $('.js-portfolio-nav a').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().siblings().removeClass('current');
    $(this).parent().addClass('current');
    $('.portfolio__tab').not(_href).hide();
    $(_href).fadeIn();
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('html, body').animate({scrollTop: $(_href).offset().top - 70 +'px'});
    }
  });

  $('.js-exchange-nav a').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().siblings().removeClass('current');
    $(this).parent().addClass('current');
    $('.exchange__tab').not(_href).hide();
    $(_href).fadeIn();
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('html, body').animate({scrollTop: $(_href).offset().top - 70 +'px'});
    }
  });

  $('.js_calc__nav a').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().parent().siblings().removeClass('current');
    $(this).parent().parent().addClass('current');
    $('.scr_calc__tab').not(_href).hide();
    $(_href).fadeIn();
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('html, body').animate({scrollTop: $(_href).offset().top - 70 +'px'});
    }
  });

  $('.js_calc__nav2 a').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().parent().siblings().removeClass('current');
    $(this).parent().parent().addClass('current')
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
  } else {
    $('.header__catalog-btn').hover(function() {
      $('.header__catalog').show();
    });
    $('.header__top,.page_wr').hover(function(){
      $('.header__catalog').hide();
    });
  }

  if (window.matchMedia('(max-width: 670px)').matches) {
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

  $('.prod-item__color').click(function() {
    $(this).parent().siblings().find('.prod-item__color').removeClass('active');
    $(this).addClass('active');
  });

  $('.prod-item__text-btn').click(function() {
    $(this).parent().siblings().find('.prod-item__text-btn').removeClass('active');
    $(this).addClass('active');
  });

  $('.prod-item__main-delete').click(function() {
    $(this).parents('.prod-item__main-fields').remove();
  });

  var xIdCount = 1;

  $('.prod-item__main-add').click(function(){
    $('.prod-item__main-fields:last-of-type').clone().appendTo('.prod-item__main-rows');
    $('.prod-item__main-fields:last-of-type').find('.prod-item__main-input input').each(function(xi,xel) {
      $(xel).attr('id',$(xel).attr('name') + '-' + xIdCount).val('');
    });

    xIdCount++;

    $('.prod-item__main-fields:last-of-type').find('.prod-item__main-delete').click(function() {
      $(this).parents('.prod-item__main-fields').remove();
    });
  });

  $('.show-more').click(function() {
    $('.page-df').toggleClass('active');
    if ( $('.page-df').hasClass('active') ) {
      $('.show-more').text('Скрыть');
    } else {
      $('.show-more').text('Показать меню');
    }
  });

  $('.header__item--customers').hover(function(){
    $(this).find('.hidden').show();
  });
  $('.page_wr').hover(function(){
    $('.header__item--customers .hidden').hide();
  });

  function calcDeliverSum() {
    var _place = $('.your-place select option:selected').val();
    var _weight = $('.your-weight select option:selected').val();
    var _sum = $('.form__sum span').text((_place * _weight).toLocaleString('ru'));
  }

  calcDeliverSum();

  $('.modal__pay select').change(function() {
    calcDeliverSum();
  });

  $('.scr_calc__row input').focus(function() {
    var _img = $(this).parents('.scr_calc__info').siblings().find('img');
    var _src = $(this).data('img-url');

    $(this).parent().addClass('scr_calc__row--active');
    $(this).parent().addClass('scr_calc__row--focused');
    $(this).parent().siblings().removeClass('scr_calc__row--active');
    $(this).parent().siblings().removeClass('scr_calc__row--focused');

    _img.attr('src',_src);
  });
  $('.scr_calc__row input').blur(function() {
    if ($(this).val()) {
      $(this).parent().addClass('scr_calc__row--filled');
    } else {
      $(this).parent().removeClass('scr_calc__row--filled');
    }
    $(this).parent().removeClass('scr_calc__row--focused');
  });

  /* СЛАЙДЕРЫ */

  var scr1Slider = new Swiper('#scr1__slider', {
    slidesPerView: 1,
    spaceBetween: 5,
    watchSlidesProgress: true,
    loop: true,
    watchOverflow: true,
    autoHeight: true,
    navigation: {
      nextEl: '.scr1__slider-btns .swiper-button-next',
      prevEl: '.scr1__slider-btns .swiper-button-prev',
    },
    pagination: {
      el: '.scr1__slider-btns .swiper-dots',
    },
    breakpoints: {
      500: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
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
    spaceBetween: 5,
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

  var dealersBrandsSslider = new Swiper('#dealers__brands-slider', {
    slidesPerView: 2,
    spaceBetween: 5,
    watchSlidesProgress: true,
    watchOverflow: true,
    navigation: {
      nextEl: '.dealers__brands-btns .swiper-button-next',
      prevEl: '.dealers__brands-btns .swiper-button-prev',
    },
    pagination: {
      el: '.dealers__brands-btns .swiper-dots',
    },
    breakpoints: {
      1200: {
        slidesPerView: 6,
        spaceBetween: 22,
      },
      767: {
        slidesPerView: 5,
        spaceBetween: 15,
      },
      575: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      450: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  });

  if (window.matchMedia('(max-width: 1170px)').matches) {
    var catalogSlider = new Swiper('#catalog__slider', {
      slidesPerView: 1,
      spaceBetween: 5,
      watchSlidesProgress: true,
      watchOverflow: true,
      breakpoints: {
        820: {
          slidesPerView: 3,
          spaceBetween: 8,
        },
        420: {
          slidesPerView: 2,
        },
      },
    });
  }

  var galleryThumbs = new Swiper('#prod-item__thumbs', {
    slidesPerView: 2,
    spaceBetween: 8,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.prod-item__thumbs-btns .swiper-button-next',
      prevEl: '.prod-item__thumbs-btns .swiper-button-prev',
    },
    pagination: {
      el: '.prod-item__thumbs-btns .swiper-dots',
    },
    breakpoints: {
      400: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
    },
  });

  var aboutGallery = new Swiper('#about__gallery', {
    slidesPerView: 2,
    spaceBetween: 8,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.about__gallery-btns .swiper-button-next',
      prevEl: '.about__gallery-btns .swiper-button-prev',
    },
    breakpoints: {
      1070: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      400: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  });

  var prodItemGallery = new Swiper('#prod-item__imgs', {
    slidesPerView: 1,
    spaceBetween: 10,
    watchSlidesProgress: true,
    watchOverflow: true,
    navigation: {
      nextEl: '.prod-item__imgs-btns .swiper-button-next',
      prevEl: '.prod-item__imgs-btns .swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });

  $(window).resize(function() {

    var currScreeWidth = $(window).width();

    if (currScreeWidth != screenWidth) {

    }

    screenWidth = $(window).width();
  });

})(jQuery);
