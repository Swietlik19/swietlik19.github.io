(function($){

  /* Для проверки resize, т.к. на мобильном Хроме при скролле срабывает resize (без изменения ширины) */
  var screenWidth = $(window).width();
  var screenHeight = $(window).height();

  /* Инициализация wow */
  wow = new WOW({mobile: false})
  wow.init();

  /* Нужно для IE и некоторых других браузеров, чтобы понимал svg спрайты во внешних файлах */
  svg4everybody();

  /* полифил для object-fit */
  objectFitImages($('[data-object-fit-cover],[data-object-fit-contain],[data-object-fit-cover-left]'), {watchMQ: true});

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
    var pageHeight = $('body').height();

    $(".header").toggleClass("fixed", (fromTop > 150));

    if ( !(window.matchMedia('(max-width: 1110px)').matches) ) {
      $(".header:not(.opened)").toggleClass("noactive", (fromTop > 100));
      if (fromTop <= 100) {
        $(".header").removeClass('opened');
      }
    }

    $('.page-line__line').css('height', fromTop + screenHeight - 200 + 'px');
    if (fromTop + screenHeight > pageHeight - 300) {
      $('.page-line__line').css('height', pageHeight - 12 + 'px');
      $('.footer .decor-line').addClass('visible');
    }
    $(".to-top").toggleClass("fixed", (fromTop > 600));
  });

  $('.decor-line').each(function(xi,xel) {
    var xTop = $(xel).offset().top;

    if ($(xel).parents('.footer').length == 0) {
      $(window).on("scroll", function() {
        var fromTop = $(document).scrollTop();
        if ( (fromTop + screenHeight - 100 >= xTop) && ( !($(xel).hasClass('visible')) ) ) {
          $(xel).addClass('visible');
        } else if (fromTop + screenHeight - 100 < xTop) {
          $(xel).removeClass('visible');
        }
      });
    }
  });

  $('.header .logo').click(function() {
    if ($('.header').hasClass('fixed')) {
      $(".header").toggleClass("noactive");
      $(".header").toggleClass("opened");
    }
  });

  $('.burger').click(function() {
    $('.header .menu').toggleClass('opened');
    $('body').toggleClass('disabled');
  });

  // Табы
  $('.types__menu > li > a').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().siblings().removeClass('current');
    $(this).parent().addClass('current');
    $('.types__tab').not(_href).hide();
    $(_href).fadeIn();
    $(_href).css('display','flex');
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('html, body').animate({scrollTop: $(_href).offset().top - 70 +'px'});
    }
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

  var casesSlider = new Swiper('#cases__slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    watchSlidesProgress: true,
    watchOverflow: true,
    navigation: {
      nextEl: '.cases__wrap .swiper-button-next',
      prevEl: '.cases__wrap .swiper-button-prev',
    },
    pagination: {
      el: '.cases__wrap .swiper-dots',
    },
  });

  // if (window.matchMedia('(max-width: 767px)').matches) {
  //   var partnersSlider = new Swiper('#partners__slider', {
  //     slidesPerView: 2,
  //     watchSlidesProgress: true,
          // watchOverflow: true,
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
