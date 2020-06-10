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
    $('.header__top').toggleClass('active');
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
    $(".to-top").toggleClass("fixed", (fromTop > 600));
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

  /* Замена input(type="number") */
  (function quantityProducts() {
    $(".quantity").each(function(xi,xel) {
      var $quantityArrowMinus = $(xel).find(".quantity-arrow-minus");
      var $quantityArrowPlus = $(xel).find(".quantity-arrow-plus");

      $quantityArrowMinus.click(quantityMinus);
      $quantityArrowPlus.click(quantityPlus);

      function quantityMinus() {
        var $quantityNum = $(xel).find(".quantity-num");
        if ($quantityNum.val() >= 2) {
          $quantityNum.val(+$quantityNum.val() - 1);
        }
      }

      function quantityPlus() {
        var $quantityNum = $(xel).find(".quantity-num");
        $quantityNum.val(+$quantityNum.val() + 1);
      }
    });
  })();

  $('.footer__menu .menu > li > a .menu__open').click(function(event) {
    event.preventDefault();

    var xButton = $(this);
    var xSubMenu = $(this).parents('a').siblings('.sub-menu');
    var xWrapSubMenu = $(this).parents('a').siblings('.menu-item__wrap').find('.sub-menu');

    if (!($(this).hasClass('active'))) {
      $('.footer .menu__open').removeClass('active');
      $('.footer .sub-menu').hide();
      xButton.addClass('active');
      xSubMenu.slideDown();
      xWrapSubMenu.slideDown();
    } else {
      xButton.removeClass('active');
      xSubMenu.slideUp();
      xWrapSubMenu.slideUp();
    }

  });

  $('.footer__menu .menu > li > a').click(function(event) {
    event.preventDefault();
  });



  /* СЛАЙДЕРЫ */
  function equalHeightSwiper(sliderID) {
    $(sliderID).find('.swiper-slide').height('auto');
    var slickTrackHeight = Math.max($(sliderID).find('.swiper-slide').outerHeight());
    $(sliderID).find('.swiper-slide').css('height', slickTrackHeight + 'px');
  }

  var brands__slider = new Swiper('#brands__slider', {
    slidesPerView: 2,
    spaceBetween: 10,
    watchSlidesProgress: true,
    loop: true,
    watchOverflow: true,
    autoplay: {
      delay: 8000,
    },
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
        spaceBetween: 35,
      },
      650: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      500: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      400: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  });

  var mags__slider = new Swiper('#mags__slider', {
    slidesPerView: 2,
    spaceBetween: 10,
    slidesPerColumn: 2,
    slidesPerColumnFill: 'row',
    watchSlidesProgress: true,
    loop: false,
    watchOverflow: true,
    autoplay: {
      delay: 8000,
    },
    navigation: {
      nextEl: '.mags__slider-btns .swiper-button-next',
      prevEl: '.mags__slider-btns .swiper-button-prev',
    },
    pagination: {
      el: '.mags__slider-btns .swiper-dots',
    },
    breakpoints: {
      991: {
        slidesPerView: 6,
        spaceBetween: 30,
        slidesPerColumn: 2,
        slidesPerColumnFill: 'row',
      },
      850: {
        slidesPerView: 5,
        spaceBetween: 20,
        slidesPerColumn: 2,
        slidesPerColumnFill: 'row',
      },
      700: {
        slidesPerView: 4,
        spaceBetween: 10,
        slidesPerColumn: 2,
        slidesPerColumnFill: 'row',
      },
      450: {
        slidesPerView: 3,
        spaceBetween: 10,
        slidesPerColumn: 2,
        slidesPerColumnFill: 'row',
      },
    },
  });

  var prod__slider = new Swiper('#prod__slider', {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerColumn: 2,
    slidesPerColumnFill: 'row',
    watchSlidesProgress: true,
    watchOverflow: true,
    autoplay: {
      delay: 8000,
    },
    navigation: {
      nextEl: '#prod__wrap .swiper-button-next',
      prevEl: '#prod__wrap .swiper-button-prev',
    },
    pagination: {
      el: '#prod__wrap .swiper-dots',
    },
    breakpoints: {
      1070: {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerColumn: 2,
        slidesPerColumnFill: 'row',
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerColumn: 2,
        slidesPerColumnFill: 'row',
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 10,
        slidesPerColumn: 2,
        slidesPerColumnFill: 'row',
      },
      430: {
        slidesPerView: 2,
        spaceBetween: 10,
        slidesPerColumn: 2,
        slidesPerColumnFill: 'row',
      },
    },
    on: {
      init: function () {
        $(window).on("load", function () {
          equalHeightSwiper('#prod__slider');
        });
      },
    },
  });

  var prod__slider2 = new Swiper('#prod__slider--hit', {
    slidesPerView: 1,
    spaceBetween: 10,
    watchSlidesProgress: true,
    watchOverflow: true,
    autoplay: {
      delay: 8000,
    },
    navigation: {
      nextEl: '#prod__wrap--hit .swiper-button-next',
      prevEl: '#prod__wrap--hit .swiper-button-prev',
    },
    pagination: {
      el: '#prod__wrap--hit .swiper-dots',
    },
    breakpoints: {
      1070: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      430: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
    on: {
      init: function () {
        $(window).on("load", function () {
          equalHeightSwiper('#prod__slider--hit');
        });
      },
    },
  });

  var scr1__slider = new Swiper('#scr1__slider', {
    slidesPerView: 1,
    spaceBetween: 10,
    watchSlidesProgress: true,
        watchOverflow: true,
    loop: true,
    autoplay: {
      delay: 8000,
    },
    pagination: {
      el: '.scr1__slider-btns .swiper-dots',
    },
    navigation: {
      nextEl: '.scr1__slider-btns .swiper-button-next',
      prevEl: '.scr1__slider-btns .swiper-button-prev',
    },
  });

  $(window).resize(function() {

    var currScreeWidth = $(window).width();

    if (currScreeWidth != screenWidth) {

    }

    screenWidth = $(window).width();
  });

})(jQuery);
