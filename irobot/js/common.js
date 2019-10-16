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

  $('#header-burger').click(function() {
    $(this).toggleClass('active');
    $('.header__bottom').toggleClass('active');
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
  });

  // "Читать полностью"
  $('.card__more-wrap').click(function() {
    $(this).siblings('.card__bottom-wrap').toggleClass('active');
    $(this).toggleClass('active');
  });

  function hideMore() {
    $('.card__bottom-wrap').each(function(xi,xel) {
      if ($(xel).innerHeight() + 5 <= $(xel).css('max-height').replace('px','')) {
        $(xel).siblings('.card__more-wrap').hide();
      }
    })
  }

  hideMore();


  $('.card__tab:not(#card-tab-0):not(#card2-tab-0):not(#accessory-tab-0), .accessory__brands:not(#accessory-tab-0--brands)').each(function(xi,xel) {
    $(xel).css('display','none');
  });

  $('.accessory__brand:nth-of-type(n + 2),.accessory__tab:nth-of-type(n + 2)').each(function(xi,xel) {
    $(xel).addClass('hidden');
  });

  $('.card .card__nav-item a').click(function(e) {
    e.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().addClass('active');
    $(this).parent().siblings('.card__nav-item').removeClass('active');
    $(this).parents('.scr_card').find('.card__tab:not(' + _href + ')').hide();
    $(_href).fadeIn();
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('html, body').animate({scrollTop: $(this).parents('.scr_card').find('.card__tabs').offset().top - 80 +'px'});
    }
  });

  $('.accessory .card__nav-item a').click(function(e) {
    e.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().addClass('active');
    $(this).parent().siblings('.card__nav-item').removeClass('active');
    $(this).parents('.scr_accessory').find('.accessory__tab:not(' + _href + ')').addClass('hidden');
    $(_href).removeClass('hidden');
    $(this).parents('.scr_accessory').find('.accessory__brands:not(' + _href + '--brands)').addClass('hidden');
    $(this).parents('.scr_accessory').find('.accessory__brands' + _href + '--brands').removeClass('hidden');

    if (window.matchMedia('(max-width: 767px)').matches) {
      $('html, body').animate({scrollTop: $('.accessory__tabs').offset().top - 80 +'px'});
    }
  });

  $('.accessory__brands-item a').click(function(e) {
    e.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().addClass('active');
    $(this).parent().siblings('.accessory__brands-item').removeClass('active');
    $(this).parents('.accessory__tabs').find(_href).siblings('.accessory__brand').addClass('hidden');
    $(_href).removeClass('hidden');
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('html, body').animate({scrollTop: $('.accessory__tabs').offset().top - 80 +'px'});
    }
  });

  /* Resize */
  $(window).resize(function(){
    if ($(window).width() != screenWidth) {

    }
    screenWidth = $(window).width();
  });

})(jQuery);
