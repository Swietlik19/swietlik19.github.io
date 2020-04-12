(function($){

  /* Для проверки resize, т.к. на мобильном Хроме при скролле срабывает resize (без изменения ширины) */
  var screenWidth = $(window).width();

  /* Инициализация wow */
  wow = new WOW({mobile: false})
  wow.init();

  /* Нужно для IE и некоторых других браузеров, чтобы понимал svg спрайты во внешних файлах */
  svg4everybody();

  /* полифил для object-fit */
  objectFitImages($('[data-object-fit-cover],[data-object-fit-contain],[data-object-fit-cover-top]'), {watchMQ: true});

  /* инициализация fancybox */
  $(".fancybox").fancybox({
    padding: 0,
    scrolling: 'auto'
  });

  /* инициализация скролла на главной странице */
  if (!(window.matchMedia('(max-width: 900px)').matches)) {

    $('#page_fp').fullpage({
      responsiveWidth: 900,
      anchors: ['fp-top','fp-serv','fp-reviews','fp-faq','fp-blog','fp-contacts'],
      scrollingSpeed: 900,
      scrollOverflow: true,
      scrollHorizontally: true,
      licenseKey: 'INSERT YOUR FULLPAGE LICENSE KEY HERE',
      scrollHorizontallyKey: 'INSERT YOUR EXTENSION KEY HERE',

      onSlideLeave: function(section, origin, destination, direction){
        $(origin.item).find('.toAnimate').each(function(xi,xel) {
          var xAnim = $(xel).attr('data-anim-name');
          $(xel).removeClass('animated');
          $(xel).removeClass(xAnim);
        });

        $(destination.item).find('.toAnimate').each(function(xi,xel) {
          var xAnim = $(xel).attr('data-anim-name');
          var xDelay = $(xel).attr('data-anim-delay');
          $(xel).addClass('animated ' + xAnim);
          $(xel).css('animationDelay', xDelay);
        });

        if(destination.index == '1' || destination.index == '2'){
          $('.header').addClass('visible');
        } else {
          $('.header').removeClass('visible');
        }

        var xInd = destination.index;
        $('#x-fp-nav ul li a').removeClass('active');
        $('#x-fp-nav ul li:eq(' + xInd + ')').find('a').addClass('active');
      },
      onLeave: function(origin, destination, direction){
        $(origin.item).find('.toAnimate').each(function(xi,xel) {
          var xAnim = $(xel).attr('data-anim-name');
          $(xel).removeClass('animated');
          $(xel).removeClass(xAnim);
        });

        $(destination.item).find('.toAnimate').each(function(xi,xel) {
          var xAnim = $(xel).attr('data-anim-name');
          var xDelay = $(xel).attr('data-anim-delay');
          $(xel).addClass('animated ' + xAnim);
          $(xel).css('animationDelay', xDelay);
        });

        if(destination.index >= '1'){
          $('.header').addClass('visible');
        } else {
          $('.header').removeClass('visible');
        }
      },
      afterLoad: function(origin, destination, direction){
        if (destination.index === 0) {
          var xInd = fullpage_api.getActiveSlide().index;
        } else {
          var xInd = destination.index + 2;
        }
        $('#x-fp-nav ul li a').removeClass('active');
        $('#x-fp-nav ul li:eq(' + xInd + ')').find('a').addClass('active');
        if (destination.index === 0 && fullpage_api.getActiveSlide().index > 0) {
          $('.header').addClass('visible');
        }
      },
    });
  }

  $('#x-fp-nav ul li a').click(function() {
    var xIndSect = $(this).attr('data-section');
    var xIndSlide = $(this).attr('data-slide');

    $.fn.fullpage.moveTo(xIndSect, xIndSlide);
  });

  if ($('#page_wr_main').length > 0 && !(window.matchMedia('(max-width: 900px)').matches) ) {
    $.fn.fullpage.setAllowScrolling(false);
  }

  $('.page_preloader .logo').addClass('visible');

  $(window).on("load", function () {
    $('.page_preloader').delay(1000).fadeOut('slow');
    setTimeout(function() {$('body').removeClass('disabled');},1400);


    if ($('#page_wr_main').length > 0 && !(window.matchMedia('(max-width: 900px)').matches)) {
      setTimeout(function() {$.fn.fullpage.setAllowScrolling(true);}, 1000);
    }
  });

  /* Плавный скролл к якорю для всех ссылок с классом "inner-link" */
  $(function(){
    $('.inner-link[href^="#"]').click(function(e){
      e.preventDefault();
      var _href = $(this).attr('href');
      $('html, body').animate({scrollTop: $(_href).offset().top - 40 +'px'});

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

  $('#scr1__burger, #header__burger').click(function() {
    $('.scr1__menu .menu > li > a').removeClass('active');
    $('.scr1__menu').toggleClass('active');
    $('html').toggleClass('disabled');
    if ($('#page_wr_main').length > 0 && !(window.matchMedia('(max-width: 900px)').matches)) {
      $.fn.fullpage.setAllowScrolling(false);
    }
    setTimeout(function() {$('.scr1__menu .menu > li > a').each(function(xi,xel) {
      setTimeout(function() {$(xel).addClass('active');}, (xi + 1) * 150);
    });}, 150);
  });

  $('.scr1__menu-close').click(function() {
    $('.scr1__menu').removeClass('active');
    $('html').removeClass('disabled');
    if ($('#page_wr_main').length > 0 && !(window.matchMedia('(max-width: 900px)').matches)) {
      $.fn.fullpage.setAllowScrolling(true);
    }
    $('.scr1__menu .menu > li > a').each(function(xi,xel) {
      $(xel).removeClass('active');
    });
  });

  $('.header__menu .menu > li > a').hover(function() {
    var w = $(this).outerWidth();
    var index = $(this).parent().index();
    $('.header__menu .decor-line').css('width','' + w + '');
    $('.header__menu .decor-line').css('opacity','1');
    $('.header__menu .decor-line').offset({left: $(this).offset().left});
  });

  $('.header__menu .menu').mouseleave(function() {
    $('.header__menu .decor-line').css('opacity','0');
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

  $('.your-file input').change(function() {
    var fileName = $(this).val();
    fileName = fileName.replace (/\\/g, '/').split ('/').pop ();
    $(this).parents('label').find('span').text(fileName);
  });

  // фиксированные шапка
  $(window).on("scroll", function() {
    var fromTop = $(document).scrollTop();
    if (window.matchMedia('(max-width: 900px)').matches) {
      $(".scr1__header").toggleClass("fixed", (fromTop > 10));
    }
    $(".header").toggleClass("fixed", (fromTop > 10));

    if ( ($('#page_wr_main').length > 0 && window.matchMedia('(max-width: 900px)').matches) || ($('#page_wr_main').length = 0)) {
      $(".to-top").toggleClass("fixed", (fromTop > 680));
    }

    $(".socials--aside").toggleClass("stopped", (fromTop > 680));
  });

  $('img').on('dragstart', function (event) {
    event.preventDefault();
  });

  // Табы
  $('.serv .section__nav a').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().siblings().removeClass('active');
    $(this).parent().addClass('active');
    $('.serv__tab').not(_href).hide();
    $(_href).fadeIn();
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('html, body').animate({scrollTop: $(_href).offset().top - 70 +'px'});
    }
  });


  /* СЛАЙДЕРЫ */
  function equalHeightSwiper(sliderID) {
    $(sliderID).find('.swiper-slide').height('auto');
    var slickTrackHeight = Math.max($(sliderID).find('.swiper-slide').outerHeight());
    $(sliderID).find('.swiper-slide').css('height', slickTrackHeight + 'px');
  }

  var reviewsSlider = new Swiper('#reviews__slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    watchSlidesProgress: true,
    loop: true,
    autoplay: {
      delay: 8000,
    },
    navigation: {
      nextEl: '#reviews__slider .swiper-button-next',
      prevEl: '#reviews__slider .swiper-button-prev',
    },
    pagination: {
      el: '#reviews__slider .swiper-dots',
    },
    on: {
      init: function () {
        $(window).on("load", function () {
          equalHeightSwiper('#reviews__slider');
        });
      },
    },
  });


  $(window).resize(function() {

    var currScreeWidth = $(window).width();

    if (currScreeWidth != screenWidth) {

    }

    screenWidth = $(window).width();
  });

})(jQuery);
