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

  // Убираем прелоадер
  $(window).on("load", function () {
    $('.preloader').delay(1000).fadeOut();
    setTimeout(function() {$('body').removeClass('disabled');},1500);
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
    // $('.header__menu').toggleClass('active');
    $('.header__menu').slideToggle('fast');
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
  function makeTabs(navClass, tabClass) {
    $(navClass + ' a').click(function(event) {
      event.preventDefault();
      var _href = $(this).attr('href');
      $(this).parent().siblings().removeClass('current');
      $(this).parent().addClass('current');
      $(tabClass).not(_href).hide();
      $(_href).fadeIn();
      if (window.matchMedia('(max-width: 767px)').matches) {
        $('html, body').animate({scrollTop: $(_href).offset().top - 70 +'px'});
      }
    });
  }

  makeTabs('.company__nav','.company__tab');
  makeTabs('.prices__nav','.prices__tab');

  $('img').on('dragstart', function (event) {
    event.preventDefault();
  });

  $('.company__person-link').click(function(event) {
    event.preventDefault();
    $(this).toggleClass('active');
    $('.company__person-info .hidden').toggleClass('active');
    if ($(this).hasClass('active')) {
      $(this).text('Свернуть');
    } else {
      $(this).text('Подробнее');
    }
  });

  $('.prices__more').click(function(event) {
    event.preventDefault();
    $(this).toggleClass('active');
    $(this).parents('.prices__table').find('.prices__hidden').slideToggle();
  });

  $('.serv__add-more').click(function() {
    $(this).toggleClass('active');
    $('.serv__add-content').toggleClass('active');
    if ($(this).hasClass('active')) {
      $(this).find('span').text('Свернуть');
    } else {
      $(this).find('span').text('Читать дальше');
    }
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
    loop: true,
    autoplay: {
      delay: 8000,
    },
    pagination: {
      el: '.partners__btns .swiper-dots',
    },
    breakpoints: {
      1000: {
        slidesPerView: 4,
        spaceBetween: 21,
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
  });

  var partners__slider = new Swiper('#partners__slider-page', {
    slidesPerView: 1,
    spaceBetween: 10,
    watchSlidesProgress: true,
    loop: true,
    autoplay: {
      delay: 8000,
    },
    navigation: {
      nextEl: '.partners__slider-wrap .swiper-button-next',
      prevEl: '.partners__slider-wrap .swiper-button-prev',
    },
    pagination: {
      el: '.partners__slider-wrap .swiper-dots',
    },
    breakpoints: {
      1000: {
        slidesPerView: 5,
        spaceBetween: 21,
      },
      800: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      575: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      450: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
  });

  var projects__partners = new Swiper('#projects__partners', {
    slidesPerView: 1,
    spaceBetween: 10,
    watchSlidesProgress: true,
    loop: true,
    autoplay: {
      delay: 8000,
    },
    navigation: {
      nextEl: '.projects__partners .swiper-button-next',
      prevEl: '.projects__partners .swiper-button-prev',
    },
    pagination: {
      el: '.projects__partners .swiper-dots',
    },
    breakpoints: {
      1000: {
        slidesPerView: 5,
        spaceBetween: 21,
      },
      800: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      575: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      450: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
  });


  $(window).on("load", function () {
    setTimeout(function() {
      var reviews__slider = new Swiper('#reviews__slider', {
        slidesPerView: 1,
        spaceBetween: 15,
        watchSlidesProgress: true,
        loop: true,
        autoplay: {
          delay: 8000,
        },
        navigation: {
          nextEl: '.reviews__btns .swiper-button-next',
          prevEl: '.reviews__btns .swiper-button-prev',
        },
        pagination: {
          el: '.reviews__btns .swiper-dots',
        },
        on: {
          init: function () {
            equalHeightSwiper('#reviews__slider');
          },
        },
      });
    },1500);
  });



  if (window.matchMedia('(max-width: 991px)').matches) {
    var scr1__menu = new Swiper('#scr1__menu', {
      slidesPerView: 1,
      spaceBetween: 20,
      watchSlidesProgress: true,
      pagination: {
        el: '.scr1__menu-dots .swiper-dots',
      },
      breakpoints: {
        850: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        700: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        650: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        500: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      },
      on: {
        init: function () {
          $(window).on("load", function () {
            setTimeout(function() {
              equalHeightSwiper('#scr1__menu');
            },2300);
          });
        },
      },
    });
  }

  if (window.matchMedia('(max-width: 900px)').matches) {
    var pricesNav = new Swiper('#prices__nav', {
      slidesPerView: 1,
      spaceBetween: 8,
      watchSlidesProgress: true,
      breakpoints: {
        767: {
          slidesPerView: 5,
          spaceBetween: 8,
        },
        700: {
          slidesPerView: 4,
          spaceBetween: 8,
        },
        575: {
          slidesPerView: 3,
          spaceBetween: 8,
        },
        300: {
          slidesPerView: 2,
          spaceBetween: 8,
        },
      },
      on: {
        init: function () {
          $(window).on("load", function () {
            equalHeightSwiper('#prices__nav');
          });
        },
      },
    });
  }

  $(window).resize(function() {

    var currScreeWidth = $(window).width();

    if (currScreeWidth != screenWidth) {
      equalHeightSwiper('#scr1__menu');
      equalHeightSwiper('#prices__nav');
    }

    screenWidth = $(window).width();
  });



})(jQuery);
