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

  $('.burger').click(function() {
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
  // $(window).on("scroll", function() {
  //   var fromTop = $(document).scrollTop();
  //   $(".header").toggleClass("fixed", (fromTop > 10));
  //   $(".to-top").toggleClass("fixed", (fromTop > 600));
  // });

  // Табы
  // $('.prod-item__nav a').click(function(event) {
  //   event.preventDefault();
  //   var _href = $(this).attr('href');
  //   $(this).parent().siblings().removeClass('current');
  //   $(this).parent().addClass('current');
  //   $('.services__tab').not(_href).hide();
  //   $(_href).fadeIn();
  //   if (window.matchMedia('(max-width: 767px)').matches) {
  //     $('html, body').animate({scrollTop: $(_href).offset().top - 70 +'px'});
  //   }
  // });

  $('img').on('dragstart', function (event) {
    event.preventDefault();
  });

  $('.btn__wrap--blue').each(function(xi, xel) {
    var xHtml = '<div class="btn__bubbles">';
    for (i = 0; i < 10; i++) {
      xHtml += '<span></span>';
    }
    xHtml += '</div>';
    $(xel).append(xHtml);
  });

  $('.insta').each(function(xi, xel) {
    var xHtml = '<div class="insta__bubbles">';
    for (i = 0; i < 11; i++) {
      xHtml += '<span></span>';
    }
    xHtml += '</div>';
    $(xel).append(xHtml);
  });

  $('.scr1__feat-item').each(function(xi, xel) {
    var xHtml = '<div class="scr1__feat-bubbles">';
    for (i = 0; i < 6; i++) {
      xHtml += '<span></span>';
    }
    xHtml += '</div>';
    $(xel).append(xHtml);
  });


  /* СЛАЙДЕРЫ */

  var scr1Slider = new Swiper('#scr1__slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    watchSlidesProgress: true,
    loop: true,
    watchOverflow: true,
    autoplay: {
      delay: 8000,
    },
    pagination: {
      el: '.scr1__slider-btns .swiper-dots',
    },
  });

  var brandsSlider = new Swiper('#brands__slider', {
    slidesPerView: 8,
    slidesPerColumn: 2,
    slidesPerColumnFill: 'row',
    spaceBetween: 60,
    loop: false,
    watchSlidesProgress: true,
    watchOverflow: true,
    autoplay: {
      delay: 8000,
    },
    pagination: {
      el: '.brands__slider-btns .swiper-dots',
    },
  });

  $('.prod__slider').each(function(xi,xel) {
    var xId = '#' + $(xel).attr('id');
    var xBtns = $(xel).siblings('.prod__slider-btns');
    var scr1__slider = new Swiper(xId, {
      slidesPerView: 1,
      watchSlidesProgress: true,
      watchOverflow: true,
      spaceBetween: 10,
      autoplay: {
        delay: 8000,
      },
      pagination: {
        el: xBtns.find('.swiper-dots'),
      },
      breakpoints: {
        300: {
          slidesPerView: 5,
          spaceBetween: 32,
        },
      },
    });
  });

  $(window).resize(function() {

    var currScreeWidth = $(window).width();

    if (currScreeWidth != screenWidth) {

    }

    screenWidth = $(window).width();
  });

})(jQuery);
