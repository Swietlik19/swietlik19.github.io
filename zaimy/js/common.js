(function($){

  /* Для проверки resize, т.к. на мобильном Хроме при скролле срабывает resize (без изменения ширины) */
  var screenWidth = $(window).width();

  /* Инициализация wow */
  wow = new WOW()
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

  $('.header__top .burger').click(function() {
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

    var containerMenu = $(".header__menu .menu");
    var containerMenuTop = $(".header__menu-top");
    if (containerMenu.has(e.target).length === 0 && containerMenuTop.has(e.target).length === 0 && containerMenu[0] !== e.target && containerMenuTop[0] !== e.target){
      $('.header__menu').removeClass('active');
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
      $(this).parents().toggleClass('active');
      if (hideOther) {
        $(this).parent().siblings().find('.open').removeClass('active');
        $(this).parent().siblings().find(xParent + '__hidden').slideUp();
        $(this).parent().siblings().removeClass('active');
      }
    });
  }

  toggleHidden('.faq',true);

  // $(".count_range--money").each(function() {
  //   var xMin = $(this).siblings('.range__min').text();
  //   var xMax = $(this).siblings('.range__max').text();
  //   var xFrom = $(this).siblings('.range__from').text();
  //   $(this).ionRangeSlider({
  //     min: xMin,
  //     max: xMax,
  //     from: xFrom,
  //     postfix: ' руб.',
  //     step: 10000
  //   });
  // });

  // $(".count_range--months").each(function() {
  //   var xMin = $(this).siblings('.range__min').text();
  //   var xMax = $(this).siblings('.range__max').text();
  //   var xFrom = $(this).siblings('.range__from').text();

  //   $(this).ionRangeSlider({
  //     min: xMin,
  //     max: xMax,
  //     from: xFrom,
  //     postfix: ' мес.',
  //   });
  // });

  $(".count_range--money").each(function() {
    var xMin = $(this).siblings('.range__min').text();
    var xMax = $(this).siblings('.range__max').text();
    var xFrom = $(this).siblings('.range__from').text();
    $(this).jRange({
      from: xMin,
      to: xMax,
      width: 330,
      step: 10000,
      format: '%s',
      showLabels: true,
      snap: true,
      postfix: ' руб.'
    });
  });

  $(".count_range--months").each(function() {
    var xMin = $(this).siblings('.range__min').text();
    var xMax = $(this).siblings('.range__max').text();
    var xFrom = $(this).siblings('.range__from').text();
    $(this).jRange({
      from: xMin,
      to: xMax,
      width: 330,
      format: '%s',
      showLabels: true,
      snap: true,
      postfix: ' мес.'
    });
  });

  // фиксированные шапка
  $(window).on("scroll", function() {
    var fromTop = $(document).scrollTop();
    $(".to-top").toggleClass("fixed", (fromTop > 682));
    $(".header").toggleClass("fixed", (fromTop > 682));
  });

  setTimeout(function() {$('.header__second-menu').addClass('visible');}, 100);

  // Показать/скрыть меню в "Документах"
  $('.docs__open').click(function() {
    $('.docs__menu').toggleClass('active');
  });

  // "Читать полностью" в SEO
  $('.seo__show').click(function() {
    $(this).parent().siblings('.seo__content').toggleClass('opened');
    $(this).toggleClass('active');
  });

  function hideMore() {
    $('.seo__content').each(function(xi,xel) {
      if ($(xel).innerHeight() + 5 <= $(xel).css('max-height').replace('px','')) {
        $(xel).parents('.seo__wrap').find('.seo__show').hide();
      }
    })
  }

  hideMore();

  $('.count-range').change(function() {
    var xSum = $(this).parents('.calc__ranges-wrap').find('.count_range--money').val();
    xSum = Number.parseInt(xSum);
    var xMonths = $(this).parents('.calc__ranges-wrap').find('.count_range--months').val();
    xMonths = Number.parseInt(xMonths);
    var xRate = $(this).parents('.form--calc').find('input[name="calc-rate"]').val();
    var xDate = new Date();
    var xLastDate = new Date();

    xLastDate .setMonth(xLastDate .getMonth() + xMonths);
    var xLastMonth = xLastDate.getMonth() + 1;
    // var xDiff = new Date(Math.abs(xLastDate - xDate)) / 1000 / 60 / 60 / 24;
    var xBack = xSum + xSum * xRate * xMonths / 100;

    xLastDate = xLastDate.getDate() + '.' + xLastMonth + '.' + xLastDate.getFullYear();

    var xCalc = $(this).parents('.form--calc').find('.calc__summary');
    xCalc.find('.calc__summary-item--get span').text(xSum);
    xCalc.find('.calc__summary-item--back span').text(Math.round(xBack));
    xCalc.find('.calc__summary-item--overpay span').text(Math.round(xBack - xSum));
    xCalc.find('.calc__summary-item--date span').text(xLastDate);
  });

  /* Resize */
  $(window).resize(function(){
    if ($(window).width() != screenWidth) {

    }
    screenWidth = $(window).width();
  });

})(jQuery);
