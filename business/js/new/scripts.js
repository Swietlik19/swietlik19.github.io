(function($){

  /* Для проверки resize, т.к. на мобильном Хроме при скролле срабывает resize (без изменения ширины) */
  var screenWidth = $(window).width();

  /* Инициализация wow */
  wow = new WOW({mobile: false})
  wow.init();

  /* Нужно для IE и некоторых других браузеров, чтобы понимал svg спрайты во внешних файлах */
  svg4everybody();

  /* полифил для object-fit */
  objectFitImages($('[data-object-fit],[data-object-fit2]'), {watchMQ: true});

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
    $('.header__wrap').toggleClass('active');
    $('body').toggleClass('disabled');
  });

  /* Открытие / закрытие модалок (кроме карты) */
  $('a.open-modal').click(function(event){
    event.preventDefault();
    var _href = $(this).attr('href');
    $(_href).addClass('active');
    $(_href + ' .modal__content').addClass('visible');
    $('.page_wr').addClass('blur-it');
    $('.footer').addClass('blur-it');
    $('.header').addClass('blur-it');
  });

  function closeModal() {
    $('.modal').removeClass('active');
    $('.modal__content').removeClass('visible');
    $('.page_wr').removeClass('blur-it');
    $('.footer').removeClass('blur-it');
    $('.header').removeClass('blur-it');
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
      $('.header .burger__wrap').removeClass('active');
      $('.header__wrap').removeClass('active');
    }
  });

  /* Табы "О компании" */
  $('.about__nav .about__link').click(function(event) {
    event.preventDefault();
    $(this).toggleClass('active');
    $(this).parent().siblings().find('.about__link').removeClass('active');
    var _href = $(this).attr('href');
    $('.about__tab:not(' + _href + ')').removeClass('active');
    $(_href).addClass('active');
    if (window.matchMedia('(max-width: 750px)').matches) {
      $('html, body').animate({scrollTop: $('.about__nav').offset().top - 20 +'px'});
    }
  });

  /* Табы features */
  $('.features__nav .features__link').click(function(event) {
    event.preventDefault();
    $(this).toggleClass('active');
    $(this).parent().siblings().find('.features__link').removeClass('active');
    var _href = $(this).attr('href');
    $('.features__tab:not(' + _href + ')').slideUp();
    $(_href).slideDown();
    if (window.matchMedia('(max-width: 750px)').matches) {
      $('html, body').animate({scrollTop: $('.features__tabs').offset().top - 40 +'px'});
    }
  });

  $('.questions .top').click(function() {
    $(this).find('.open').toggleClass('active');
    $(this).siblings().slideToggle();
    $(this).parent().siblings().find('.open').removeClass('active');
    $(this).parent().siblings().find('.hidden').slideUp();
    if (window.matchMedia('(max-width: 576px)').matches) {
      $('html, body').animate({scrollTop: $('.questions__wrap').offset().top - 20 +'px'});
    }
  });

  $('.page_wr').click(function() {
    $('.header .burger__wrap').removeClass('active');
    $('.header__wrap').removeClass('active');
    $('body').removeClass('disabled');
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
    $.each(['footer-menu'],function(xi,xe) {
      $('.' + xe + ' h4').click(function(e) {
        if (window.matchMedia('(max-width: 768px)').matches) {
          $(this).toggleClass('active');
          $(this).siblings('.menu').slideToggle();
          $(this).parents('.menu-df').find('.' + xe + '__item').each(function(i, el) {
            if ( $(el).has(e.target).length === 0 && !($(el).hasClass(xe + '__item--single')) ) {
              $(el).find('.menu').slideUp();
              $(el).find('h4').removeClass('active');
            }
          });
        }
      });
    });
  }

  openSubMenu();

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

  // фиксированные шапка
  $(window).on("scroll", function() {
    var fromTop = $(document).scrollTop();
    $(".header").toggleClass("margined", (fromTop > 682));
    if ( window.matchMedia('(max-width: 992px)').matches ) {
      $(".header__mobile").toggleClass("fixed", (fromTop > 682));
    } else {
      $(".header__nav").toggleClass("fixed", (fromTop > 682));
    }
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

  /* Resize */
  $(window).resize(function(){
    if ($(window).width() != screenWidth) {

    }
  });

})(jQuery);
