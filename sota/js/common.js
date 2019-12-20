(function($){

  /* Для проверки resize, т.к. на мобильном Хроме при скролле срабывает resize (без изменения ширины) */
  var screenWidth = $(window).width();

  /* Инициализация wow */
  wow = new WOW({mobile: false})
  wow.init();

  /* Нужно для IE и некоторых других браузеров, чтобы понимал svg спрайты во внешних файлах */
  svg4everybody();

  /* полифил для object-fit */
  objectFitImages($('[data-object-fit-cover],[data-object-fit-contain],[data-object-fit-cover-top]'), {watchMQ: true});

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
    $('.header').toggleClass('active');
    // $('body').toggleClass('disabled');
  });

  $('.header__menu .arrow').click(function(el) {
    el.preventDefault();
    $(this).toggleClass('active');
    $(this).parents('.menu-item-has-children').find('.sub-menu').slideToggle();
    $(this).parents('.menu-item-has-children').siblings().find('.sub-menu').slideUp();
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

  $("a.link--map").fancybox({
    "padding": 0, // отступ контента от краев окна
    "width" : 2500, // ширина окна, px (425px - по умолчанию)
    "height" : 550, // высота окна, px(355px - по умолчанию)
    "overlayOpacity" : 0.8, // Прозрачность затенения (0.3 по умолчанию)
    "hideOnContentClick" :false, // Если TRUE закрывает окно по клику по любой его точке (кроме элементов навигации). Поумолчанию TRUE
    "centerOnScroll" : false, // Если TRUE окно центрируется на экране, когда пользователь прокручивает страницу
    "margin": 0,
    "autoSize": false
  });

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

  /* Раскрытие меню в футере на мобильных устройствах */
  // function openSubMenu() {
  //   $.each(['footer-menu'],function(xi,xe) {
  //     $('.' + xe + ' h4').click(function(e) {
  //       if (window.matchMedia('(max-width: 900px)').matches) {
  //         $(this).toggleClass('active');
  //         $(this).siblings('.menu').slideToggle();
  //         $(this).parents('.' + xe).find('.' + xe + '__item').each(function(i, el) {
  //           if ( $(el).has(e.target).length === 0 && !($(el).hasClass(xe + '__item--strong')) ) {
  //             $(el).find('.menu').slideUp();
  //             $(el).find('h4').removeClass('active');
  //           }
  //         });
  //       }
  //     });
  //   });
  // }

  // openSubMenu();

  // $('.page_wr, .footer').hover(function() {
  //   if ( !(window.matchMedia('(max-width: 992px)').matches) ) {
  //     $('.header .menu > .menu-item-has-children .sub-menu').slideUp();
  //     $('.header .menu > .menu-item-has-children').removeClass('active');
  //   }
  // });

  // $('.page_wr, .footer').click(function() {
  //   if (window.matchMedia('(max-width: 992px)').matches) {
  //     $('.header .menu > .menu-item-has-children .sub-menu').slideUp();
  //     $('.header .menu > .menu-item-has-children').removeClass('active');
  //   }
  // });

  // фиксированная "наверх"
  $(window).on("scroll", function() {
    var fromTop = $(document).scrollTop();
    $(".to-top").toggleClass("fixed", (fromTop > 682));
  });

  // $('.header .menu > li > a').hover(function(e) {
  //   if ( !(window.matchMedia('(max-width: 992px)').matches) ) {
  //     $(this).parents('.menu').children('li').each(function(i, el) {
  //       if ( $(el).has(e.target).length === 0 ) {
  //         $(el).find('.sub-menu').slideUp();
  //       }
  //     });
  //     $(this).siblings('.sub-menu').slideDown();
  //     $(this).parents('.menu-item-has-children').addClass('active');
  //   }
  // });

  // $('.header .menu > li > a').click(function(e) {
  //   if ( $(this).parent('.menu-item-has-children').length > 0 ) {
  //     event.preventDefault();
  //   }
  //   if (window.matchMedia('(max-width: 992px)').matches) {
  //     $(this).parents('.menu').children('li').each(function(i, el) {
  //       if ( $(el).has(e.target).length === 0 ) {
  //         $(el).find('.sub-menu').slideUp();
  //       }
  //     });
  //     $(this).siblings('.sub-menu').slideToggle();
  //     $(this).parents('.menu-item-has-children').toggleClass('active')
  //   }
  // });

  // Табы
  $('.events__nav a').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().siblings().removeClass('active');
    $(this).parent().addClass('active');
    $('.events__tab').not(_href).hide();
    $(_href).fadeIn();
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('html, body').animate({scrollTop: $(_href).offset().top - 20 +'px'});
    }
  });

  // Табы
  $('.modal__nav a').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().siblings().removeClass('active');
    $(this).parent().addClass('active');
    $('.modal__tab').not(_href).hide();
    $(_href).fadeIn();
  });

  var modalTabHeight = 0;
  $('.modal__tab').each(function(xi,xel) {
    if ($(xel).outerHeight() > modalTabHeight) {
      modalTabHeight = $(xel).outerHeight();
    }
  });

  if (!(window.matchMedia('(max-width: 575px)').matches)) {
    $('.modal__tab').css('height', modalTabHeight + 'px');
  }
  $('.modal__tab:not(#modal__tab-0)').css('display', 'none');


  $('img').on('dragstart', function (event) {
    event.preventDefault();
  });


  /* Слайдеры */

  var scr1Thumbs = new Swiper('#scr1__slider-thumbs', {
    spaceBetween: 1,
    slidesPerView: 1,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
      991: {
        slidesPerView: 4,
      },
      767: {
        slidesPerView: 3,
      },
      430: {
        slidesPerView: 2,
      },
    }
  });
  var scr1Swiper = new Swiper('#scr1__slider', {
    navigation: {
      nextEl: '.scr1__bottom .swiper-button-next',
      prevEl: '.scr1__bottom .swiper-button-prev',
    },
    thumbs: {
      swiper: scr1Thumbs
    },
    on: {
      slideChange: function () {
        $('.slider__curr').text(scr1Swiper.activeIndex + 1);
      },
    }
  });
  var corpPhotosSlider = new Swiper('#corp-photos__slider', {
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    centeredSlides: true,
    loop: true,
    breakpoints: {
      767: {
        slidesPerView: 3,
      },
      575: {
        spaceBetween: 30,
      },
      450: {
        slidesPerView: 2,
      },
    }
  });
  var postSlider = new Swiper('#post__slider', {
    slidesPerView: 1,
    watchSlidesProgress: true,
    loop: true,
    navigation: {
      nextEl: '.post__slider .swiper-button-next',
      prevEl: '.post__slider .swiper-button-prev',
    },
    pagination: {
      el: '.post__slider .slider__dots',
    }
  });

  function equalHeightSwiper(sliderID) {
    $(sliderID).find('.swiper-slide').height('auto');
    var slickTrack = $(sliderID).find('.swiper-wrapper');
    var slickTrackHeight = $(slickTrack).outerHeight();
    $(sliderID).find('.swiper-slide').css('height', slickTrackHeight + 'px');
  }

  equalHeightSwiper('#scr1__slider');
  equalHeightSwiper('#scr1__slider-thumbs');

  var xCount = $('.scr1__bottom .swiper-slide').length;
  $('.slider__sum').text(xCount);

  $(window).resize(function() {

    var currScreeWidth = $(window).width();

    if (currScreeWidth != screenWidth) {
      equalHeightSwiper('#scr1__slider');
      equalHeightSwiper('#scr1__slider-thumbs');
    }

    screenWidth = $(window).width();
  });


})(jQuery);
