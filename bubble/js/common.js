(function($){

  /* Для проверки resize, т.к. на мобильном Хроме при скролле срабывает resize (без изменения ширины) */
  var screenWidth = $(window).width();
  var firstTime = true;

  /* Инициализация wow */
  wow = new WOW({mobile: false})
  wow.init();

  /* Нужно для IE и некоторых других браузеров, чтобы понимал svg спрайты во внешних файлах */
  svg4everybody();

  /* полифил для object-fit */
  objectFitImages($('[data-object-fit-cover],[data-object-fit-cover-bottom],[data-object-fit-contain]'), {watchMQ: true});

  /* инициализация fancybox */
  $(".fancybox").fancybox({
    padding: 0,
    scrolling: 'auto'
  });

  /* инициализация drawsvg */
  var mySVG = $('.scr2__item-tail svg').drawsvg({
    stagger: 100,
    callback: function () {
      $('.scr2__item-tail:not(.scr2__item-tail--reverse) svg g').css('fill','#fe9f99');
    }
  });

  // Убираем прелоадер
  $(window).on("load", function () {
    $('.page_preloader').delay(1000).fadeOut('slow');
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
    $('.header__top .header__df').toggleClass('active');
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

  // фиксированные шапка
  $(window).on("scroll", function() {
    var fromTop = $(document).scrollTop();
    if ( $('.scr2').length >= 1 ) {
      var scr2Top = $('.scr2').offset().top;
    }
    $(".header").toggleClass("fixed", (fromTop > 10));
    $(".to-top").toggleClass("fixed", (fromTop > 600));

    if (fromTop > scr2Top - 600 && firstTime) {
      mySVG.drawsvg('animate');
      firstTime = false;
    }
  });

  // Табы
  // $('.prod-item__nav a').click(function(event) {
  //   event.preventDefault();
  //   var _href = $(this).attr('href');
  //   $(this).parent().siblings().removeClass('current');
  //   $(this).parent().addClass('current');
  //   $('.services__tab').not(_href).hide();
  //   $(_href).fadeIn();
  //   if (window.matchMedia('(max-width: 767px)').matches) {
  //     $('html, body').animate({scrollTop: $(_href).offset().top - 70 +'px'});
  //   }
  // });

  $('img').on('dragstart', function (event) {
    event.preventDefault();
  });

  $('.btn__wrap--blue').each(function(xi, xel) {
    var xHtml = '<div class="btn__bubbles">';
    for (i = 0; i < 10; i++) {
      xHtml += '<span></span>';
    }
    xHtml += '</div>';
    $(xel).append(xHtml);
  });

  $('.insta').each(function(xi, xel) {
    var xHtml = '<div class="insta__bubbles">';
    for (i = 0; i < 11; i++) {
      xHtml += '<span></span>';
    }
    xHtml += '</div>';
    $(xel).append(xHtml);
  });

  $('.scr1__feat-item').each(function(xi, xel) {
    var xHtml = '<div class="scr1__feat-bubbles">';
    for (i = 0; i < 6; i++) {
      xHtml += '<span></span>';
    }
    xHtml += '</div>';
    $(xel).append(xHtml);
  });

  $('.categories__item').each(function(xi, xel) {
    var xHtml = '<div class="categories__bubbles">';
    for (i = 0; i < 5; i++) {
      xHtml += '<span></span>';
    }
    xHtml += '</div>';
    $(xel).append(xHtml);
  });

  function relocateMenu() {
    if (window.matchMedia('(max-width: 991px)').matches) {
      $('.header__menu-wrap').appendTo($('.header__top > .container > .header__df'));
      $('.header__search').appendTo($('.header__bottom'));
    } else {
      $('.header__menu-wrap').appendTo($('.header__menu > .container'));
    }
  }

  relocateMenu();

  if (window.matchMedia('(max-width: 991px)').matches) {
    $('.footer__title').click(function(e) {
      e.preventDefault();
      $(this).toggleClass('active');
      $(this).parents('.footer__col').find('.menu').toggle();
      $(this).parents('.footer__col').siblings('.footer__col').find('.menu').hide();
      $(this).parents('.footer__col').siblings('.footer__col').find('.footer__title').removeClass('active');
    });
  } else {
    $('.header__middle, .header__top, .page_wr').hover(function() {
      $('.sub-menu__wrap').hide();
    });
  }

  if (window.matchMedia('(max-width: 991px)').matches) {
    $('.header__menu-wrap .menu-item-has-children > a .arrow').click(function(e) {
      e.preventDefault();
      $(this).parents('.menu-item').siblings('.menu-item').find('.arrow').removeClass('active');
      $(this).parents('.menu-item').siblings('.menu-item').find('.sub-menu__wrap').hide();

      $(this).toggleClass('active');
      $(this).parent().siblings('.sub-menu__wrap').toggle();
    });
  } else {
    $('.header__menu .menu-item-has-children > a').hover(function() {
      $('.sub-menu__wrap').hide();
      $(this).siblings('.sub-menu__wrap').show();
    });
  }

  $('.header__bottom-btn--search').click(function(e) {
    e.preventDefault();
    $('.header__bottom .header__search').toggle();
  });

  /* СЛАЙДЕРЫ */

  var scr1Slider = new Swiper('#scr1__slider', {
    slidesPerView: 1,
    spaceBetween: 9,
    watchSlidesProgress: true,
    loop: true,
    watchOverflow: true,
    autoplay: {
      delay: 15000,
    },
    pagination: {
      el: '.scr1__slider-btns .swiper-dots',
    },
    navigation: {
      nextEl: '.scr1__slider-btns .swiper-button-next',
      prevEl: '.scr1__slider-btns .swiper-button-prev',
    },
    breakpoints: {
      900: {
        spaceBetween: 20,
      },
    },
  });

  var brandsSlider = new Swiper('#brands__slider', {
    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerColumn: 2,
    slidesPerColumnFill: 'row',
    loop: false,
    watchSlidesProgress: true,
    watchOverflow: true,
    autoplay: {
      delay: 8000,
    },
    pagination: {
      el: '.brands__slider-btns .swiper-dots',
    },
    navigation: {
      nextEl: '.brands__slider-btns .swiper-button-next',
      prevEl: '.brands__slider-btns .swiper-button-prev',
    },
    breakpoints: {
      1170: {
        slidesPerView: 7,
        spaceBetween: 20,
      },
      1070: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
      575: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      450: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    on: {
      init: function () {
        $(window).on("load", function () {
          if (window.matchMedia('(max-width: 767px)').matches) {
           $('.brands__header').append($('.brands__slider-btns'));
          }
        });
      },
    },
  });

  $('.prod__slider').each(function(xi,xel) {
    var xId = '#' + $(xel).attr('id');
    var xBtns = $(xel).siblings('.prod__slider-btns');
    var scr1__slider = new Swiper(xId, {
      slidesPerView: 2,
      slidesPerColumn: 2,
      slidesPerColumnFill: 'row',
      watchSlidesProgress: true,
      watchOverflow: true,
      spaceBetween: 8,
      autoplay: {
        delay: 8000,
      },
      navigation: {
        nextEl: xBtns.find('.swiper-button-next'),
        prevEl: xBtns.find('.swiper-button-prev'),
      },
      breakpoints: {
        1400: {
          slidesPerView: 5,
          spaceBetween: 32,
          slidesPerColumn: 1,
        },
        1070: {
          slidesPerView: 4,
          spaceBetween: 32,
          slidesPerColumn: 1,
        },
        767: {
          slidesPerView: 3,
          spaceBetween: 20,
          slidesPerColumn: 1,
        },
        400: {
          slidesPerView: 2,
          slidesPerColumn: 4,
          spaceBetween: 12,
        },
      },
      on: {
        init: function () {
          $(window).on("load", function () {
            if (window.matchMedia('(max-width: 767px)').matches) {
              $(xId).parents('.prod').find('.prod__header').append(xBtns);
            }
          });
        },
      },
    });
  });

  var galleryThumbs = new Swiper('#prod-item__thumbs', {
    spaceBetween: 22,
    slidesPerView: 2,
    freeMode: true,
    direction: 'vertical',
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.prod-item__thumbs-wrap .swiper-button-next',
      prevEl: '.prod-item__thumbs-wrap .swiper-button-prev',
    },
  });

  var prodItemGallery = new Swiper('#prod-item__gallery', {
    slidesPerView: 1,
    spaceBetween: 10,
    watchSlidesProgress: true,
    loop: true,
    watchOverflow: true,
    autoplay: {
      delay: 8000,
    },
    // pagination: {
    //   el: '.scr1__slider-btns .swiper-dots',
    // },
    thumbs: {
      swiper: galleryThumbs
    }
  });


  $(window).resize(function() {

    var currScreeWidth = $(window).width();

    if (currScreeWidth != screenWidth) {
      relocateMenu();
    }

    screenWidth = $(window).width();
  });

})(jQuery);
