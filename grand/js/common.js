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
    $(this).addClass('active');
    // $('.header__menu').addClass('active');
    $('.header__menu').slideDown();
  });

  $('.header__menu-close').click(function() {
    $('.burger').removeClass('active');
    $('.header__menu').slideUp();
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

  /* Анимация чисел */
  if ($('.num:not(.num--about) .num__list').length > 0) {
    var show = true;
    var countbox = ".scr_num";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.num__list .num__num span').css('opacity', '1');
            $('.num__list .num__num span').spincrement({
                thousandSeparator: " ",
                duration: 3000
            });
            show = false;
        }
    });
  }


  // фиксированные шапка
  $(window).on("scroll", function() {
    var fromTop = $(document).scrollTop();
    // $(".header").toggleClass("fixed", (fromTop > 10));
    $(".to-top").toggleClass("fixed", (fromTop > 600));
  });


  // Табы
  $('.serv .tabs__nav a').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().siblings().removeClass('current');
    $(this).parent().addClass('current');
    $('.serv__tab').not(_href).hide();
    $(_href).fadeIn();
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('html, body').animate({scrollTop: $(_href).offset().top - 70 +'px'});
    }
  });

  $('.quantity .tabs__nav a').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().siblings().removeClass('current');
    $(this).parent().addClass('current');
    $('.quantity__tab').not(_href).hide();
    $(_href).fadeIn();
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('html, body').animate({scrollTop: $(_href).offset().top - 70 +'px'});
    }
  });

  $('.building__years a').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().siblings().removeClass('current');
    $(this).parent().addClass('current');
    $('.building__tab').not(_href).hide();
    $(_href).fadeIn();
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('html, body').animate({scrollTop: $(_href).offset().top - 70 +'px'});
    }
  });

  $('.building__months a').click(function(event) {
    event.preventDefault();
    var xParentId = '#' + $(this).parents('.building__tab').attr('id');
    var _href = $(this).attr('href');
    $(this).parent().siblings().removeClass('current');
    $(this).parent().addClass('current');
    $(xParentId + ' .building__month-tab').not(_href).hide();
    $(_href).fadeIn();
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('html, body').animate({scrollTop: $(_href).offset().top - 70 +'px'});
    }
  });

  $('.inter__nav a').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().siblings().removeClass('current');
    $(this).parent().addClass('current');
    $('.inter__tab').not(_href).hide();
    $(_href).fadeIn();
  });

  $('img').on('dragstart', function (event) {
    event.preventDefault();
  });


  function deleteBorders() {
    var xDocsItems = $('.docs__item').length;

    if (window.matchMedia('(max-width: 650px)').matches) {
      if ((xDocsItems % 2) == 0) {
        xDocsItems = xDocsItems -2;
      } else {
        xDocsItems = Math.floor(xDocsItems / 2) * 2;
      }
    } else {
      if ((xDocsItems % 3) == 0) {
        xDocsItems = xDocsItems -3;
      } else {
        xDocsItems = Math.floor(xDocsItems / 3) * 3;
      }
    }

    $('.docs:not(.docs--object) .docs__item').each(function(xi,xel) {
      if ((xi + 1) > xDocsItems) {
        $(xel).removeClass('docs__item--bordered');
      } else {
        $(xel).addClass('docs__item--bordered');
      }
    });
  }

  deleteBorders();




  /* СЛАЙДЕРЫ */
  function equalHeightSwiper(sliderID) {
    $(sliderID).find('.swiper-slide').height('auto');
    var slickTrackHeight = Math.max($(sliderID).find('.swiper-slide').outerHeight());
    $(sliderID).find('.swiper-slide').css('height', slickTrackHeight + 'px');
  }

  var quantitySlider = new Swiper('#quantity__slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    watchSlidesProgress: true,
    autoplay: {
      delay: 8000,
    },
    pagination: {
      el: '.quantity__slider-btns .swiper-dots',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
  });

  var projSlider = new Swiper('#proj__slider', {
    slidesPerView: 1,
    spaceBetween: 15,
    watchSlidesProgress: true,
    watchOverflow: true,
    loop: true,
    autoplay: {
      delay: 8000,
    },
    navigation: {
      nextEl: '.proj__slider-nav .swiper-button-next',
      prevEl: '.proj__slider-nav .swiper-button-prev',
    },
    pagination: {
      el: '.proj__slider-nav .swiper-dots',
    },
    breakpoints: {
      1070: {
        slidesPerView: 3,
        spaceBetween: 35,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
    },
  });

  var docsSlider = new Swiper('#docs__slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    watchSlidesProgress: true,
    watchOverflow: true,
    loop: true,
    autoplay: {
      delay: 8000,
    },
    navigation: {
      nextEl: '.docs .swiper-button-next',
      prevEl: '.docs .swiper-button-prev',
    },
    breakpoints: {
      575: {
        slidesPerView: 3,
      },
      320: {
        slidesPerView: 2,
      },
    },
    on: {
      init: function () {
        $(window).on("load", function () {
          equalHeightSwiper('#docs__slider');
        });
      },
    },
  });

  $('.serv__works-slider').each(function(xi,xel) {

    var xTabId = '#' + $(xel).parents('.serv__tab').attr('id') + ' ';

    window["servSlider"+xi] = new Swiper('#' + $(xel).attr('id'), {
      slidesPerView: 1,
      spaceBetween: 10,
      watchSlidesProgress: true,
      watchOverflow: true,
      // loop: true,
      autoplay: {
        delay: 8000,
      },
      navigation: {
        nextEl: xTabId + '.serv__works .swiper-button-next',
        prevEl: xTabId + '.serv__works .swiper-button-prev',
      },
      breakpoints: {
        1170: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1070: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        700: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        450: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        400: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      },
    });
  });

  $('.building__slider').each(function(xi,xel) {

    var xTabId =  $(xel).parents('.building__month-tab').attr('id') + ' ';

    window["building__slider"+xTabId] = new Swiper('#' + $(xel).attr('id'), {
      slidesPerView: 1,
      spaceBetween: 10,
      watchSlidesProgress: true,
      watchOverflow: true,
      loop: true,
      autoplay: {
        delay: 8000,
      },
      navigation: {
        nextEl: '#' + xTabId + '.swiper-button-next',
        prevEl: '#' + xTabId + '.swiper-button-prev',
      },
      breakpoints: {
        991: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        575: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      },
    });
  });

  $('.inter__slider').each(function(xi,xel) {

    var xTabId =  '#' + $(xel).parents('.inter__tab').attr('id') + ' ';

    window["inter__slider"+xi] = new Swiper('#' + $(xel).attr('id'), {
      slidesPerView: 1,
      spaceBetween: 15,
      watchSlidesProgress: true,
      watchOverflow: true,
      loop: true,
      autoplay: {
        delay: 8000,
      },
      pagination: {
        el: xTabId + '.inter__slider-btns .swiper-dots',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
    });
  });

  $(window).on("load", function () {
    $('.serv__tab:not(#serv__tab-0)').css('display','none');
    $('.quantity__tab:not(#quantity__tab-0)').css('display','none');
    $('.building__month-tab:not(#building__month-tab-0-0):not(#building__month-tab-1-0)').css('display','none');
    $('.building__tab:not(#building__tab-0)').css('display','none');
    $('.inter__tab:not(#inter__tab-0)').css('display','none');

  });

  $(window).resize(function() {

    var currScreeWidth = $(window).width();

    if (currScreeWidth != screenWidth) {
      deleteBorders();
    }

    screenWidth = $(window).width();
  });

})(jQuery);
