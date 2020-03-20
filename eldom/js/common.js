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


  /* СЛАЙДЕРЫ */
  // function equalHeightSwiper(sliderID) {
  //   $(sliderID).find('.swiper-slide').height('auto');
  //   var slickTrackHeight = Math.max($(sliderID).find('.swiper-slide').outerHeight());
  //   $(sliderID).find('.swiper-slide').css('height', slickTrackHeight + 'px');
  // }

  // var projectsSlider = new Swiper('#projects__slider', {
  //   slidesPerView: 1,
  //   spaceBetween: 20,
  //   watchSlidesProgress: true,
  //   loop: true,
  //   autoplay: {
  //     delay: 8000,
  //   },
  //   navigation: {
  //     nextEl: '.projects__wrap .swiper-button-next',
  //     prevEl: '.projects__wrap .swiper-button-prev',
  //   },
  //   pagination: {
  //     el: '#projects__slider .swiper-dots',
  //   },
  //   on: {
  //     init: function () {
  //       $(window).on("load", function () {
  //         equalHeightSwiper('#projects__slider');
  //       });
  //     },
  //   },
  // });

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

  $(window).resize(function() {

    var currScreeWidth = $(window).width();

    if (currScreeWidth != screenWidth) {

    }

    screenWidth = $(window).width();
  });

})(jQuery);
