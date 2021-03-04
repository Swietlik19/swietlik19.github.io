(function($){

  /* Для проверки resize, т.к. на мобильном Хроме при скролле срабывает resize (без изменения ширины) */
  var screenWidth = $(window).width();

  /* Инициализация wow */
  wow = new WOW({mobile: false})
  wow.init();

  /* Нужно для IE и некоторых других браузеров, чтобы понимал svg спрайты во внешних файлах */
  svg4everybody();

  /* полифил для object-fit */
  objectFitImages($('[data-object-fit-cover],[data-object-fit-cover-left],[data-object-fit-contain]'), {watchMQ: true});

  /* инициализация fancybox */
  $(".fancybox").fancybox({
    padding: 0,
    scrolling: 'auto'
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
    $('.header__bottom').toggleClass('active');
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
    var menuContainer = $(".header__bottom");
    var burgerContainer = $(".header .burger");
    if (container.has(e.target).length === 0){
      closeModal();
    }
    if (menuContainer.has(e.target).length === 0 && !($(e.target).hasClass('header__bottom')) && !($(e.target).hasClass('burger')) && burgerContainer.has(e.target).length === 0){
      $('.header__bottom').removeClass('active');
      $('.header .burger').removeClass('active');
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

  $('.faq__item:first-of-type .open').addClass('active');
  $('.faq__item:first-of-type .hidden').show();

  /* инициализация кастомного скроллбара */
  $(window).on("load",function(){
    $(".faq__list").mCustomScrollbar({
      theme: "minimal-dark",
      scrollInertia: 4000,
    });
  });

  toggleHidden('.faq',true);

  // фиксированные шапка
  $(window).on("scroll", function() {
    var fromTop = $(document).scrollTop();
    if (fromTop > 10) {
      $(".header").addClass("fixed");

      if ( !(window.matchMedia('(max-width: 1170px)').matches) ) {
        $(".header__bottom").hide();
        $('.header .burger').appendTo('.header__top');
      }
    } else {
      $(".header").removeClass("hovered");
      $(".header").removeClass("fixed");
      $(".header__bottom").show();
      if ( !(window.matchMedia('(max-width: 1170px)').matches) ) {
        $('.header .burger').appendTo('.header__df');
      }
    }
    $(".to-top").toggleClass("fixed", (fromTop > 600));
  });

  if ( !(window.matchMedia('(max-width: 1170px)').matches) )  {
    $(".header").hover(function() {
      if ($(this).hasClass('fixed')) {
        $(this).find(".header__bottom").fadeIn();
        $(this).addClass('hovered');
      }
    }, function() {
      if ($(this).hasClass('fixed')) {
        var _this = $(this);
        _this.removeClass('hovered');
        _this.find(".header__bottom").hide();
      }
    });
  }

  // Табы
  $('.js-tabs__nav a').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().siblings().removeClass('current');
    $(this).parent().addClass('current');
    $('.catalog__tab').not(_href).hide();
    $(_href).fadeIn();
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('html, body').animate({scrollTop: $(_href).offset().top - 70 +'px'});
    }
  });
  $('.js-single-serv__nav a').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().siblings().removeClass('current');
    $(this).parent().addClass('current');
    $('.single-serv__tab').not(_href).hide();
    $(_href).fadeIn();
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('html, body').animate({scrollTop: $(_href).offset().top - 70 +'px'});
    }
  });

  $('img').on('dragstart', function (event) {
    event.preventDefault();
  });

  var servsItems = $('.servs__item');
  $('.servs__item').hover(function() {
    servsItems.addClass('hidden');
    $(this).removeClass('hidden');
  },function() {
    servsItems.removeClass('hidden');
  });

  $('.problems__btns, .problems__content').hover(function(){
    $(this).parents('.swiper-slide').siblings('.swiper-slide').find('.problems__item').removeClass('active');
    $(this).parents('.problems__item').addClass('active');
  });
  $('.problems__slider').mouseleave(function(){
    $('.problems__item').removeClass('active');
  });

  if (window.matchMedia('(max-width: 991px)').matches) {
    $('.footer__title').click(function() {
      $(this).toggleClass('active');
      $(this).siblings('.footer__col-content').fadeToggle();
      $('html, body').animate({scrollTop: $(this).offset().top - 40 +'px'});
    });
  }

  /* СЛАЙДЕРЫ */

  var problemsSlider = new Swiper('#problems__slider', {
    slidesPerView: 1,
    spaceBetween: 15,
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.problems__slider-btns .swiper-button-next',
      prevEl: '.problems__slider-btns .swiper-button-prev',
    },
    breakpoints: {
      767: {
        slidesPerView: 3,
        spaceBetween: 31,
      },
      370: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
    },
  });

  var specSlider = new Swiper('#spec__slider', {
    slidesPerView: 1,
    spaceBetween: 15,
    watchSlidesProgress: true,
    watchOverflow: true,
    autoplay: {
      delay: 8000,
    },
    navigation: {
      nextEl: '.spec__slider-btns .swiper-button-next',
      prevEl: '.spec__slider-btns .swiper-button-prev',
    },
    breakpoints: {
      1070: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      630: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
  });

  var instaSlider = new Swiper('#insta__slider', {
    slidesPerView: 1,
    spaceBetween: 10,
    watchSlidesProgress: true,
    watchOverflow: true,
    pagination: {
      el: '.insta__slider-btns .swiper-dots',
    },
    breakpoints: {
      991: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      630: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      380: {
        slidesPerView: 2,
        spaceBetween: 8,
      },
    },
  });

  var certsSlider = new Swiper('#certs__slider', {
    slidesPerView: 2,
    spaceBetween: 8,
    watchSlidesProgress: true,
    watchOverflow: true,
    navigation: {
      nextEl: '.certs__slider-nav .swiper-button-next',
      prevEl: '.certs__slider-nav .swiper-button-prev',
    },
    pagination: {
      el: '.certs__slider-nav .swiper-dots',
      dynamicBullets: true,
    },
    breakpoints: {
      767: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      575: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
    on: {
      init: function () {
        if (window.matchMedia('(max-width: 450px)').matches) {
          $('.certs__slider-nav .swiper-dots').addClass('swiper-dots--circle')
        }
      },
    },
  });

  var actionsSlider = new Swiper('#actions__slider', {
    slidesPerView: 1,
    spaceBetween: 50,
    watchSlidesProgress: true,
    watchOverflow: true,
    navigation: {
      nextEl: '.actions__slider-btns .swiper-button-next',
      prevEl: '.actions__slider-btns .swiper-button-prev',
    },
    pagination: {
      el: '.actions__slider-btns .swiper-dots',
    },
  });

  var beforeAfterSlider = new Swiper('#before-after__slider', {
    slidesPerView: 1,
    spaceBetween: 50,
    watchSlidesProgress: true,
    watchOverflow: true,
    navigation: {
      nextEl: '.before-after__slider-nav .swiper-button-next',
      prevEl: '.before-after__slider-nav .swiper-button-prev',
    },
    pagination: {
      el: '.swiper-slider-nav .swiper-dots',
      dynamicBullets: true,
    },
  });

  if (window.matchMedia('(max-width: 991px)').matches) {
    var featSlider = new Swiper('#feat__slider', {
      slidesPerView: 1,
      spaceBetween: 8,
      watchSlidesProgress: true,
      watchOverflow: true,
      autoplay: {
        delay: 8000,
      },
      pagination: {
        el: '.feat__slider-btns .swiper-dots',
      },
      breakpoints: {
        830: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        575: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        430: {
          slidesPerView: 2,
          spaceBetween: 8,
        },
      },
    });
  }

  if (window.matchMedia('(max-width: 900px)').matches) {
    $('.servs__slider').each(function(xi,xel) {
      var xId = '#' + $(xel).attr('id');
      var xBtns = $(xel).siblings('.servs__slider-btns');
      var scr1__slider = new Swiper(xId, {
        slidesPerView: 1,
        watchSlidesProgress: true,
        watchOverflow: true,
        spaceBetween: 5,
        pagination: {
          el:  xBtns.find('.swiper-dots'),
        },
        breakpoints: {
          700: {
            slidesPerView: 3,
            spaceBetween: 12,
          },
          450: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
        },
      });
    });
  }

  function moveBurger() {
    if (window.matchMedia('(max-width: 1170px)').matches) {
      $('.header .burger').appendTo('.header__top');
    } else {
      $('.header .burger').appendTo('.header__df');
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
