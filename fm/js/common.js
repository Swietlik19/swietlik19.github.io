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
    $('.burger').toggleClass('active');
    $('.side-menu').toggleClass('active');
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

  toggleHidden('.jobs',true);
  $('.jobs__col:first-of-type .jobs__item:first-of-type .open').addClass('active');
  $('.jobs__col:first-of-type .jobs__item:first-of-type .hidden').show();

  $('.card__cell--free').click(function() {
    var _line = $(this).data('book-line');
    var _date = $(this).data('book-date');
    var _time = $(this).data('book-time');

    $('#modal__tracks .form__text--line b').text(_line);
    $('#modal__tracks .form__text--date').text(_date);
    $('#modal__tracks .form__text--time').text(_time);

    $('#modal__tracks').addClass('active');
    $('#modal__tracks .modal__content').addClass('visible');
  });


  if (window.matchMedia('(max-width: 1170px)').matches) {
    $('.card__cell--free').each(function(xi,xel) {
      var _cost = $(xel).data('book-price');
      $(xel).text(_cost);
    });
  } else {
    $('.card__cell--free').hover(function() {
      var _cost = $(this).data('book-price');
      $('.card__tooltip b').text(_cost);
      $('.card__tooltip').appendTo($(this)).addClass('active');
    }, function() {
      $('.card__tooltip').removeClass('active');
    });
  }

  // Табы
  $('.card__timeline-item').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().siblings().find('.card__timeline-item').removeClass('current');
    $(this).addClass('current');
    $('.card__tab').not(_href).hide();
    $(_href).fadeIn();
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('html, body').animate({scrollTop: $(_href).offset().top - 70 +'px'});
    }
  });

  // Кнопка "вверх"
  $(window).on("scroll", function() {
    var fromTop = $(document).scrollTop();
    $(".to-top").toggleClass("fixed", (fromTop > 600));
  });

  $('img').on('dragstart', function (event) {
    event.preventDefault();
  });

  $('.your-file input').change(function() {
    var fileName = $(this).val();
    fileName = fileName.replace (/\\/g, '/').split ('/').pop ();
    $(this).parents('label').find('.sl').text(fileName);
  });

  $('.side-menu .menu > li').hover(function() {
    $(this).siblings().find('.sub-menu').hide();
    $(this).siblings().find('.arrow').removeClass('active');
    $(this).find('.sub-menu').show();
    $(this).find('.arrow').addClass('active');
    $('.side-menu').addClass('wide');
  });
  $('.page_wr').hover(function() {
    $('.side-menu .menu .sub-menu').hide();
    $('.side-menu .menu > li .arrow').removeClass('active');
    $('.side-menu').removeClass('wide');
  });
  $('.side-menu .menu > li .arrow').click(function(e) {
    e.preventDefault();
  });

  $('.scr_map__slider .swiper-slide a').click(function(e) {
    e.preventDefault();
    var _href = $(this).attr('href');
    $('.scr_map__tab').not(_href).hide();
    $('.scr_map__tooltip').removeClass('active');
    $('.scr_map__part').removeClass('active');
    $('.scr_map__part').removeClass('checked');
    $('.scr_map__place').removeClass('active');
    $(_href).fadeIn();

    $(this).parents('.swiper-slide').siblings().removeClass('swiper-slide-active');
    $(this).parents('.swiper-slide').addClass('swiper-slide-active');
  });


  /* Всплывающие подсказки для интерактивной карты */
  function tooltipCoords(link) {
      var myPath = $(link);
      var popup = $('.scr_map__tooltip');
      $(popup).addClass('active');
      if ( !(window.matchMedia('(max-width: 991px)').matches) ) {
        var w = myPath[0].getBoundingClientRect().width;
        var h = myPath[0].getBoundingClientRect().height;

        var top = $(link).offset().top - $(popup).outerHeight() + h / 6;
        var left = $(link).offset().left + w / 2 - $(popup).outerWidth() / 2;
        $(popup).offset({top:top, left:left});
      }
  }

  $('.scr_map__part').hover(function() {
    $('.scr_map__part').removeClass('active');
    $(this).addClass('active');
    if ($(this).hasClass('scr_map__part--bank')) {
      $('.scr_map__img').hide();
      $('.scr_map__tooltip').addClass('scr_map__tooltip--rent');
      $('.scr_map__tooltip span').text('Банкомат');
      $('.scr_map__tooltip a').hide();
    } else if ($(this).hasClass('scr_map__part--toilet')) {
      $('.scr_map__img').hide();
      $('.scr_map__tooltip').addClass('scr_map__tooltip--rent');
      $('.scr_map__tooltip span').text('Туалет');
      $('.scr_map__tooltip a').hide();
    } else if ( $(this).hasClass('scr_map__part--rent') ) {
      $('.scr_map__img').hide();
      $('.scr_map__tooltip a').show();
      $('.scr_map__tooltip').addClass('scr_map__tooltip--rent');
      $('.scr_map__tooltip span').text('Арендуется');
      $('.scr_map__tooltip a').hide();
    } else if ( $(this).hasClass('scr_map__part--rent-free') ) {
      $('.scr_map__img').hide();
      $('.scr_map__tooltip a').show();
      $('.scr_map__tooltip').addClass('scr_map__tooltip--rent');
      $('.scr_map__tooltip span').text('Сдается в аренду');
      $('.scr_map__tooltip a').text('Арендовать помещение ');
    } else {
      var _id = $(this).attr('id').replace("scr_map__part-","") ;
      arrMapObjects.forEach(function(item, i, arr) {
        if (item.id == _id) {
          _title = item.title;
          _imgSrc = item.imgSrc;
          _linkUrl = item.href;
        }
      });
      $('.scr_map__img').show();
      $('.scr_map__tooltip').removeClass('scr_map__tooltip--rent');
      $('.scr_map__tooltip span').text(_title);
      $('.scr_map__tooltip img').attr('src',_imgSrc);
      $('.scr_map__tooltip a').attr('href',_linkUrl);
      $('.scr_map__tooltip a').text('Перейти на страницу');
      $('.scr_map__content a').show();
    }
    tooltipCoords(this);
  });

  arrMapObjects.forEach(function(item, i, arr) {
    if ($('#scr_map__logo-' + item.id).length > 0) {
      $('#scr_map__logo-' + item.id).attr('xlink:href',item.imgSrcMap);
      $('#scr_map__part-' + item.id).addClass('scr_map__part--' + item.type);
    }
  });

  $('.page_wr').hover(function() {
    var _check = true;
    $('.scr_map__svg').each(function(xi,xel) {
      if ($(xel).is(':hover') || $('.scr_map__tooltip').is(':hover')) _check = false;
    });

    if ( _check ) {
      $('.scr_map__tooltip').removeClass('active');
      $('.scr_map__part').removeClass('active');
    }
  });

  $('.scr_map__place').click(function(e) {
    e.preventDefault();
    var _type = $(this).data('map-place');
    $(this).parent().siblings().find('a').removeClass('active');
    $(this).toggleClass('active');
    $('.scr_map__tooltip').removeClass('active');
    $('.scr_map__part').removeClass('active');
    $('.scr_map__part:not(.scr_map__part--' + _type + ')').removeClass('checked');
    $('.scr_map__part--' + _type).toggleClass('checked');
  });

  /* СЛАЙДЕРЫ */

  var brandsSlider = new Swiper('#brands__slider', {
    slidesPerView: 2,
    spaceBetween: 8,
    watchSlidesProgress: true,
    loop: true,
    navigation: {
      nextEl: '.brands__slider-btns .swiper-button-next',
      prevEl: '.brands__slider-btns .swiper-button-prev',
    },
    pagination: {
      el: '.brands__slider-btns .swiper-dots',
    },
    breakpoints: {
      767: {
        slidesPerView: 4,
        spaceBetween: 29,
      },
      650: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      500: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
    },
  });

  var photosSlider = new Swiper('#photos__slider', {
    slidesPerView: 1,
    spaceBetween: 8,
    watchSlidesProgress: true,
    loop: true,

    navigation: {
      nextEl: '.photos__slider-btns .swiper-button-next',
      prevEl: '.photos__slider-btns .swiper-button-prev',
    },
    pagination: {
      el: '.photos__slider-btns .swiper-dots',
    },
    breakpoints: {
      1400: {
        slidesPerView: 1,
        spaceBetween: 32,
      },
      500: {
        slidesPerView: 1,
        spaceBetween: 12,
      },
    },
  });

  var scrMapSlider = new Swiper('#scr_map__slider', {
    slidesPerView: 1,
    spaceBetween: 10,
    watchSlidesProgress: true,
    slideToClickedSlide: true,
    navigation: {
      nextEl: '.scr_map__wrap .swiper-button-next',
      prevEl: '.scr_map__wrap .swiper-button-prev',
    },
    breakpoints: {
      500: {
        slidesPerView: 'auto',
        spaceBetween: 23,
      },
    },
  });

  var cardTimeline = new Swiper('#card__timeline', {
    slidesPerView: 1,
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.card__timeline-wrap .swiper-button-next',
      prevEl: '.card__timeline-wrap .swiper-button-prev',
    },
    breakpoints: {
      1400: {
        slidesPerView: 7,
      },
      1170: {
        slidesPerView: 6,
      },
      575: {
        slidesPerView: 5,
      },
      500: {
        slidesPerView: 4,
      },
      410: {
        slidesPerView: 3,
      },
      300: {
        slidesPerView: 2,
      },
    },
  });

  $('.card__tracks').each(function(xi,xel) {
    var xId = '#' + $(xel).attr('id');
    var xBtns = $(xel).parents('.card__sub-tab').find('.card__tracks-btns');
    var xTabs = false;
    if ($(this).parents('.card__sub-tabs').find('.card__sub-tab').length > 0 && xi > 0) {
      var xTab = $(xel).parents('.card__sub-tab');
      xTabs = true;
    }
    var prodSlider = new Swiper(xId, {
      slidesPerView: 2,
      watchSlidesProgress: true,
      watchOverflow: true,
      spaceBetween: 8,
      pagination: {
        el: xBtns.find('.swiper-dots'),
      },
      on: {
        init: function () {
          $(window).on("load", function () {
            if (xTabs) {
              xTab.hide();
            }
          });
        },
      },
      breakpoints: {
        400: {
          slidesPerView: 6,
          spaceBetween: 32,
        },
      },
    });
  });

  $('.card__tab:not(:first-of-type)').hide();

  $(window).resize(function() {

    var currScreeWidth = $(window).width();

    if (currScreeWidth != screenWidth) {

    }

    screenWidth = $(window).width();
  });

})(jQuery);
