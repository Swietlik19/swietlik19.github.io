/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
(function ($) {
  /* Для проверки resize, т.к. на мобильном Хроме при скролле срабывает resize (без изменения ширины) */
  var screenWidth = $(window).width();
  /* полифил для object-fit */

  objectFitImages($('[data-object-fit-cover],[data-object-fit-cover-top],[data-object-fit-contain]'), {
    watchMQ: true
  });
  /* инициализация fancybox */

  $(".fancybox").fancybox({
    padding: 0,
    scrolling: 'auto'
  });
  /* Плавный скролл к якорю для всех ссылок с классом "inner-link" */

  $(function () {
    $('.js--linkToAncor[href^="#"]').click(function () {
      var _href = $(this).attr('href');

      $('html, body').animate({
        scrollTop: $(_href).offset().top - 20 + 'px'
      });
      return false;
    });
  });
  /* Открытие / закрытие меню */

  $('.burger').click(function () {
    $(this).toggleClass('active');
    $('.header__menu').toggleClass('active');
    $('.header__add').toggle();
    $('body').toggleClass('disabled');
  });
  /* Открытие / закрытие модалок (кроме карты) */

  $('a.open-modal').click(function (event) {
    event.preventDefault();

    var _href = $(this).attr('href');

    if ($(_href).length > 0) {
      $(_href).addClass('active');
      $(_href + ' .modal__content').addClass('visible');
    }
  });

  function closeModal() {
    var activeCount = $('.modal.active').length;

    if (activeCount > 1) {
      $($('.modal.active')[activeCount - 1]).removeClass('active');
      $('.modal__callback2 .modal__content').removeClass('visible');
    } else {
      $('.modal').removeClass('active');
      $('.modal__content').removeClass('visible');
    }
  }

  $(document).mouseup(function (e) {
    var container = $(".modal .modal__content");

    if (container.has(e.target).length === 0) {
      closeModal();
    }
  });
  $('.modal .close').click(function () {
    closeModal();
  });
  $(document).keydown(function (eventObject) {
    if (eventObject.which == 27) {
      closeModal();
    }
  }); // маска поля tel

  $(".wpcf7-tel").mask("+7 (999) 999-99-99"); // Секции по типу "Вопрос - ответ"

  function toggleHiddenElem(top, hideOther) {
    top.find('.js--switch-open').toggleClass('active');
    top.siblings().slideToggle();

    if (hideOther) {
      top.parent().siblings().find('.js--switch-open').removeClass('active');
      top.parent().siblings().find('.js--switch-hidden').slideUp();
    }
  }

  function toggleHidden(xParent, hideOther) {
    $(xParent + ' .js--switch-top').click(function () {
      toggleHiddenElem($(this), true);
    });
  }

  toggleHidden('.faq', true);
  toggleHiddenElem($('.faq__item:first-child .js--switch-top'), true); // фиксированные шапка

  $(window).on("scroll", function () {
    var fromTop = $(document).scrollTop();

    if (fromTop > 10) {
      $(".header").addClass("fixed");

      if (!window.matchMedia('(max-width: 992px)').matches) {
        $(".header__bottom").hide();
        $('.header__burger').appendTo('.header__top');
      }
    } else {
      $(".header").removeClass("fixed");

      if (!window.matchMedia('(max-width: 992px)').matches) {
        $(".header__bottom").show();
        $('.header__burger').appendTo('.header__nav');
      }
    }

    $(".to-top").toggleClass("fixed", fromTop > 600);
  }); // if ( window.matchMedia('(max-width: 1020px)').matches ) {
  //   $('.header__add-col').appendTo('.header__menu');
  // }
  // Табы

  $('.schemes__tabsNav a').click(function (event) {
    event.preventDefault();

    var _href = $(this).attr('href');

    $(this).parents('li').siblings().removeClass('current');
    $(this).parents('li').addClass('current');
    $('.schemes__tab').not(_href).hide();
    $(_href).fadeIn();

    if (window.matchMedia('(max-width: 767px)').matches) {
      $('html, body').animate({
        scrollTop: $(_href).offset().top - 70 + 'px'
      });
    }
  });
  $('.schemes__partsNav a').click(function (event) {
    event.preventDefault();

    var _href = $(this).attr('href');

    $(this).parents('li').siblings().removeClass('current');
    $(this).parents('li').addClass('current');
    $(this).parents('.schemes__tab').find('.schemes__partsTab').not(_href).hide();
    $(_href).fadeIn();
  });
  $('img').on('dragstart', function (event) {
    event.preventDefault();
  });
  /* СЛАЙДЕРЫ */

  var reviewsVideos = new Swiper('.js--reviewsVideos', {
    slidesPerView: 1,
    spaceBetween: 6,
    watchSlidesProgress: true,
    watchOverflow: true,
    navigation: {
      nextEl: '.js--videosBtns .swiper-button-next',
      prevEl: '.js--videosBtns .swiper-button-prev'
    },
    breakpoints: {
      767: {
        slidesPerView: 2,
        spaceBetween: 36
      }
    }
  });
  var reviewsPhotos1 = new Swiper('.js--reviewsPhotos-1', {
    slidesPerView: 1,
    spaceBetween: 6,
    watchSlidesProgress: true,
    watchOverflow: true,
    navigation: {
      nextEl: '.js--reviewsBtns-1 .swiper-button-next',
      prevEl: '.js--reviewsBtns-1 .swiper-button-prev'
    },
    breakpoints: {
      767: {
        spaceBetween: 30
      }
    }
  });
  var reviewsPhotos2 = new Swiper('.js--reviewsPhotos-2', {
    slidesPerView: 1,
    spaceBetween: 6,
    watchSlidesProgress: true,
    watchOverflow: true,
    navigation: {
      nextEl: '.js--reviewsBtns-2 .swiper-button-next',
      prevEl: '.js--reviewsBtns-2 .swiper-button-prev'
    },
    breakpoints: {
      767: {
        spaceBetween: 30
      }
    }
  });

  function replaceBurger() {
    if (window.matchMedia('(max-width: 992px)').matches) {
      $(".header__bottom").hide();
      $('.header__burger').appendTo('.header__top');
    } else {
      $(".header__bottom").show();
      $('.header__burger').appendTo('.header__nav');
    }
  }

  replaceBurger();
  $('.schemes__plansItem').each(function (xi, xel) {
    var xDistance = $(xel).data('plans-x');
    var yDistance = $(xel).data('plans-y');
    $(xel).css('left', "".concat(xDistance));
    $(xel).css('top', "".concat(yDistance));
  });

  function schemesShow() {
    if (window.matchMedia('(max-width: 768px)').matches) {
      $('.schemes__plansItem').click(function () {
        var xParent = $(this).parents('.schemes__partsTab');
        xParent.find('.schemes__plansInner').removeClass('schemes__plansInner_visible');
        xParent.find('.schemes__plansItem').removeClass('schemes__plansItem_visible');
        $(this).find('.schemes__plansInner').addClass('schemes__plansInner_visible');
        $(this).addClass('schemes__plansItem_visible');
      });
    } else {
      $('.schemes__partsBtn').hover(function () {
        var xIndex = $(this).parents('li').index() + 1;
        var xParent = $(this).parents('.schemes__partsTab');
        var xPartsItem = xParent.find('.schemes__plansItem:nth-child(' + xIndex + ')');
        xParent.find('.schemes__plansItem').removeClass('schemes__plansItem_visible');
        xParent.find('.schemes__partsBtn').removeClass('schemes__partsBtn_current');
        $(this).addClass('schemes__partsBtn_current');
        xPartsItem.addClass('schemes__plansItem_visible');
      });
    }
  }

  schemesShow();
  $(window).resize(function () {
    var currScreeWidth = $(window).width();

    if (currScreeWidth != screenWidth) {
      replaceBurger();
      schemesShow();
    }

    screenWidth = $(window).width();
  });
})(jQuery);
/******/ })()
;
//# sourceMappingURL=main.js.map