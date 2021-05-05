(function($){

  /* Для проверки resize, т.к. на мобильном Хроме при скролле срабывает resize (без изменения ширины) */
  var screenWidth = $(window).width();

  /* Инициализация wow */
  wow = new WOW({mobile: false})
  wow.init();

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

  $('.scr1__menu-btn').click(function() {
    $(this).toggleClass('active');
    $('.scr1').toggleClass('active');
    $('.scr1__menu').toggleClass('active');
  });

  $('.burger').click(function() {
    $(this).toggleClass('active');
    $('.header').toggleClass('active');
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
    $(".header").toggleClass("fixed", (fromTop > 10));
    $(".scr1__menu").toggleClass("fixed", (fromTop > 10));
    $(".to-top").toggleClass("fixed", (fromTop > 600));
  });

  // Табы
  $('.prod .js-tabs-nav a').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().siblings().removeClass('current');
    $(this).parent().addClass('current');
    $(this).parents('.prod').find('.prod__tab').not(_href).hide();
    $(_href).fadeIn();
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('html, body').animate({scrollTop: $(_href).offset().top - 90 +'px'});
    }
  });

  $('.blog .js-tabs-nav a').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().siblings().removeClass('current');
    $(this).parent().addClass('current');
    $('.blog__tab').not(_href).hide();
    $(_href).fadeIn();
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('html, body').animate({scrollTop: $(_href).offset().top - 90 +'px'});
    }
  });

  $('.deliver .js-deliver__nav a').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().siblings().removeClass('current');
    $(this).parent().addClass('current');
    $('.deliver__tab').not(_href).hide();
    $(_href).fadeIn();
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('html, body').animate({scrollTop: $(_href).offset().top - 90 +'px'});
    }
  });

  $('.contacts__addresses a').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().siblings().removeClass('current');
    $(this).parent().addClass('current');
    $('.contacts__map').not(_href).hide();
    $(_href).fadeIn();
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('html, body').animate({scrollTop: $(_href).offset().top - 70 +'px'});
    }
  });

  $('img').on('dragstart', function (event) {
    event.preventDefault();
  });

  /* Замена input(type="number") */
  (function quantityProducts() {
    $(".quantity").each(function(xi,xel) {
      var $quantityArrowMinus = $(xel).find(".quantity-arrow-minus");
      var $quantityArrowPlus = $(xel).find(".quantity-arrow-plus");
      var $price = $(xel).siblings('.prod-item__price').find('span');
      var $priceText = + $price.text();
      var $quantityNum = $(xel).find(".quantity-num");

      $quantityArrowMinus.click(quantityMinus);
      $quantityArrowPlus.click(quantityPlus);
      $quantityNum.change(countPrice);

      function quantityMinus() {
        if ($quantityNum.val() >= 2) {
          $quantityNum.val(+$quantityNum.val() - 1);
          countPrice();
        }
      }

      function quantityPlus() {
        $quantityNum.val(+$quantityNum.val() + 1);
        countPrice();
      }

      function countPrice() {
        $price.text($priceText * $quantityNum.val());
      }
    });
  })();

  $('.header__item').hover(function() {
    $(this).find('.header__hidden').fadeIn();
  });
  $('.header__top, .page_wr, .sub-menu__wrap').hover(function() {
    $('.header__hidden').hide();
  });

  if (window.matchMedia('(max-width: 900px)').matches) {
    $('.dayprod__clock').appendTo('.dayprod .container');
    $('.footer__socials').appendTo('.footer__col:last-of-type');
  }
  $('.js-footer__title').click(function() {
    $(this).next('.footer__hidden').slideToggle();
  });

  if (window.matchMedia('(max-width: 900px)').matches) {

    $('.scr1__filter-wrap').prependTo('.scr1 > .container');
    $('.scr1__menu-wrap').prependTo('.page_wr');
    $('.scr1__menu .menu > li .menu-item__btn').click(function(e) {
      e.preventDefault();
      $('.scr1__menu .menu .sub-menu__wrap').hide();
      $(this).parents('li').find('.sub-menu__wrap').show();
    });

    $('.header__top, section:not(.scr1), .sub-menu__close').click(function() {
      $('.scr1__menu .menu .sub-menu__wrap').hide();
    });

  } else {

    $('.scr1__menu .menu > li').hover(function() {
      $('.scr1__menu .menu .sub-menu__wrap').hide();
      $(this).find('.sub-menu__wrap').show();
    });

    $('.header__top, section:not(.scr1)').hover(function() {
      $('.scr1__menu .menu .sub-menu__wrap').hide();
    });

    /* инициализация кастомного скроллбара */
    $(window).on("load",function(){
      $(".sub-menu__wrap").mCustomScrollbar({
        theme: "dark",
        scrollInertia: 1000,
      });
    });

  }

  $('.scr1__filter-btn').click(function() {
    $('.scr1__filter').slideToggle();
  });

  $('.categories__all').click(function() {
    $(this).siblings('ul').find('li').toggleClass('active');
  });

  /* СЛАЙДЕРЫ */

  var scr1Slider = new Swiper('#scr1__slider', {
    slidesPerView: 1,
    spaceBetween: 10,
    watchSlidesProgress: true,
    loop: true,
    watchOverflow: true,
    autoplay: {
      delay: 8000,
    },
    navigation: {
      nextEl: '.scr1__slider-btns .swiper-button-next',
      prevEl: '.scr1__slider-btns .swiper-button-prev',
    },
    pagination: {
      el: '.scr1__slider-btns .swiper-dots',
    },
    breakpoints: {
      575: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
    },
  });

  $('.prod__slider').each(function(xi,xel) {
    var xId = '#' + $(xel).attr('id');
    var xBtns = $(xel).parents('.prod__wrap').find('.prod__slider-btns');
    var xTabs = false;
    if ($(this).parents('.prod').find('.js-tabs-nav').length > 0) {
      var xTab = $(xel).parents('.prod__tab');
      var xTabNum = xTab.attr('id')[xTab.attr('id').length - 1];
      xTabs = true;
    }
    var prodSlider = new Swiper(xId, {
      slidesPerView: 2,
      slidesPerColumn: 2,
      slidesPerColumnFill: 'row',
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
      on: {
        init: function () {
          $(window).on("load", function () {
            if (xTabs) {
              if (xTabNum != 0) {
                xTab.hide();
              }
            }
          });
        },
      },
      breakpoints: {
        1400: {
          slidesPerView: 5,
          spaceBetween: 17,
          slidesPerColumn: 1,
        },
        1070: {
          slidesPerView: 4,
          spaceBetween: 12,
          slidesPerColumn: 1,
        },
        650: {
          slidesPerView: 3,
          spaceBetween: 10,
          slidesPerColumn: 1,
        },
        400: {
          spaceBetween: 13,
        },
      },
    });
  });

  var brandsSlider = new Swiper('#brands__slider', {
    slidesPerView: 2,
    spaceBetween: 14,
    watchSlidesProgress: true,
    watchOverflow: true,
    navigation: {
      nextEl: '.brands__slider-btns .swiper-button-next',
      prevEl: '.brands__slider-btns .swiper-button-prev',
    },
    pagination: {
      el: '.brands__slider-btns .swiper-dots',
    },
    breakpoints: {
      991: {
        slidesPerView: 5,
      },
      767: {
        slidesPerView: 4,
      },
      575: {
        slidesPerView: 3,
      },
    },
  });

  var instaSlider = new Swiper('#insta__slider', {
    slidesPerView: 2,
    spaceBetween: 10,
    watchSlidesProgress: true,
    watchOverflow: true,
    navigation: {
      nextEl: '.insta__slider-btns .swiper-button-next',
      prevEl: '.insta__slider-btns .swiper-button-prev',
    },
    breakpoints: {
      1170: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      700: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      575: {
        slidesPerView: 3,
      },
    },
  });

  var scr_vk__slider = new Swiper('#scr_vk__slider', {
    slidesPerView: 2,
    spaceBetween: 10,
    watchSlidesProgress: true,
    watchOverflow: true,
    navigation: {
      nextEl: '.scr_vk__slider-btns .swiper-button-next',
      prevEl: '.scr_vk__slider-btns .swiper-button-prev',
    },
    breakpoints: {
      1170: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  var contactsSlider = new Swiper('#contacts__slider', {
    slidesPerView: 2,
    spaceBetween: 8,
    watchSlidesProgress: true,
    watchOverflow: true,
    navigation: {
      nextEl: '.contacts__slider-btns .swiper-button-next',
      prevEl: '.contacts__slider-btns .swiper-button-prev',
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 54,
      },
      500: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  if (window.matchMedia('(max-width: 650px)').matches) {
    var scr1Feat = new Swiper('#scr1__feat', {
      slidesPerView: 1,
      spaceBetween: 13,
      watchSlidesProgress: true,
      watchOverflow: true,
      breakpoints: {
        500: {
          slidesPerView: 2,
        },
      },
    });
    $('.prod__nav .btn__wrap').each(function(xi,xel) {
      $(xel).appendTo($(xel).parents('.prod__cont').find('.prod__cont-btns'));
    });
  }

  var galleryThumbs = new Swiper('#scr1__card-thumbs', {
    slidesPerView: 2,
    spaceBetween: 8,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    centerInsufficientSlides: true,
    navigation: {
      nextEl: '.scr1__card-thumbs-btns .swiper-button-next',
      prevEl: '.scr1__card-thumbs-btns .swiper-button-prev',
    },
    pagination: {
      el: '.scr1__card-thumbs-btns .swiper-dots',
    },
    breakpoints: {
      991: {
        slidesPerView: 3,
        spaceBetween: 18,
      },
    },
  });

  var prodItemGallery = new Swiper('#scr1__card-gallery', {
    slidesPerView: 1,
    spaceBetween: 10,
    watchSlidesProgress: true,
    watchOverflow: true,
    thumbs: {
      swiper: galleryThumbs
    }
  });

  var certsSlider = new Swiper('#certs__slider', {
    slidesPerView: 2,
    spaceBetween: 8,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    centerInsufficientSlides: true,
    navigation: {
      nextEl: '.certs__slider-btns .swiper-button-next',
      prevEl: '.certs__slider-btns .swiper-button-prev',
    },
    breakpoints: {
      991: {
        slidesPerView: 4,
        spaceBetween: 35,
      },
      830: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      575: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      500: {
        slidesPerView: 3,
        spaceBetween: 8,
      },
    },
  });

  $(window).resize(function() {

    var currScreeWidth = $(window).width();

    if (currScreeWidth != screenWidth) {

    }

    screenWidth = $(window).width();
  });

})(jQuery);
