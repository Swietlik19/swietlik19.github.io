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

  /* Инициализация красивых select'ов */
  $('select').niceSelect();

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
    $('.burger').toggleClass('active');
    $('.header__menu').toggleClass('active');
  });

  $('.scr1__btn--search').click(function() {
    $('.scr1__search').fadeToggle();
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

  toggleHidden('.faq__list',true);
  $('.jobs__col:first-of-type .faq__item:first-of-type .open').addClass('active');
  $('.jobs__col:first-of-type .faq__item:first-of-type .hidden').show();

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

  // фиксированные шапка
  $(window).on("scroll", function() {
    var fromTop = $(document).scrollTop();
    $(".header").toggleClass("fixed", (fromTop > 10));
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
      $('html, body').animate({scrollTop: $(_href).offset().top - 70 +'px'});
    }
  });

  $('.prod-item .js-tabs-nav a').click(function(event) {
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

  $('.js-delivery__nav a').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().siblings().removeClass('current');
    $(this).parent().addClass('current');
    $('.delivery__tab').not(_href).hide();
    $(_href).fadeIn();
     $('.delivery__nav').removeClass('active');
    $('.delivery__tabs').removeClass('active');
  });

  $('.partners .js-tabs-nav a').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().siblings().removeClass('current');
    $(this).parent().addClass('current');
    $('.partners__tab').not(_href).hide();
    $(_href).fadeIn();
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('html, body').animate({scrollTop: $(_href).offset().top - 70 +'px'});
    }
  });

  if (window.matchMedia('(max-width: 991px)').matches) {
    $('.js-footer__title').click(function() {
      $(this).toggleClass('active');
      $(this).siblings('.footer__to-hide').toggle();
    });
    $('.scr1__logo1').appendTo('.header__bottom');
    $('.scr1__item').appendTo('.header__bottom');
    $('.scr1__menu').appendTo('.header__menu');
  }

  $('img').on('dragstart', function (event) {
    event.preventDefault();
  });

  $('.scr1__item-btn').hover(function() {
    $(this).parents('.scr1__item').siblings().find('.scr1__hidden').hide();
    $(this).siblings('.scr1__hidden').fadeIn();
    $(this).siblings('.scr1__hidden').css('display','flex');
  });
  $('.scr1__btn--cart').hover(function() {
    $(this).parents('.scr1__btns').siblings().find('.scr1__hidden').hide();
    $(this).siblings('.scr1__hidden').fadeIn();
    $(this).siblings('.scr1__hidden').css('display','flex');
  });
  $('.header, .scr1__menu, .scr1__slider, .prod').hover(function() {
    $('.scr1__hidden').hide();
  });

  $('.delivery__show').click(function() {
    $('.delivery__nav').toggleClass('active');
    $('.delivery__tabs').toggleClass('active');
  });

  $('.prod__show').click(function() {
    $('.prod__nav').toggleClass('active');
    $('.prod__main').toggleClass('active');
  });

  $('.prod__nav .menu > li').hover(function() {
    $(this).siblings().find('.sub-menu').hide();
    $(this).children('a').addClass('active');
    $(this).siblings().children('a').removeClass('active');
    $(this).find('.sub-menu').show();
  })

  $('.prod__main,.header,.footer').hover(function() {
    $('.prod__nav .sub-menu').hide();
    $('.prod__nav .menu > li > a').removeClass('active');
  });

  /* СЛАЙДЕРЫ */
  var instaSlider = new Swiper('#insta__slider', {
    slidesPerView: 2,
    spaceBetween: 10,
    watchSlidesProgress: true,
    watchOverflow: true,
    pagination: {
      el: '.insta__slider-btns .swiper-dots',
    },
    breakpoints: {
      1170: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      800: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      600: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      430: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });

  var brandsSlider = new Swiper('#brands__slider', {
    slidesPerView: 2,
    slidesPerColumn: 2,
    slidesPerColumnFill: 'row',
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.brands__slider-btns .swiper-button-next',
      prevEl: '.brands__slider-btns .swiper-button-prev',
    },
    pagination: {
      el: '.brands__slider-btns .swiper-dots',
    },
    breakpoints: {
      991: {
        slidesPerView: 6,
        spaceBetween: 0,
      },
      575: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
      500: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
    },
  });

  var secretsSlider = new Swiper('#secrets__slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    watchSlidesProgress: true,
    watchOverflow: true,
    loop: true,
    autoplay: {
      delay: 8000,
    },
    pagination: {
      el: '.secrets__slider-btns .swiper-dots',
    },
    breakpoints: {
      1070: {
        slidesPerView: 3,
        spaceBetween: 35,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      630: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      430: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      300: {
        slidesPerView: 2,
        spaceBetween: 8,
      },
    },
  });

  var scr1Slider = new Swiper('#scr1__slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    watchSlidesProgress: true,
    watchOverflow: true,
    pagination: {
      el: '.scr1__slider-btns .swiper-dots',
    },
  });


  $('.prod__slider').each(function(xi,xel) {
    var xId = '#' + $(xel).attr('id');
    var xBtns = $(xel).parents('.prod__wrap').find('.prod__slider-btns');
    var xTabs = false;
    if ($(this).parents('.prod').find('.tabs-nav').length > 0) {
      var xTab = $(xel).parents('.prod__tab');
      var xTabNum = xTab.attr('id')[xTab.attr('id').length - 1];
      xTabs = true;
    }
    var prodSlider = new Swiper(xId, {
      slidesPerView: 1,
      watchSlidesProgress: true,
      watchOverflow: true,
      spaceBetween: 10,
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
        1270: {
          slidesPerView: 4,
          spaceBetween: 14,
        },
        800: {
          slidesPerView: 3,
          spaceBetween: 14,
        },
        767: {
          slidesPerView: 2,
          spaceBetween: 14,
        },
        300: {
          slidesPerView: 2,
          spaceBetween: 8,
        },
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
    breakpoints: {
      400: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  });

  var brandSlider = new Swiper('#brand__slider', {
    slidesPerView: 2,
    spaceBetween: 8,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    centerInsufficientSlides: true,
    pagination: {
      el: '.brand__slider-btns .swiper-dots',
    },
    breakpoints: {
      991: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      830: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      430: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
  });

  var prodItemGallery = new Swiper('#prod-item__imgs', {
    slidesPerView: 1,
    spaceBetween: 10,
    watchSlidesProgress: true,
    watchOverflow: true,
    pagination: {
      el: '.prod-item__imgs-btns .swiper-dots',
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });

  function moveBreadcrumbs() {
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('.prod-item .breadcrumbs').prependTo('.prod-item > .container');
    } else {
      $('.prod-item .breadcrumbs').prependTo('.prod-item__content');
    }
  }

  moveBreadcrumbs();

  $(window).resize(function() {

    var currScreeWidth = $(window).width();

    if (currScreeWidth != screenWidth) {
      moveBreadcrumbs();
    }

    screenWidth = $(window).width();
  });

})(jQuery);
