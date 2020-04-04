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

  /* инициализация скролла на главной странице */
  if (!(window.matchMedia('(max-width: 900px)').matches)) {
    $('#page_wr_main').fullpage({
      responsiveWidth: 900,
      anchors: ['fp-scr1', 'fp-scr_about', 'fp-scr_contact'],
      navigation: true,
      navigationTooltips: ['01', '02', '03'],

      scrollingSpeed: 700,
      scrollOverflow: true,
      afterLoad: function(origin, destination, direction){
        $(this).find('.toAnimate').each(function(xi,xel) {
          var xAnim = $(xel).attr('data-anim-name');
          var xDelay = $(xel).attr('data-anim-delay');
          $(xel).addClass('animated ' + xAnim);
          $(xel).css('animationDelay', xDelay);
        });
        if(destination == '2' || destination == '3'){
          $('.header').addClass('visible');
        } else {
          $('.header').removeClass('visible');
        }
      },
      onLeave: function(origin, destination, direction){
        $(this).find('.toAnimate').each(function(xi,xel) {
          var xAnim = $(xel).attr('data-anim-name');
          $(xel).removeClass('animated');
          $(xel).removeClass(xAnim);
        });

        $($('#page_wr_main section')[destination - 1]).find('.toAnimate').each(function(xi,xel) {
          var xAnim = $(xel).attr('data-anim-name');
          var xDelay = $(xel).attr('data-anim-delay');
          $(xel).addClass('animated ' + xAnim);
          $(xel).css('animationDelay', xDelay);
        });

        if(destination == '2' || destination == '3'){
          $('.header').addClass('visible');
        } else {
          $('.header').removeClass('visible');
        }
      },
    });
  }

  if ($('#page_wr_main').length > 0 && !(window.matchMedia('(max-width: 900px)').matches) ) {
    $.fn.fullpage.setAllowScrolling(false);
  }

  $(window).on("load", function () {
    $('.page_preloader').delay(1000).fadeOut('slow');
    setTimeout(function() {$('body').removeClass('disabled');},1400);

    if ($('#page_wr_main').length > 0 && !(window.matchMedia('(max-width: 900px)').matches)) {
      setTimeout(function() {$.fn.fullpage.setAllowScrolling(true);}, 1000);
    }
  });

  /* Плавный скролл к якорю для всех ссылок с классом "inner-link" */
  $(function(){
    $('.inner-link[href^="#"]').click(function(e){
      e.preventDefault();
      var _href = $(this).attr('href');
      $('html, body').animate({scrollTop: $(_href).offset().top - 40 +'px'});


      return false;
    });
  });

 $(function(){
    $('.menu-anchor[href^="#"]').click(function(e){
      e.preventDefault();
      var _href = $(this).attr('href');

      if (!(window.matchMedia('(max-width: 900px)').matches)) {
        var _anchor = $(_href).attr('data-anchor');
        $.fn.fullpage.moveTo(_anchor);

        if ($('#page_wr_main').length > 0) {
          $.fn.fullpage.setAllowScrolling(true);
        }
      } else {
        $('html, body').animate({scrollTop: $(_href).offset().top - 40 +'px'});
      }

      $('.scr1__menu').removeClass('active');
      // $('body').removeClass('disabled');
      $('html').removeClass('disabled');
      $('.scr1__menu .menu > li > a').each(function(xi,xel) {
        $(xel).removeClass('active');
      });

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

  $('#scr1__burger, #header__burger').click(function() {
    $('.scr1__menu .menu > li > a').removeClass('active');
    $('.scr1__menu').toggleClass('active');
    // $('body').toggleClass('disabled');
    $('html').toggleClass('disabled');
    if ($('#page_wr_main').length > 0 && !(window.matchMedia('(max-width: 900px)').matches)) {
      $.fn.fullpage.setAllowScrolling(false);
    }
    setTimeout(function() {$('.scr1__menu .menu > li > a').each(function(xi,xel) {
      setTimeout(function() {$(xel).addClass('active');}, (xi + 1) * 150);
    });}, 150);
  });

  $('.scr1__menu-close').click(function() {
    $('.scr1__menu').removeClass('active');
    // $('body').removeClass('disabled');
    $('html').removeClass('disabled');
    if ($('#page_wr_main').length > 0 && !(window.matchMedia('(max-width: 900px)').matches)) {
      $.fn.fullpage.setAllowScrolling(true);
    }
    $('.scr1__menu .menu > li > a').each(function(xi,xel) {
      $(xel).removeClass('active');
    });
  });

  $('.header__menu .menu > li > a').hover(function() {
    var w = $(this).outerWidth();
    var index = $(this).parent().index();
    $('.header__menu .decor-line').css('width','' + w + '');
    $('.header__menu .decor-line').css('opacity','1');
    $('.header__menu .decor-line').offset({left: $(this).offset().left});
  });

  $('.header__menu .menu').mouseleave(function() {
    $('.header__menu .decor-line').css('opacity','0');
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

  $('.your-file input').change(function() {
    var fileName = $(this).val();
    fileName = fileName.replace (/\\/g, '/').split ('/').pop ();
    $(this).parents('label').find('span').text(fileName);
  });

  // фиксированные шапка
  $(window).on("scroll", function() {
    var fromTop = $(document).scrollTop();
    if (window.matchMedia('(max-width: 900px)').matches) {
      $(".scr1__header").toggleClass("fixed", (fromTop > 10));
    }
    $(".header").toggleClass("fixed", (fromTop > 10));

    if ( ($('#page_wr_main').length > 0 && window.matchMedia('(max-width: 900px)').matches) || ($('#page_wr_main').length = 0)) {
      $(".to-top").toggleClass("fixed", (fromTop > 680));
    }

    $(".socials--aside").toggleClass("stopped", (fromTop > 680));
  });

  $('img').on('dragstart', function (event) {
    event.preventDefault();
  });


  /* СЛАЙДЕРЫ */
  function equalHeightSwiper(sliderID) {
    $(sliderID).find('.swiper-slide').height('auto');
    var slickTrackHeight = Math.max($(sliderID).find('.swiper-slide').outerHeight());
    $(sliderID).find('.swiper-slide').css('height', slickTrackHeight + 'px');
  }

  var reviewsSlider = new Swiper('#reviews__slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    watchSlidesProgress: true,
    loop: true,
    autoplay: {
      delay: 8000,
    },
    navigation: {
      nextEl: '#reviews__slider .swiper-button-next',
      prevEl: '#reviews__slider .swiper-button-prev',
    },
    pagination: {
      el: '#reviews__slider .swiper-dots',
    },
    on: {
      init: function () {
        $(window).on("load", function () {
          equalHeightSwiper('#reviews__slider');
        });
      },
    },
  });

  // if (window.matchMedia('(max-width: 767px)').matches) {
  //   var partnersSlider = new Swiper('#partners__slider', {
  //     slidesPerView: 2,
  //     watchSlidesProgress: true,
  //     loop: true,
  //     autoplay: {
  //       delay: 8000,
  //     },
  //     pagination: {
  //       el: '#partners__slider .swiper-dots',
  //     },
  //     breakpoints: {
  //       575: {
  //         slidesPerView: 4,
  //       },
  //       400: {
  //         slidesPerView: 3,
  //       },
  //     },
  //   });
  // }

  $(window).resize(function() {

    var currScreeWidth = $(window).width();

    if (currScreeWidth != screenWidth) {

    }

    screenWidth = $(window).width();
  });

})(jQuery);
