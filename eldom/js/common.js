(function($){

  /* Для проверки resize, т.к. на мобильном Хроме при скролле срабывает resize (без изменения ширины) */
  var screenWidth = $(window).width();

  /* Инициализация wow */
  wow = new WOW({mobile: false})
  wow.init();

  /* Нужно для IE и некоторых других браузеров, чтобы понимал svg спрайты во внешних файлах */
  svg4everybody();

  /* полифил для object-fit */
  objectFitImages($('[data-object-fit-cover],[data-object-fit-cover-top],[data-object-fit-contain]'), {watchMQ: true});

  $(window).on("load", function () {
    $('.preloader').delay(1000).fadeOut('slow');
    setTimeout(function() {$('body').removeClass('disabled');},1400);
  });

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

  $('#header__burger').click(function() {
    $(this).toggleClass('active');
    $('.header__menu').slideToggle();
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

  // Табы
  $('.cowork__nav a').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().siblings().removeClass('current');
    $(this).parent().addClass('current');
    $('.cowork__tab').not(_href).hide();
    $(_href).fadeIn();
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('html, body').animate({scrollTop: $(_href).offset().top - 70 +'px'});
    }
  });


  // фиксированные шапка
  $(window).on("scroll", function() {
    var fromTop = $(document).scrollTop();
    $(".header").toggleClass("fixed", (fromTop > 10));
    $(".to-top").toggleClass("fixed", (fromTop > 680));
  });

  $('.header__socials-btn').click(function() {
    $('.header__socials-list').toggleClass('active');
  });

  $('img').on('dragstart', function (event) {
    event.preventDefault();
  });

  if (window.matchMedia('(max-width: 700px)').matches) {
    $('.gallery__btns').appendTo('.gallery__wrap');
  }


  /* СЛАЙДЕРЫ */
  function equalHeightSwiper(sliderID) {
    $(sliderID).find('.swiper-slide').height('auto');
    var slickTrackHeight = Math.max($(sliderID).find('.swiper-slide').outerHeight());
    $(sliderID).find('.swiper-slide').css('height', slickTrackHeight + 'px');
  }

  var gallerySlider = new Swiper('#gallery__slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    watchSlidesProgress: true,
    loop: true,
    navigation: {
      nextEl: '.gallery__btns .swiper-button-next',
      prevEl: '.gallery__btns .swiper-button-prev',
    },
    pagination: {
      el: '.gallery__btns .swiper-dots',
    },
  });

  var categorySlider = new Swiper('#category__slider', {
    slidesPerView: 1,
    spaceBetween: 10,
    watchSlidesProgress: true,
    loop: true,
    navigation: {
      nextEl: '.category__gallery .swiper-button-next',
      prevEl: '.category__gallery .swiper-button-prev',
    },
    breakpoints: {
      1070: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      991: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      800: {
        spaceBetween: 10,
        slidesPerView: 4,
      },
      575: {
        spaceBetween: 10,
        slidesPerView: 3,
      },
      400: {
        spaceBetween: 10,
        slidesPerView: 2,
      },
    },
  });

  if (window.matchMedia('(max-width: 575px)').matches) {
    var partnersSlider = new Swiper('#partners__slider', {
      slidesPerView: 2,
      spaceBetween: 40,
      watchSlidesProgress: true,
      pagination: {
        el: '#partners__slider .swiper-dots',
      },
      breakpoints: {
        450: {
          slidesPerView: 3,
          spaceBetween: 60,
        },
        380: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  }

  if (window.matchMedia('(max-width: 700px)').matches) {
    var partnersSlider = new Swiper('#steps__slider', {
      slidesPerView: 1,
      watchSlidesProgress: true,
      pagination: {
        el: '#steps__slider .swiper-dots',
      },
      breakpoints: {
        500: {
          slidesPerView: 2,
        },
      },
    });
  }

  var reviewsSlider = new Swiper('#reviews__slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    watchSlidesProgress: true,
    watchOverflow: true,
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
        $(window).on("load", function () {
          equalHeightSwiper('#reviews__slider');
        });
      },
    },
  });

  var scr1Slider = new Swiper('#scr1__slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    watchSlidesProgress: true,
    watchOverflow: true,
    loop: true,
    autoplay: {
      delay: 8000,
    },
    navigation: {
      nextEl: '.scr1__slider .swiper-button-next',
      prevEl: '.scr1__slider .swiper-button-prev',
    },
    pagination: {
      el: '.scr1__slider .swiper-dots',
    },
    on: {
      init: function () {
        $(window).on("load", function () {
          equalHeightSwiper('#scr1__slider');
        });
      },
    },
  });

  $(window).resize(function() {

    var currScreeWidth = $(window).width();

    if (currScreeWidth != screenWidth) {
      equalHeightSwiper('#scr1__slider');
      if (window.matchMedia('(max-width: 700px)').matches) {
        $('.gallery__btns').appendTo('.gallery__wrap');
      } else {
        $('.gallery__btns').appendTo('.gallery__content');
      }
    }

    screenWidth = $(window).width();
  });

})(jQuery);
