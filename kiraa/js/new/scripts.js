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

  $('#header-burger').click(function() {
    $('.header__hidden').addClass('active');
  });

  $('#header-burger--toClose').click(function() {
    $('.header__hidden').removeClass('active');
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
    $(".header").toggleClass("fixed", (fromTop > 682));
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
    screenWidth = $(window).width();
  });

})(jQuery);
