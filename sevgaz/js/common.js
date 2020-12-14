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
    $('.header__top').toggleClass('active');
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
  $('.prod .tabs__nav a').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().siblings().find('a').removeClass('current');
    $(this).addClass('current');
    $('.prod__tab').not(_href).hide();
    $(_href).fadeIn();
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('html, body').animate({scrollTop: $(_href).offset().top - 70 +'px'});
    }
  });

  $('.blog .tabs__nav a').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().siblings().find('a').removeClass('current');
    $(this).addClass('current');
    $('.blog__tab').not(_href).hide();
    $(_href).fadeIn();
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('html, body').animate({scrollTop: $(_href).offset().top - 70 +'px'});
    }
  });

  $('.pay__nav a').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().siblings().find('a').removeClass('current');
    $(this).addClass('current');
    $('.pay__tab').not(_href).hide();
    $(_href).fadeIn();
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('html, body').animate({scrollTop: $(_href).offset().top - 70 +'px'});
    }
  });

  $('img').on('dragstart', function (event) {
    event.preventDefault();
  });

  /* Анимация чисел */
  function animateNums() {
    var show = true;
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена

        $('.scr1__nums .scr1__num span').css('opacity', '1');
        $('.scr1__nums .scr1__num span').spincrement({
            thousandSeparator: " ",
            duration: 2400
        });
        show = false;
    });
  }

  animateNums();

  $('.your-file input').change(function() {
    var fileName = $(this).val();
    fileName = fileName.replace (/\\/g, '/').split ('/').pop ();
    $(this).parents('label').find('span').text(fileName);
  });

  if (window.matchMedia('(max-width: 991px)').matches) {
    $('.footer__col:not(:nth-of-type(3)) .footer__title').click(function() {
      $(this).parents('.footer__col').siblings('.footer__col:not(:nth-of-type(3))').find('.footer__text, .menu').hide();
      $(this).parents('.footer__col').siblings('.footer__col:not(:nth-of-type(3))').find('.footer__title').removeClass('active');
      $(this).siblings('.footer__text, .menu').toggle();
      $(this).toggleClass('active');
    });
  }

  /* СЛАЙДЕРЫ */

  $(window).on("load", function () {
    $('.prod__slider').each(function(xi,xel) {
      var xId = '#' + $(xel).attr('id');
      var xBtns = $(xel).siblings('.prod__slider-btns');
      var prodSlider = new Swiper(xId, {
        slidesPerView: 2,
        watchSlidesProgress: true,
        watchOverflow: true,
        spaceBetween: 6,
        pagination: {
          el: xBtns.find('.swiper-dots'),
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
        on: {
          init: function () {
            $(xId).parents('.prod__tab:not(#prod__tab-0)').hide();
          },
        },
      });
    });
  });

  $(window).on("load", function () {
    $('.blog__slider').each(function(xi,xel) {
      var xId = '#' + $(xel).attr('id');
      var xBtns = $(xel).siblings('.blog__slider-btns');
      var blogSlider = new Swiper(xId, {
        slidesPerView: 2,
        watchSlidesProgress: true,
        watchOverflow: true,
        spaceBetween: 6,
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
        on: {
          init: function () {
            $(xId).parents('.blog__tab:not(#blog__tab-0)').hide();
          },
        },
      });
    });
  });

})(jQuery);
