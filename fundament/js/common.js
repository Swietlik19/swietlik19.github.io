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
    $(".to-top").toggleClass("fixed", (fromTop > 600));
  });

  // Табы
  $('.vehicles .js-tabs__nav a').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().siblings().removeClass('current');
    $(this).parent().addClass('current');
    $('.vehicles__tab').not(_href).hide();
    $(_href).fadeIn();
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('html, body').animate({scrollTop: $(_href).offset().top - 70 +'px'});
    }
  });

  $('img').on('dragstart', function (event) {
    event.preventDefault();
  });

  /* инициализация кастомного скроллбара */
  $(window).on("load",function(){
    $(".tours__text").mCustomScrollbar({
      theme: "dark",
      scrollInertia: 1000,
    });
  });

  /* СЛАЙДЕРЫ */

  var clientsSlider = new Swiper('#clients__slider', {
    slidesPerView: 1,
    spaceBetween: 10,
    watchSlidesProgress: true,
    loop: true,
    watchOverflow: true,
    autoplay: {
      delay: 8000,
    },
    navigation: {
      nextEl: '.clients__slider-btns .swiper-button-next',
      prevEl: '.clients__slider-btns .swiper-button-prev',
    },
    pagination: {
      el: '.clients__slider-btns .swiper-dots',
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 53,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });

  var certsSlider = new Swiper('#certs__slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    watchSlidesProgress: true,
    loop: true,
    watchOverflow: true,
    autoplay: {
      delay: 8000,
    },
    navigation: {
      nextEl: '.certs__slider-btns .swiper-button-next',
      prevEl: '.certs__slider-btns .swiper-button-prev',
    },
    pagination: {
      el: '.certs__slider-btns .swiper-dots',
    },
    breakpoints: {
      991: {
        slidesPerView: 4,
        spaceBetween: 52,
      },
      800: {
        slidesPerView: 4,
        spaceBetween: 32,
      },
      650: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
      430: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
      380: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
    },
  });

  var blogSlider = new Swiper('#blog__slider', {
    slidesPerView: 2,
    spaceBetween: 10,
    watchSlidesProgress: true,
    watchOverflow: true,
    pagination: {
      el: '.blog__slider-btns .swiper-dots',
    },
    breakpoints: {
      1400: {
        slidesPerView: 4,
        spaceBetween: 70,
      },
      1170: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  });

  var toursSlider = new Swiper('#tours__slider', {
    slidesPerView: 'auto',
    spaceBetween: 58,
    watchSlidesProgress: true,
    watchOverflow: true,
    pagination: {
      el: '.tours__slider-btns .swiper-dots',
    },
    breakpoints: {
      1250: {
        spaceBetween: 58,
      },
      300: {
        spaceBetween: 38,
      },
    }
  });

  $('.vehicles__gallery-slider').each(function(xi,xel) {
    var xId = '#' + $(xel).attr('id');
    var xThumbsId = '#' + $(xel).siblings('.vehicles__gallery-thumbs').attr('id');

    var galleryThumbs = new Swiper(xThumbsId, {
      spaceBetween: 10,
      slidesPerView: 2,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      breakpoints: {
        1070: {
          slidesPerView: 3,
          spaceBetween: 14,
        },
        300: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      }
    });
    var galleryTop = new Swiper(xId, {
      spaceBetween: 20,
      effect: 'fade',
      speed: 1500,
      thumbs: {
        swiper: galleryThumbs
      }
    });
  });

  $('.vehicles__slider').each(function(xi,xel) {
    var xId = '#' + $(xel).attr('id');
    var xBtns = $(xel).siblings('.vehicles__slider-btns');
    var vehiclesSlider = new Swiper(xId, {
      slidesPerView: 1,
      spaceBetween: 50,
      watchSlidesProgress: true,
      watchOverflow: true,
      navigation: {
        nextEl:  xBtns.find('.swiper-button-next'),
        prevEl:  xBtns.find('.swiper-button-prev'),
      },
      pagination: {
        el:  xBtns.find('.swiper-dots'),
      },
      breakpoints: {
        900: {
          allowTouchMove: false,
        },
      }
    });
  });

  $(window).resize(function() {

    var currScreeWidth = $(window).width();

    if (currScreeWidth != screenWidth) {

    }

    screenWidth = $(window).width();
  });

})(jQuery);
