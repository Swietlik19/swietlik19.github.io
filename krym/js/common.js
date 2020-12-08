(function($){

  /* Нужно для IE и некоторых других браузеров, чтобы понимал svg спрайты во внешних файлах */
  svg4everybody();

  /* полифил для object-fit */
  objectFitImages($('[data-object-fit-cover],[data-object-fit-contain]'), {watchMQ: true});

  /* инициализация fancybox */
  $(".fancybox").fancybox({
    padding: 0,
    scrolling: 'auto'
  });

  /* инициализация scrollbar'а */
  $(window).on("load",function(){
    $(".scr_dates__content").mCustomScrollbar({
      theme: 'dark-3',
    });
    $('.scr1__bg > li').each(function(xi,xel) {
      setTimeout(function() {$(xel).addClass('visible');}, xi * 200);
    });
  });

  /* Плавный скролл к якорю для всех ссылок с классом "inner-link" */
  $(function(){
    $('.inner-link[href^="#"], .header .menu a').click(function(){
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
    $('.header .menu').toggle();
    if ( $(this).hasClass('active') && !(window.matchMedia('(max-width: 500px)').matches) ) {
      $('.header .menu').css('display','flex');
    }
  });

  // фиксированные шапка
  $(window).on("scroll", function() {
    var fromTop = $(document).scrollTop();
    $(".header").toggleClass("fixed", (fromTop > 10));
    $(".to-top").toggleClass("fixed", (fromTop > 600));
  });

  $('img').on('dragstart', function (event) {
    event.preventDefault();
  });

  /* СЛАЙДЕРЫ */
  var gallerySlider = new Swiper('#gallery__slider', {
    slidesPerView: 2,
    slidesPerColumn: 2,
    slidesPerColumnFill: 'row',
    spaceBetween: 14,
    watchSlidesProgress: true,
    watchOverflow: true,
    pagination: {
      el: '.gallery__slider-btns .swiper-dots',
    },
    breakpoints: {
      991: {
        slidesPerView: 3,
        spaceBetween: 28,
        slidesPerColumn: 2,
        slidesPerColumnFill: 'row',
      },
      500: {
        slidesPerView: 3,
        spaceBetween: 18,
        slidesPerColumn: 2,
        slidesPerColumnFill: 'row',
      },
    },
  });

  var scrDatesSlider = new Swiper('#scr_dates__slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    watchSlidesProgress: true,
    watchOverflow: true,
    pagination: {
      el: '.scr_dates__slider-nav .swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.scr_dates__slider-nav .swiper-button-next',
      prevEl: '.scr_dates__slider-nav .swiper-button-prev',
    },
    effect: 'fade',
    speed: 1000,
    fadeEffect: {
      crossFade: true,
    },
  });

})(jQuery);
