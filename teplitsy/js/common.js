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
  $('.ware .js-tabs-link').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().siblings().removeClass('current');
    $(this).parent().addClass('current');
    $('.ware__tab').not(_href).hide();
    $(_href).fadeIn();
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('html, body').animate({scrollTop: $(_href).offset().top - 70 +'px'});
    }
    lazyload();
  });

  $('img').on('dragstart', function (event) {
    event.preventDefault();
  });


  /* СЛАЙДЕРЫ */

  $('.prod__slider').each(function(xi,xel) {
    var xId = '#' + $(xel).attr('id');
    var xBtns = $(xel).siblings('.prod__slider-btns');
    var scr1__slider = new Swiper(xId, {
      slidesPerView: 2,
      spaceBetween: 10,
      watchSlidesProgress: true,
      watchOverflow: true,
      spaceBetween: 8,
      autoplay: {
        delay: 8000,
      },
      navigation: {
        nextEl: xBtns.find('.swiper-button-next'),
        prevEl: xBtns.find('.swiper-button-prev'),
      },
      breakpoints: {
        991: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        700: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      },
    });
  });

  $('.ware__slider').each(function(xi,xel) {
    var xId = '#' + $(xel).attr('id');
    var xBtns = $(xel).siblings('.ware__slider-btns');
    var scr1__slider = new Swiper(xId, {
      slidesPerView: 2,
      spaceBetween: 10,
      watchSlidesProgress: true,
      watchOverflow: true,
      spaceBetween: 8,
      autoplay: {
        delay: 8000,
      },
      navigation: {
        nextEl: xBtns.find('.swiper-button-next'),
        prevEl: xBtns.find('.swiper-button-prev'),
      },
      breakpoints: {
        900: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        767: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      },
    });
  });

  $('.ware__tab:not(#ware__tab-0').hide();

  var machinesSlider = new Swiper('#machines__slider', {
    slidesPerView: 2,
    spaceBetween: 10,
    watchSlidesProgress: true,
    watchOverflow: true,
    loop: true,
    autoplay: {
      delay: 8000,
    },
    navigation: {
      nextEl: '.machines__slider-btns .swiper-button-next',
      prevEl: '.machines__slider-btns .swiper-button-prev',
    },
    breakpoints: {
      700: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
    },
  });

  var brandsSlider = new Swiper('#brands__slider', {
    slidesPerView: 2,
    spaceBetween: 10,
    watchSlidesProgress: true,
    watchOverflow: true,
    loop: true,
    autoplay: {
      delay: 8000,
    },
    navigation: {
      nextEl: '.brands__slider-btns .swiper-button-next',
      prevEl: '.brands__slider-btns .swiper-button-prev',
    },
    breakpoints: {
      1070: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      767: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      650: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      450: {
        slidesPerView: 3,
        spaceBetween: 10,
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
