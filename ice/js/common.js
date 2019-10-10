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

  function formatDate(date) {

    var dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    var yy = date.getFullYear();

    return dd + '.' + mm + '.' + yy;
  }

  /* инициализация datepicker */
  $('.ice-datepicker').val(formatDate(new Date()));
  $('.ice-datepicker').datepicker({
    format: 'dd.mm.yyyy',
  });

  /* Инициализация красивых select'ов */
  $('.ice-select').niceSelect();

  /* Плавный скролл к якорю для всех ссылок с классом "inner-link" */
  $(function(){
    $('.inner-link[href^="#"]').click(function(){
      var _href = $(this).attr('href');
      $('html, body').animate({scrollTop: $(_href).offset().top - 20 +'px'});
      return false;
    });
  });

  $('.header__menu .menu > li > a').click(function() {
    $('.header__menu .menu > li > a').removeClass('active');
    $(this).addClass('active');
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

  /* Замена input(type="number") */
  (function quantityProducts() {
    if ($(".quantity-num").length > 0) {
      var $quantityArrowMinus = $(".quantity-arrow-minus");
      var $quantityArrowPlus = $(".quantity-arrow-plus");

      $quantityArrowMinus.click(quantityMinus);
      $quantityArrowPlus.click(quantityPlus);

      function quantityMinus() {
        var $quantityNum = $(this).parents('.quantity-block').find(".quantity-num");
        if ($quantityNum.val() >= 1) {
          $quantityNum.val(+$quantityNum.val() - 1);
        }
      }

      function quantityPlus() {
        var $quantityNum = $(this).parents('.quantity-block').find(".quantity-num");
        $quantityNum.val(+$quantityNum.val() + 1);
      }
    }
  })();

  $('.buy__link[href]').click(function() {
    var fromTop = $(document).scrollTop();
    var _href = $(this).attr('href');
    $('.buy__tab:not(' + _href + ')').removeClass('active');
    $('.buy__tab' + _href).addClass('active');
    $('html, body').animate({scrollTop: fromTop});
  });

  $(window).on("scroll", function() {
    var fromTop = $(document).scrollTop();
    $(".to-top").toggleClass("fixed", (fromTop > 682));
  });

  function countSum(xEl) {
    var $parent = $(xEl).parents('.buy__add');
    var $sum = 0;
    var $quantity = +$parent.find('.quantity-num').val();
    if ($parent.hasClass('buy__add--instructor')) {
      if ($quantity >= $('input[name="buyPersons"]').val()) {
        $sum =  (+$($parent.find('.buy__add-one-price .buy__price--group span')[0]).text()) * $quantity;
      } else {
        $sum =  (+$($parent.find('.buy__add-one-price .buy__price--indiv span')[0]).text()) * $quantity;
      }
    } else {
      $sum =  (+$($parent.find('.buy__add-one-price .buy__price span')[0]).text()) * $quantity;
    }
    $parent.find('.buy__add-price .buy__price span').text($sum);
  }

  $('.buy__add .quantity-num').change(function() {
    countSum($(this));
  });

  $('.buy__add .quantity-arrow').click(function() {
    countSum($(this));
  });

  // "Читать полностью"
  $('.price__show').click(function() {
    $(this).parent().siblings('.price__table').toggleClass('active');
    $(this).toggleClass('active');
  });

  function hideMore() {
    $('.price__table').each(function(xi,xel) {
      if ($(xel).innerHeight() + 5 <= $(xel).css('max-height').replace('px','')) {
        $(xel).siblings('.price__btns').hide();
      }
    })
  }

  hideMore();

  /* Resize */
  $(window).resize(function(){
    if ($(window).width() != screenWidth) {

    }
    screenWidth = $(window).width();
  });

})(jQuery);
