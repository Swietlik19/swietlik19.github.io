(function($){

  /* Для проверки resize, т.к. на мобильном Хроме при скролле срабывает resize (без изменения ширины) */
  let screenWidth = $(window).width();

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
      let _href = $(this).attr('href');
      $('html, body').animate({scrollTop: $(_href).offset().top - 20 +'px'});
      return false;
    });
  });

  /* Плавный скролл "вверх" */
  $('a[href^="#page_wr"]').click(function(event){
    event.preventDefault;
    let _href = $(this).attr('href');
    $('html, body').animate({scrollTop: '0px'});
    return false;
  });

  $('.burger').click(function() {
    $(this).toggleClass('active');
    if (window.matchMedia('(max-width: 767px)').matches) {
      if ($(this).hasClass('active')) {
        $('.header__bottom').fadeIn();
      } else {
        $('.header__bottom').hide();
      }
    }
  });

  /* Открытие / закрытие модалок (кроме карты) */
  $('a.open-modal').click(function(event){
    event.preventDefault();
    let _href = $(this).attr('href');
    if ( $(_href).length > 0 ) {
      $(_href).addClass('active');
      $(_href + ' .modal__content').addClass('visible');
    }
  });

  function closeModal() {
    let activeCount = $('.modal.active').length;
    if ( activeCount > 1 ) {
      $($('.modal.active')[activeCount - 1]).removeClass('active');
      $('.modal__callback2 .modal__content').removeClass('visible');
    } else {
      $('.modal').removeClass('active');
      $('.modal__content').removeClass('visible');
    }
  }

  $(document).mouseup(function (e) {
    let container = $(".modal .modal__content");
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
      $(this).parent().toggleClass('active');
      $(this).siblings().slideToggle();
      if (hideOther) {
        $(this).parent().siblings().removeClass('active');
        $(this).parent().siblings().find('.hidden').slideUp();
      }
    });
  }

  toggleHidden('.faq',true);
  $('.faq__item:first-of-type').addClass('active');
  $('.faq__item:first-of-type .hidden').show();

  function toggleHidden2(xParent, hideOther) {
    $(xParent + ' .top').click(function () {
      $(this).parent().toggleClass('active');
      $(this).siblings().toggleClass('active');
      if (hideOther) {
        $(this).parent().siblings().removeClass('active');
        $(this).parent().siblings().find('.hidden').removeClass('active');
      }
    });
  }
  if (!(window.matchMedia('(max-width: 991px)').matches)) {
    toggleHidden2('.why__list', true);
  }

  // фиксированные шапка
  $(window).on("scroll", function() {
    let fromTop = $(document).scrollTop();
    if (fromTop > 10) {
      $(".header").addClass("fixed");
      if (!(window.matchMedia('(max-width: 767px)').matches)) {
        $('.header__phones .open-modal').appendTo('.header__bottom nav');
        $('.header .logo').appendTo('.header__bottom nav');
      }
    } else {
      $(".header").removeClass("fixed");
      if (!(window.matchMedia('(max-width: 767px)').matches)) {
        $('.header__bottom .open-modal').appendTo('.header__phones');
        $('.header__bottom .logo').appendTo('.header .logo__wrap');
      }
    }

    $(".to-top").toggleClass("fixed", (fromTop > 600));
  });

  // Табы
  $('.build__nav ul a').click(function(event) {
    event.preventDefault();
    let _href = $(this).attr('href');
    $(this).parent().siblings().removeClass('current');
    $(this).parent().addClass('current');
    $('.build__tab').not(_href).hide();
    $(_href).fadeIn();
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('html, body').animate({scrollTop: $(_href).offset().top - 70 +'px'});
    }
  });

  $('img').on('dragstart', function (event) {
    event.preventDefault();
  });


  /* СЛАЙДЕРЫ */

  $('.prod__slider').each(function(xi,xel) {
    let xBtns = $(xel).parents('.prod__wrap').find('.prod__slider-btns');
    let prodSlider = new Swiper($(xel), {
      slidesPerView: 1,
      spaceBetween: 8,
      watchSlidesProgress: true,
      watchOverflow: true,
      navigation: {
        nextEl: xBtns.find('.swiper-button-next'),
        prevEl: xBtns.find('.swiper-button-prev'),
      },
      pagination: {
        el: xBtns.find('.swiper-dots'),
      },
      breakpoints: {
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        767: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        500: {
          slidesPerView: 2,
        },
      },
    });
  });

  let stepsSlider = new Swiper('#steps__slider', {
    slidesPerView: 1,
    spaceBetween: 8,
    watchSlidesProgress: true,
    watchOverflow: true,
    navigation: {
      nextEl: '.steps__slider-btns .swiper-button-next',
      prevEl: '.steps__slider-btns .swiper-button-prev',
    },
    pagination: {
      el: '.steps__slider-btns .swiper-dots',
    },
    breakpoints: {
      1400: {
        slidesPerView: 3,
        spaceBetween: 54,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 3,
      },
      575: {
        slidesPerView: 2,
      },
    },
  });

  let instaSlider = new Swiper('#insta__slider', {
    slidesPerView: 1,
    spaceBetween: 8,
    watchSlidesProgress: true,
    watchOverflow: true,
    navigation: {
      nextEl: '.insta__slider-btns .swiper-button-next',
      prevEl: '.insta__slider-btns .swiper-button-prev',
    },
    pagination: {
      el: '.insta__slider-btns .swiper-dots',
    },
    breakpoints: {
      1400: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      900: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      575: {
        slidesPerView: 3,
      },
      400: {
        slidesPerView: 2,
      },
    },
  });

  let blogSlider = new Swiper('#blog__slider', {
    slidesPerView: 1,
    spaceBetween: 8,
    watchSlidesProgress: true,
    watchOverflow: true,
    navigation: {
      nextEl: '.blog__slider-btns .swiper-button-next',
      prevEl: '.blog__slider-btns .swiper-button-prev',
    },
    pagination: {
      el: '.blog__slider-btns .swiper-dots',
    },
    breakpoints: { 
      1400: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 8,
      },
    },
  });

  if (window.matchMedia('(max-width: 1070px)').matches) {
    let partnersSlider = new Swiper('#partners__slider', {
      slidesPerView: 2,
      spaceBetween: 8,
      watchSlidesProgress: true,
      watchOverflow: true,
      navigation: {
        nextEl: '.partners__slider-btns .swiper-button-next',
        prevEl: '.partners__slider-btns .swiper-button-prev',
      },
      pagination: {
        el: '.partners__slider-btns .swiper-dots',
      },
      breakpoints: {
        650: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  }

  let reviewsSlider = new Swiper('#reviews__slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    watchSlidesProgress: true,
    watchOverflow: true,
    navigation: {
      nextEl: '.reviews__btns .swiper-button-next',
      prevEl: '.reviews__btns .swiper-button-prev',
    },
    pagination: {
      el: '.reviews__btns .swiper-pagination',
      type: "fraction",
    },
  });

  function relocateInstaLink() {
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('.insta__wrap').before($('.insta__link'));
    } else {
      $('.insta__top').append($('.insta__link'));
    }
  }

  function relocateBurger() {
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('.header__top').prepend($('.burger'));
    } else {
      $('.header__bottom nav').prepend($('.burger'));
    }
  }

  relocateInstaLink();
  relocateBurger();

  $(window).resize(function() {

    let currScreeWidth = $(window).width();

    if (currScreeWidth != screenWidth) {
      relocateInstaLink();
      relocateBurger();
    }

    screenWidth = $(window).width();
  });

})(jQuery);
