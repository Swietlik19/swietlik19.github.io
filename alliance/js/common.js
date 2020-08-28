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

  /* инициализация scrollbar'а */
  $(window).on("load",function(){
    $(".proj__content").mCustomScrollbar({
      theme: 'dark-3',
    });
  });

  /* инициализация fullpage скролла */
  if (!(window.matchMedia('(max-width: 1000px)').matches)) {

    $('#page_fp').fullpage({
      onLeave: function(xPrev, xNext){
        // $(origin.item).find('.toAnimate').each(function(xi,xel) {
        //   var xAnim = $(xel).attr('data-anim-name');
        //   setTimeout(function() {
        //     $(xel).removeClass('animated');
        //     $(xel).removeClass(xAnim);
        //   },500);

        // });

        $($('#page_fp .section')[xNext - 1]).find('.toAnimate').each(function(xi,xel) {
          var xAnim = $(xel).attr('data-anim-name');
          var xDelay = $(xel).attr('data-anim-delay');
          $(xel).addClass('animated ' + xAnim);
          $(xel).css('animationDelay', xDelay);
        });

        if(xNext > '1'){
          $('.header-phones').addClass('fixed');
          $('.header-phones__link').addClass('fixed');
          $('.to-top').addClass('fixed');
        } else {
          $('.header-phones').removeClass('fixed');
          setTimeout(function () {$('.header-phones__link').removeClass('fixed');},300);
          $('.to-top').removeClass('fixed');
        }
      },
    });

  }

  $('.scr1__scroll').click(function(e) {
    e.preventDefault();
    $.fn.fullpage.moveTo(2);
  });

  $('.to-top').click(function(e) {
    e.preventDefault();
    if ( $('.page_fp ').length == 0 ) return;

    if (!(window.matchMedia('(max-width: 1000px)').matches)) {
      $.fn.fullpage.moveTo(1);
    } else {
      var _href = $(this).attr('href');
      $('html, body').animate({scrollTop: $(_href).offset().top - 20 +'px'});
      return false;
    }
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
    $('.page-menu').toggleClass('active');
    $('.page-menu .menu > li').removeClass('active');


    if ($(this).hasClass('active')) {
      if (!(window.matchMedia('(max-width: 575px)').matches)) {
        setTimeout(function() {
          setTimeout(function() {
            $('.page-menu .menu').each(function(xi,xel) {
              var xMenu = $(xel);
              xMenu.children('li').each(function(xi,xel) {
                setTimeout(function() {$(xel).addClass('active');}, (xi + 1) * 150);
              });
            });
          }, 150);
        },700);
      } else {
        setTimeout(function() {
          $('.page-menu .menu > li').addClass('active');
        }, 250);
      }
    } else {
      $('.page-menu .menu > li').removeClass('active');
    }
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

    if (window.matchMedia('(max-width: 1000px)').matches) {
      $(".to-top").toggleClass("fixed", (fromTop > 600));

      if (fromTop > 10) {
        $('.header-phones').addClass('fixed');
        $('.header-phones__link').addClass('fixed');
      } else {
        $('.header-phones').removeClass('fixed');
        setTimeout(function () {$('.header-phones__link').removeClass('fixed');},300);
      }
    }

    if (window.matchMedia('(max-width: 767px)').matches) {
      $(".header").toggleClass("fixed", (fromTop > 10));
      $(".page-menu").toggleClass("fixed", (fromTop > 10));
    }

  });


  // Табы
  $('.proj:not(.proj--page) .proj__nav a').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().siblings().removeClass('current');
    $(this).parent().addClass('current');
    $('.proj__tab').not(_href).hide();
    $(_href).fadeIn();
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('html, body').animate({scrollTop: $(_href).offset().top - 70 +'px'});
    }
  });

  $('img').on('dragstart', function (event) {
    event.preventDefault();
  });

  $('.your-file input').change(function() {
    var fileName = $(this).val();
    fileName = fileName.replace (/\\/g, '/').split ('/').pop ();
    $(this).parents('label').find('span').text(fileName);
  });

  $('.text-input input, .text-input textarea').focus(function() {
    $(this).parents('.text-input').addClass('active');
  });

  $('.text-input input, .text-input textarea').blur(function() {
    if ( $(this).val().length == 0 ) $(this).parents('.text-input').removeClass('active');
  });

  $('.scr1__dots > li').on('mouseenter', function() {
    $(this).find('.scr1__dots-text').fadeIn();
  });
  $('.scr1__dots > li').on('mouseleave', function() {
    setTimeout(() => $(this).find('.scr1__dots-text').fadeOut('fast'),200);
  });


  /* СЛАЙДЕРЫ */
  // function equalHeightSwiper(sliderID) {
  //   $(sliderID).find('.swiper-slide').height('auto');
  //   var slickTrackHeight = Math.max($(sliderID).find('.swiper-slide').outerHeight());
  //   $(sliderID).find('.swiper-slide').css('height', slickTrackHeight + 'px');
  // }

  $('.proj:not(.proj--page) .proj__slider').each(function(xi,xel) {
    var xId = '#' + $(xel).attr('id');
    var xBtns = $(xel).parents('.proj__slider-wrap').find('.proj__slider-nav');
    var proj__slider = new Swiper(xId, {
      slidesPerView: 1,
      watchSlidesProgress: true,
      watchOverflow: true,
      spaceBetween: 10,
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
            // equalHeightSwiper(xId);
            if (xi == $('.proj__slider').length - 1) {
              $('.proj__tab:not(#proj__tab-0)').hide();
            }
          });
        },
      },
      breakpoints: {
        575: {
          pagination: {
            el: xBtns.find('.swiper-pagination'),
            type: 'fraction',
          },
        },
      },
    });
  });

  $('.proj--page .proj__slider').each(function(xi,xel) {
    var xId = '#' + $(xel).attr('id');
    var xBtns = $(xel).parents('.proj__slider-wrap').find('.proj__slider-nav');
    var proj__slider = new Swiper(xId, {
      slidesPerView: 1,
      watchSlidesProgress: true,
      watchOverflow: true,
      spaceBetween: 10,
      navigation: {
        nextEl: xBtns.find('.swiper-button-next'),
        prevEl: xBtns.find('.swiper-button-prev'),
      },
      pagination: {
        el: xBtns.find('.swiper-dots'),
      },
    });
  });


  // var clientsSlider = new Swiper('#clients__slider', {
  //   slidesPerView: 3,
  //   slidesPerColumn: 3,
  //   spaceBetween: 25,
  //   slidesPerColumnFill: 'row',
  //   watchSlidesProgress: true,
  //   watchOverflow: true,
  //   pagination: {
  //     el: '.clients__btns .swiper-dots',
  //   },
  //   breakpoints: {
  //     1400: {
  //       slidesPerView: 3,
  //       slidesPerColumn: 3,
  //       spaceBetween: 25,
  //     },
  //     575: {
  //       slidesPerView: 3,
  //       slidesPerColumn: 3,
  //       spaceBetween: 10,
  //     },
  //     400: {
  //       slidesPerView: 2,
  //       slidesPerColumn: 4,
  //       spaceBetween: 10,
  //       loop: true,
  //     },
  //   },
  // });

  if (window.matchMedia('(max-width: 767px)').matches) {
    var featList = new Swiper('#feat__list', {
      slidesPerView: 1,
      spaceBetween: 16,
      watchSlidesProgress: true,
      watchOverflow: true,
      breakpoints: {
        650: {
          slidesPerView: 2,
        },
      },
    });
  } else {
    $('.page_fp .feat__item').each(function(xi,xel) {
      $(xel).css('height',$(xel).outerHeight() - 40 + 'px');
      $(xel).find('.feat__hidden').css('display','none');
    });
  }

  $(window).resize(function() {

    var currScreeWidth = $(window).width();

    if (currScreeWidth != screenWidth) {

    }

    screenWidth = $(window).width();
  });

})(jQuery);
