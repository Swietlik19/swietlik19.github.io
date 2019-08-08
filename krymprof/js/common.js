(function($){

  /* Для проверки resize, т.к. на мобильном Хроме при скролле срабывает resize (без изменения ширины) */
  var screenWidth = $(window).width();

  /* Нужно для IE и некоторых других браузеров, чтобы понимал svg спрайты во внешних файлах */
  svg4everybody();

  /* инициализация fancybox */
  $(".fancybox").fancybox({
    padding: 0,
    scrolling: 'auto'
  });

  /* полифил для object-fit */
  objectFitImages($('[data-object-fit],[data-object-fit2]'), {watchMQ: true});

  // маска поля tel
  $(".wpcf7-tel").mask("+7 (999) 999-99-99");

  /* Плавный скролл к якорю для всех ссылок с классом "inner-link" */
  $(function(){
    $('.inner-link[href^="#"]').click(function(){
      var _href = $(this).attr('href');
      $('html, body').animate({scrollTop: $(_href).offset().top - 20 +'px'});
      return false;
    });
  });

  /* Открытие / закрытие модалок (кроме карты) */
  $('a.open-modal').click(function(event){
    event.preventDefault();
    var _href = $(this).attr('href');
    $(_href).addClass('active');
    $(_href + ' .modal__content').addClass('visible');
  });

  function closeModal() {
    $('.modal').removeClass('active');
    $('.modal__content').removeClass('visible');
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

  $('.popular__nav a').click(function(event) {
    event.preventDefault();
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
    var _href = $(this).attr('href');
    $('.popular__tab:not(' + _href + ')').removeClass('active');
    $(_href).addClass('active');
    if (window.matchMedia('(max-width: 768px)').matches) {
      $('html, body').animate({scrollTop: $('.popular__nav').offset().top - 20 +'px'});
    }
  });

  /* Resize */
  $(window).resize(function(){
    if ($(window).width() != screenWidth) {

    }
    screenWidth = $(window).width();
  });

})(jQuery);