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
    $('.inner-link[href^="#"], .menu > li > a').click(function(){
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
    $('.header__menu').slideToggle();
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
      $(this).parent().toggleClass('active');
      $(this).siblings().slideToggle();
      if (hideOther) {
        $(this).parent().siblings().removeClass('active');
        $(this).parent().siblings().find('.hidden').slideUp();
      }
    });
  }

  toggleHidden('.faq',true);

  $('.menu > li > a').hover(function() {
    var w = $(this).outerWidth();
    var index = $(this).parent().index();
    $('.header__menu .decor-line').css('width','' + w + '');
    $('.header__menu .decor-line').css('opacity','1');
    $('.header__menu .decor-line').offset({left: $(this).offset().left});
  });

  $('.header__menu .menu').mouseleave(function() {
    $('.header__menu .decor-line').css('opacity','0');
  });

  var fromTop = $(document).scrollTop();
  $(".header").toggleClass("fixed", (fromTop > 10));

  // фиксированные шапка
  $(window).on("scroll", function() {
    var fromTop = $(document).scrollTop();
    $(".header").toggleClass("fixed", (fromTop > 10));
    $(".to-top").toggleClass("fixed", (fromTop > 682));
  });


  // Табы
  $('.for__nav a').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().siblings().removeClass('current');
    $(this).parent().addClass('current');
    $('.for__tab').not(_href).hide();
    $(_href).fadeIn();
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('html, body').animate({scrollTop: $(_href).offset().top - 70 +'px'});
    }
  });

  $('img').on('dragstart', function (event) {
    event.preventDefault();
  });

  $('.catalog__all .btn').click(function() {
    $('.catalog__item').addClass('active');
    $(this).fadeOut();
  });


  /* СЛАЙДЕРЫ */
  if (window.matchMedia('(max-width: 767px)').matches) {
    var catalogSlider = new Swiper('#catalog__slider', {
      slidesPerView: 1,
      spaceBetween: 10,
      watchSlidesProgress: true,
      loop: true,
      roundLengths: true,
      pagination: {
        el: '#catalog__slider .swiper-dots',
      },
      breakpoints: {
        575: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        500: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
    });
  }

  var modalProdSlider = new Swiper('#modal__prod-slider', {
    slidesPerView: 1,
    spaceBetween: 15,
    watchSlidesProgress: true,
    loop: true,
    navigation: {
      nextEl: '.modal__prod-nav .swiper-button-next',
      prevEl: '.modal__prod-nav .swiper-button-prev',
    },
    pagination: {
      el: '.modal__prod-nav .swiper-dots',
    },
  });


  $(window).resize(function() {

    var currScreeWidth = $(window).width();

    if (currScreeWidth != screenWidth) {

    }

    screenWidth = $(window).width();
  });

})(jQuery);
