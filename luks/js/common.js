(function($){

  /* Для проверки resize, т.к. на мобильном Хроме при скролле срабывает resize (без изменения ширины) */
  var screenWidth = $(window).width();

  /* Инициализация wow */
  wow = new WOW({mobile: false})
  wow.init();

  /* Нужно для IE и некоторых других браузеров, чтобы понимал svg спрайты во внешних файлах */
  svg4everybody();

  /* полифил для object-fit */
  objectFitImages($('[data-object-fit-cover],[data-object-fit-contain],[data-object-fit-contain-bottom]'), {watchMQ: true});

  /* инициализация fancybox */
  $(".fancybox").fancybox({
    padding: 0,
    scrolling: 'auto'
  });

  /* Плавный скролл к якорю для всех ссылок с классом "inner-link" */
  $(function(){
    $('.inner-link[href^="#"]').click(function(){
      var _href = $(this).attr('href');
      $('html, body').animate({scrollTop: $(_href).offset().top - 80 +'px'});
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

  $('#header-burger').click(function() {
    $(this).toggleClass('active');
    $('.header__nav').toggleClass('active');
  });

  $('#nav-burger, .page_wr').click(function() {
    $('#header-burger').removeClass('active');
    $('.header__nav').removeClass('active');
  });

  /* Открытие / закрытие модалок (кроме карты) */
  $('a.open-modal').click(function(event){
    event.preventDefault();
    var _href = $(this).attr('href');
    $(_href).addClass('active');
    $(_href + ' .modal__content').addClass('visible');
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


  $(document).mouseup(function (e) {
    var container = $(".team__wrap");
    if (container.has(e.target).length === 0){
      $('.team__big').hide();
      $('.without-cite').hide();
      $('.with-cite').hide();
      $('.team__wrap').removeClass('active');
      $('.team__cite').hide();
    }
  });

  $('.modal .close').click(function(){
    closeModal();
  });

  $(document).keydown(function(eventObject){
    if( eventObject.which == 27 ){
      closeModal();
      $('#header-burger').removeClass('active');
      $('.header__nav').removeClass('active');
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

  /* Раскрытие меню в футере на мобильных устройствах */
  function openSubMenu() {
    $.each(['header__nav','footer__menu'],function(xi,xe) {
      $('.' + xe + ' .menu-arrow').click(function(e) {
        if (window.matchMedia('(max-width: 992px)').matches) {
          $(this).toggleClass('active');
          $(this).siblings('.sub-menu').slideToggle();

          if (xe == 'header__nav') {
            $(this).parents('.menu-item').siblings('.menu-item').find('.menu-arrow').removeClass('active');
            $(this).parents('.menu-item').siblings('.menu-item').find('.sub-menu').slideUp();
          } else {
            $(this).parents('.footer__col').siblings('.footer__col').find('.menu-arrow').removeClass('active');
            $(this).parents('.footer__col').siblings('.footer__col').find('.sub-menu').slideUp();
          }

        }
      });
    });
  }

  openSubMenu();

  function makeTabs(xPrefix) {
    $('.' + xPrefix + '__nav-item a').click(function(event) {
      event.preventDefault();
      $(this).parent().siblings().removeClass("active");

      if ( !($(this).parent().hasClass('active')) ) {
        $(this).parent().addClass('active');
        var tab = $(this).attr('href');
        $('.' + xPrefix + '__tab').not(tab).hide();
        $(tab).fadeIn();

        if (window.matchMedia('(max-width: 768px)').matches) {
          $('html, body').animate({scrollTop: $('.' + xPrefix + '__nav').offset().top - 40 +'px'});
        }
      }
    });
  }

  makeTabs('complex');

  $('.projects__nav-item a').click(function(event) {
    event.preventDefault();
    $(this).parent().siblings().removeClass("active");

    if ( !($(this).parent().hasClass('active')) ) {
      $(this).parent().addClass('active');
      var tab = $(this).attr('href');
      $('.projects__tab').not(tab).removeClass('active');
      $(tab).addClass('active');

      if (window.matchMedia('(max-width: 768px)').matches) {
        $('html, body').animate({scrollTop: $('.projects__nav').offset().top - 40 +'px'});
      }
    }
  });


  function makeCircle() {
    if (document.querySelector('.steps__circle') !== null) {
      var circleParent = $('.steps__circle');

      var koeff1 = 4.84;
      var koeff2 = 1.65;

      circleParent.each(function(xi,el) {
        var items = $(el).find('.steps__item');

        var length = items.length;
        var arc = koeff1 * (1 / length);
        var radius = ($(el).width()) / 2;

        for (var i = 0; i < length; i++) {
          var angle = i * arc - koeff2;
          var x = radius * Math.cos(angle);
          var y = radius * Math.sin(angle);

          $(items[i]).css('left','calc(50% + ' + x + 'px - 10px)');
          $(items[i]).css('top','calc(50% + ' + y + 'px - 30px)');
        }
      });
    }
  }

  makeCircle();

  // фиксированные шапка
  $(window).on("scroll", function() {
    var fromTop = $(document).scrollTop();
    $(".header").toggleClass("fixed", (fromTop > 5));
  });

  /* Выравниваем расстояния между ячейками "сот" (костылик) */
  function sotyDistance() {
    var sota = $('#scr_team .team__item:nth-of-type(1)');
    var sotaWidth = sota.width();
    var sotaHeight = sota.height();
    var marginLeft = (sota.width() + 5) / 2 + 'px';
    // 4.32 - коэффициент, вычисленный опытным путём
    var marginTop = sota.height() / 4.32 + 'px';
    marginTop = '-' + marginTop;

    $('#scr_team .team__item:nth-of-type(n + 7)').css('marginTop',marginTop);
    $('#scr_team .team__item:nth-of-type(7)').css('marginLeft',marginLeft);
  }

  sotyDistance();

  $('.team__item--with-img').click(function() {
    $('.team__big').show();
    $('.team__name .team__name-wrap').empty();
    $(this).find('.team__info').clone().appendTo('.team__name .team__name-wrap');

    $('.team__wrap').addClass('active');

    if ( $(this).hasClass('team__item--main') ) {
      $('.without-cite').hide();
      $('.with-cite').show();
      $('.team__cite').show();
    } else {
      var xImg = $(this).find('pattern').find('image').attr('xlink:href');
      $('.with-cite').hide();
      $('.team__cite').hide();
      $('.without-cite').show();
      $('.without-cite').find('pattern').find('image').attr('xlink:href',xImg);
    }
  });

  /* Resize */
  $(window).resize(function(){
    if ($(window).width() != screenWidth) {
      makeCircle();
      sotyDistance();
    }
    screenWidth = $(window).width();
  });

})(jQuery);
