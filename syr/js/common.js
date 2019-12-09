(function($){

  /* Для проверки resize, т.к. на мобильном Хроме при скролле срабывает resize (без изменения ширины) */
  var screenWidth = $(window).width();

  /* Инициализация wow */
  wow = new WOW({mobile: false})
  wow.init();

  /* Инициализация красивых select'ов */
  $('select').niceSelect();

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

  $('#header-burger').click(function() {
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
      $('#header-burger').removeClass('active');
      $('.header__menu').removeClass('active');
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

  toggleHidden('.vacancies',true);

  /* Раскрытие меню в футере на мобильных устройствах */
  $('.footer__menu .menu > li .menu-arrow').click(function(event) {
    $(this).toggleClass('active');
    $(this).siblings('.sub-menu').slideToggle();
    $('.footer__menu .menu > li').each(function(xi,xel) {
      if ($(xel).find($(event.target)).length == 0) {
        $(xel).find('.sub-menu').slideUp();
        $(xel).find('.menu-arrow').removeClass('active');
      }
    });
  });

  /* Раскрытие подменю в header */
  $('.header__menu .menu > li').hover(function() {
    if ( !(window.matchMedia('(max-width: 992px)').matches) ) {
      $(this).find('.sub-menu').addClass('active');
    }
  },function() {
    if ( !(window.matchMedia('(max-width: 992px)').matches) ) {
      $(this).find('.sub-menu').removeClass('active');
    }
  });

  $('.header__menu .menu > li .menu-arrow').click(function(e) {
    e.preventDefault();
    if ( window.matchMedia('(max-width: 992px)').matches ) {
      $(this).parents('.header__menu .menu > li').siblings('li').find('.menu-arrow').removeClass('active');
      $(this).parents('.header__menu .menu > li').siblings('li').find('.sub-menu').removeClass('active');
      $(this).siblings('.sub-menu').toggleClass('active');
      $(this).toggleClass('active');
    }
  });



  $('.page_wr, .footer').click(function() {
    $('#header-burger').removeClass('active');
    $('.header__menu').removeClass('active');
  });

  // фиксированные шапка
  $(window).on("scroll", function() {
    var fromTop = $(document).scrollTop();
    $(".header").toggleClass("fixed", (fromTop > 50));
  });

  $('img').on('dragstart', function (event) {
    event.preventDefault();
  });


  $('.tabs-nav--nolink .tabs-nav__item a').click(function(e) {
    e.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
    $('.employees__tab:not(' + _href + ')').hide();
    $(_href).fadeIn();
    $(_href).find('.employees__slides').slick('setPosition');
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('html, body').animate({scrollTop: $(this).parents('.scr_card').find('.card__tabs').offset().top - 80 +'px'});
    }
  });

  $('.your-file input').change(function() {
    var fileName = $(this).val();
    fileName = fileName.replace (/\\/g, '/').split ('/').pop ();
    $(this).parents('label').find('.sl').text(fileName);
  });

  /* Resize */
  $(window).resize(function(){
    if ($(window).width() != screenWidth) {

    }
    screenWidth = $(window).width();
  });

})(jQuery);
