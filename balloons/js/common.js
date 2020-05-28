(function($){

  /* Для проверки resize, т.к. на мобильном Хроме при скролле срабывает resize (без изменения ширины) */
  var screenWidth = $(window).width();

  /* Инициализация wow */
  wow = new WOW({mobile: false})
  wow.init();

  /* Инициализация красивых select */
  $('select').niceSelect();

  /* Нужно для IE и некоторых других браузеров, чтобы понимал svg спрайты во внешних файлах */
  svg4everybody();

  /* полифил для object-fit */
  objectFitImages($('[data-object-fit-cover],[data-object-fit-cover-top],[data-object-fit-contain]'), {watchMQ: true});

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
  });

  // Табы
  $('.prod .tabs-nav a').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().siblings().removeClass('current');
    $(this).parent().addClass('current');
    $('.prod__tab').not(_href).hide();
    $(_href).fadeIn();
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('html, body').animate({scrollTop: $(_href).offset().top - 40 +'px'});
    }
  });

  $('.prod-item__info-nav a').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().siblings().removeClass('current');
    $(this).parent().addClass('current');
    $('.prod-item__tab').not(_href).hide();
    $(_href).fadeIn();
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('html, body').animate({scrollTop: $(_href).offset().top - 40 +'px'});
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

      $quantityArrowMinus.click(quantityMinus);
      $quantityArrowPlus.click(quantityPlus);

      function quantityMinus() {
        var $quantityNum = $(xel).find(".quantity-num");
        if ($quantityNum.val() >= 1) {
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

    $('.footer .menu__open').removeClass('active');
    $('.footer .sub-menu').hide();
    xButton.addClass('active');
    xSubMenu.slideDown();
  });


  // "Читать полностью"
  $('.show-more__btns button').click(function() {
    $(this).parent().siblings('.show-more__content').toggleClass('opened');
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $(this).find('span').text('Свернуть');
    } else {
      $(this).find('span').text('Развернуть');
    }
  });

  function hideMore() {
    $('.show-more__content').each(function(xi,xel) {
      if ($(xel).innerHeight() + 5 <= $(xel).css('max-height').replace('px','')) {
        $(xel).parents('.seo__wrap').find('.seo__show').hide();
      }
    })
  }

  hideMore();

  $('.side-menu .menu-item-has-children').hover(function(event) {
    if (!($(this).hasClass('active'))) {
      $(this).addClass('active');
      $(this).find('a').addClass('active');
      $(this).find('.sub-menu').slideDown();
    }

  },function(){;
    $(this).find('a').removeClass('active');
    $(this).find('.sub-menu').slideUp('slow');
    setTimeout(function(){$('.side-menu .menu-item-has-children').removeClass('active');}, 2000);
  });


  /* СЛАЙДЕРЫ */
  function equalHeightSwiper(sliderID) {
    $(sliderID).find('.swiper-slide').height('auto');
    var slickTrackHeight = Math.max($(sliderID).find('.swiper-slide').outerHeight());
    $(sliderID).find('.swiper-slide').css('height', slickTrackHeight + 'px');
  }

  var partners__slider = new Swiper('#partners__slider', {
    slidesPerView: 1,
    spaceBetween: 10,
    watchSlidesProgress: true,
    watchOverflow: true,
    autoplay: {
      delay: 8000,
    },
    navigation: {
      nextEl: '.partners__wrap .swiper-button-next',
      prevEl: '.partners__wrap .swiper-button-prev',
    },
    pagination: {
      el: '.partners__wrap .swiper-dots',
    },
    on: {
      init: function () {
        $(window).on("load", function () {
          equalHeightSwiper('#partners__slider');
        });
      },
    },
    breakpoints: {
      1100: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1050: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
  });

  if (window.matchMedia('(max-width: 500px)').matches) {
    var insta__slider = new Swiper('#insta__slider', {
      slidesPerView: 1,
      spaceBetween: 10,
      watchSlidesProgress: true,
      watchOverflow: true,
      autoplay: {
        delay: 8000,
      },
      pagination: {
        el: '.insta__slider-btns .swiper-dots',
      },
      breakpoints: {
        320: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      },
    });
  }

  var scr1__slider = new Swiper('#scr1__slider', {
    slidesPerView: 1,
    watchSlidesProgress: true,
    spaceBetween: 10,
    watchOverflow: true,
    autoplay: {
      delay: 8000,
    },
    navigation: {
      nextEl: '.scr1__slider-wrap .swiper-button-next',
      prevEl: '.scr1__slider-wrap .swiper-button-prev',
    },
    pagination: {
      el: '.scr1__slider-wrap .swiper-dots',
    },
  });

  var prodItem__slider = new Swiper('#prod-item__slider', {
    slidesPerView: 1,
    watchSlidesProgress: true,
    spaceBetween: 10,
    watchOverflow: true,
    autoplay: {
      delay: 8000,
    },
    navigation: {
      nextEl: '.prod-item__btns .swiper-button-next',
      prevEl: '.prod-item__btns .swiper-button-prev',
    },
    pagination: {
      el: '.prod-item__btns .swiper-dots',
    },
  });

  $('.prod__slider').each(function(xi,xel) {
    var xId = '#' + $(xel).attr('id');
    var xBtns = $(xel).parents('.prod__wrap').find('.prod__slider-btns');
    var scr1__slider = new Swiper(xId, {
      slidesPerView: 1,
      watchSlidesProgress: true,
      watchOverflow: true,
      spaceBetween: 10,
      autoplay: {
        delay: 8000,
      },
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
            equalHeightSwiper(xId);
            if (xi == $('.prod__slider').length - 1) {
              $('.prod__tab:not(#prod__tab-0)').hide();
            }
          });
        },
      },
      breakpoints: {
        1270: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1130: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        800: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        470: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      },
    });
  });



  $(window).resize(function() {

    var currScreeWidth = $(window).width();

    if (currScreeWidth != screenWidth) {

    }

    screenWidth = $(window).width();
  });

})(jQuery);
