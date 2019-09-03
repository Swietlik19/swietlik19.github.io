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

  $('#header-burger,#header-burger--mobile').click(function() {
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
    var container = $(".header__menu-wrap");
    if (container.has(e.target).length === 0){
      $('.header__menu').removeClass('active');
    }

  });

  $('.modal .close').click(function(){
    closeModal();
  });

  $(document).keydown(function(eventObject){
    if( eventObject.which == 27 ){
      closeModal();
      $('.header__menu').removeClass('active');
    }
  });

  $('.catalog-nav__list > .catalog-nav__item').hover(function() {
    if ( !(window.matchMedia('(max-width: 800px)').matches) ) {
      $(this).addClass('active');
      $('.overlay').addClass('active');
      $('.catalog-nav').addClass('active');
      $(this).find('.catalog-nav__sub').show();
    }
  },function(){
    if ( !(window.matchMedia('(max-width: 800px)').matches) ) {
      $(this).removeClass('active');
      $('.overlay').removeClass('active');
      $('.catalog-nav').removeClass('active');
      $(this).find('.catalog-nav__sub').hide();
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
  $('.footer__menu .menu-arrow').click(function(e) {
    if (window.matchMedia('(max-width: 992px)').matches) {
      $(this).toggleClass('active');
      $(this).siblings('.sub-menu').slideToggle();
      $(this).parents('.menu-item').siblings('.menu-item').find('.sub-menu').slideUp();
      $(this).parents('.menu-item').siblings('.menu-item').find('.menu-arrow').removeClass('active');
    }
  });

  $('.page_wr, .footer, .scr1__right').click(function() {
    if (window.matchMedia('(max-width: 800px)').matches) {
      $('.catalog-nav__item').removeClass('active');
      $('.catalog-nav__sub').fadeOut('fast');
      $('.catalog-nav__item').removeClass('active');
    }
  });

  $('.catalog-nav__wrap > a').click(function(event) {
    event.preventDefault();
    if ( window.matchMedia('(max-width: 800px)').matches ) {
      $(this).parents('.catalog-nav__item').toggleClass('active');
      $(this).parent('.catalog-nav__wrap').siblings('.catalog-nav__sub').fadeToggle();
      $(this).parents('.catalog-nav__item').siblings('.catalog-nav__item').removeClass('active');
      $(this).parents('.catalog-nav__item').siblings('.catalog-nav__item').find('.catalog-nav__sub').fadeOut('fast');

      $(this).parent('.catalog-nav__wrap').siblings('.catalog-nav__sub').offset({left:0});
    }
  });

  $('.prod__fav').click(function() {
    $(this).toggleClass('active');
  });

  // фиксированные шапка
  $(window).on("scroll", function() {
    var fromTop = $(document).scrollTop();
    $(".header").toggleClass("fixed", (fromTop > 682));
    $(".catalog-nav").toggleClass("fixed", (fromTop > 682));
    $(".page_top").toggleClass("margined", (fromTop > 682));
    $(".to-top").toggleClass("fixed", (fromTop > 682));
    if (fromTop <= 682) {
      $('.header .catalog-nav .catalog-nav__list').slideUp();
    }
  });

  $('.header .catalog-nav .catalog-nav__top').hover(function() {
    $('.header .catalog-nav .catalog-nav__list').show();
  });

  $('body').mousemove(function(e){
    var container = $('.header .catalog-nav');
    if (container.has(e.target).length === 0) {
      $('.header .catalog-nav .catalog-nav__list').slideUp('fast');
    }
  });

  /* Resize */
  $(window).resize(function(){
    if ($(window).width() != screenWidth) {

    }
    screenWidth = $(window).width();
  });

})(jQuery);
