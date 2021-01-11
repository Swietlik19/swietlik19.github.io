(function($){

  /* Для проверки resize, т.к. на мобильном Хроме при скролле срабывает resize (без изменения ширины) */
  var screenWidth = $(window).width();

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
  $('.program .tabs__nav a').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().siblings().find('a').removeClass('active');
    $(this).addClass('active');
    $('.program__tab').not(_href).hide();
    $(_href).fadeIn();
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('html, body').animate({scrollTop: $(_href).offset().top - 70 +'px'});
    }
  });

  $('.portfolio .tabs__nav a').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().siblings().find('a').removeClass('active');
    $(this).addClass('active');
    $('.portfolio__tab').not(_href).hide();
    $(_href).fadeIn();
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('html, body').animate({scrollTop: $(_href).offset().top - 70 +'px'});
    }
  });

  $('img').on('dragstart', function (event) {
    event.preventDefault();
  });


  /* СЛАЙДЕРЫ */

  $('.program__slider').each(function(xi,xel) {
    var xId = '#' + $(xel).attr('id');
    var xBtns = $(xel).siblings('.program__slider-btns');
    var scr1__slider = new Swiper(xId, {
      slidesPerView: 1,
      spaceBetween: 15,
      watchSlidesProgress: true,
      watchOverflow: true,
      autoplay: {
        delay: 8000,
      },
      navigation: {
        nextEl: xBtns.find('.swiper-button-next'),
        prevEl: xBtns.find('.swiper-button-prev'),
      },
    });
  });

  $('.program__tab:not(#program__tab-0').hide();

  $('.portfolio-slider').each(function(xi,xel) {
    var xId = '#' + $(xel).attr('id');
    var xBtns = $(xel).siblings('.portfolio-slider-btns');
    var xDots = $(xel).parent().siblings('.portfolio-slider-bottom');
    var portfolioSlider = new Swiper(xId, {
      slidesPerView: 2,
      spaceBetween: 30,
      watchSlidesProgress: true,
      watchOverflow: true,
      navigation: {
        nextEl: xBtns.find('.swiper-button-next'),
        prevEl: xBtns.find('.swiper-button-prev'),
      },
      pagination: {
        el: xDots,
        type: 'custom',
        renderCustom: function (swiper, current, total) {
          var xHtml = '<div class="swiper-pag"><span class="swiper-cur">' + current + '</span> / <span class="swiper-total">' + total + '</span></div>';
          xHtml += '<div class="swiper-dots">';
          for (var i = 0; i < total; i++) {
            xHtml += '<span class="swiper-dot"></span>';
          }
          xHtml += '</div>';
          return xHtml;
        }
      },
      breakpoints: {
        767: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      },
    });
  });

  $('.portfolio__tab:not(#portfolio__tab-0').hide();

  var licsSlider = new Swiper('#lics__slider', {
    slidesPerView: 2,
    spaceBetween: 10,
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.lics__slider-btns .swiper-button-next',
      prevEl: '.lics__slider-btns .swiper-button-prev',
    },
    pagination: {
      el: '.lics__slider-btns .swiper-dots',
    },
    breakpoints: {
      767: {
        slidesPerView: 3,
        spaceBetween: 28,
      },
      700: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      575: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
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
