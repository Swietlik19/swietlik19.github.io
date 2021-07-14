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
    $('.header__bottom').fadeToggle();
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
  function toggleHidden(_parent,hideOther) {
    $(_parent + ' .top').click(function() {
      $(this).toggleClass('active');
      $(this).siblings().slideToggle();
      $(this).parent().siblings().find('.top').removeClass('active');
      $(this).parent().siblings().find('.hidden').slideUp();
    });
  }

  toggleHidden('.faq');

  // $('.announce__top').click(function() {
  //   $(this).toggleClass('active');
  //   $(this).siblings().slideToggle();
  //   var _itemNum = $(this).parents('.swiper-slide').index();
  //   if (_itemNum % 2 == 0) {
  //     $(this).parents('.swiper-slide').next().find('.announce__top').toggleClass('active');
  //     $(this).parents('.swiper-slide').next().find('.announce__hidden').slideToggle();
  //   } else {
  //     $(this).parents('.swiper-slide').prev().find('.announce__top').toggleClass('active');
  //     $(this).parents('.swiper-slide').prev().find('.announce__hidden').slideToggle();
  //   }
  // });

  $('.faq__list > li:first-of-type .top').addClass('active');
  $('.faq__list > li:first-of-type .hidden').show();

  // фиксированные шапка
  $(window).on("load scroll", function() {
    var fromTop = $(document).scrollTop();
    $(".header").toggleClass("fixed", (fromTop > 10));
  });

  // Табы
  // $('.prod-item__nav a').click(function(event) {
  //   event.preventDefault();
  //   var _href = $(this).attr('href');
  //   $(this).parent().siblings().removeClass('current');
  //   $(this).parent().addClass('current');
  //   $('.services__tab').not(_href).hide();
  //   $(_href).fadeIn();
  //   if (window.matchMedia('(max-width: 767px)').matches) {
  //     $('html, body').animate({scrollTop: $(_href).offset().top - 70 +'px'});
  //   }
  // });

  $('.scr_rate__text--sort').click(function() {
    $(this).toggleClass('scr_rate__text--desc');
  });

  var _rateWidth = $('.scr_rate__rate--overlay').outerWidth();

  function paintRate(_wrap,_rate) {
    var _newWidth = _rateWidth * _rate / 5;
    _wrap.find('.scr_rate__rate--overlay').css('width',_newWidth + 'px');
  }

  $('.scr_rate__wrap').each(function(xi,xel) {
    paintRate($(xel),$(xel).data('rate'));
  });

  $('.scr_rate__rate > li button').click(function() {
    var _rate = $(this).parent().index() + 1;
    paintRate($(this).parents('.scr_rate__wrap'),_rate);
  });

  $('.scr_rate__rate > li button').hover(function() {
    var _ind = $(this).parent().index() + 1;
    $(this).parents('.scr_rate__wrap').find('button').removeClass('active');
    $(this).parents('.scr_rate__wrap').find('button').removeClass('disabled');
    $(this).parents('.scr_rate__wrap').find('.scr_rate__rate--underlay li').each(function(xi,xel) {
      if ( (xi + 1) <= _ind ) {
        $(xel).find('button').addClass('active');
      }
    });
    $(this).parents('.scr_rate__wrap').find('.scr_rate__rate--overlay li').each(function(xi,xel) {
      if ( (xi + 1) > _ind ) {
        $(xel).find('button').addClass('disabled');
      }
    });
  },function() {
    $(this).parents('.scr_rate__wrap').find('button').removeClass('active');
    $(this).parents('.scr_rate__wrap').find('button').removeClass('disabled');
  });

  $('img').on('dragstart', function (event) {
    event.preventDefault();
  });

  function countPregnacy() {
    var _pregnacyCount = +$('.header__count b').text().replace(' ','');
    var _pregnacyCountLast = _pregnacyCount % 10;

    if (_pregnacyCountLast == 0) {
      var _pregnacyBeforeLast = 9;
    } else {
      _pregnacyBeforeLast = _pregnacyCountLast - 1;
    }

    if (_pregnacyCountLast == 9) {
      var _pregnacyNextLast = 0;
    } else {
      _pregnacyNextLast = _pregnacyCountLast + 1;
    }

    $('.header__count-add').text(_pregnacyCountLast);
    $('.header__count-add').append('<span>' + _pregnacyBeforeLast + '</span>');
    $('.header__count-add').append('<span>' + _pregnacyNextLast + '</span>');

  };

  countPregnacy();

  $('.header__item--choose').click(function() {
    $(this).toggleClass('active');
  });

  /* СЛАЙДЕРЫ */


  if (window.matchMedia('(max-width: 991px)').matches) {
    var announceSlider = new Swiper('#announce__slider', {
      slidesPerView: 1,
      spaceBetween: 7,
      watchSlidesProgress: true,
      loop: true,
      watchOverflow: true,
      pagination: {
        el: '.announce__slider-btns .swiper-dots',
      },
      breakpoints: {
        900: {
          slidesPerView: 2,
        },
      },
    });
  }

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
