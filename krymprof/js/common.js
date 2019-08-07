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


  /* Раскрытие меню в футере на мобильных устройствах */
  // function openSubMenu() {
  //   $.each(['footer-menu'],function(xi,xe) {
  //     $('.' + xe + ' h4').click(function(e) {
  //       if (window.matchMedia('(max-width: 900px)').matches) {
  //         $(this).toggleClass('active');
  //         $(this).siblings('.menu').slideToggle();
  //         $(this).parents('.' + xe).find('.' + xe + '__item').each(function(i, el) {
  //           if ( $(el).has(e.target).length === 0 && !($(el).hasClass(xe + '__item--strong')) ) {
  //             $(el).find('.menu').slideUp();
  //             $(el).find('h4').removeClass('active');
  //           }
  //         });
  //       }
  //     });
  //   });
  // }

  // openSubMenu();

  // $('.page_wr, .footer').hover(function() {
  //   if ( !(window.matchMedia('(max-width: 992px)').matches) ) {
  //     $('.header .menu > .menu-item-has-children .sub-menu').slideUp();
  //     $('.header .menu > .menu-item-has-children').removeClass('active');
  //   }
  // });

  // $('.page_wr, .footer').click(function() {
  //   if (window.matchMedia('(max-width: 992px)').matches) {
  //     $('.header .menu > .menu-item-has-children .sub-menu').slideUp();
  //     $('.header .menu > .menu-item-has-children').removeClass('active');
  //   }
  // });

  // фиксированные шапка
  // $(window).on("scroll", function() {
  //   var fromTop = $(document).scrollTop();
  //   $(".header__nav").toggleClass("fixed", (fromTop > 682));
  //   $(".header").toggleClass("margined", (fromTop > 682));
  // });

  // $('.header .menu > li > a').hover(function(e) {
  //   if ( !(window.matchMedia('(max-width: 992px)').matches) ) {
  //     $(this).parents('.menu').children('li').each(function(i, el) {
  //       if ( $(el).has(e.target).length === 0 ) {
  //         $(el).find('.sub-menu').slideUp();
  //       }
  //     });
  //     $(this).siblings('.sub-menu').slideDown();
  //     $(this).parents('.menu-item-has-children').addClass('active');
  //   }
  // });

  // $('.header .menu > li > a').click(function(e) {
  //   if ( $(this).parent('.menu-item-has-children').length > 0 ) {
  //     event.preventDefault();
  //   }
  //   if (window.matchMedia('(max-width: 992px)').matches) {
  //     $(this).parents('.menu').children('li').each(function(i, el) {
  //       if ( $(el).has(e.target).length === 0 ) {
  //         $(el).find('.sub-menu').slideUp();
  //       }
  //     });
  //     $(this).siblings('.sub-menu').slideToggle();
  //     $(this).parents('.menu-item-has-children').toggleClass('active')
  //   }
  // });

  /* Resize */
  $(window).resize(function(){
    if ($(window).width() != screenWidth) {

    }
    screenWidth = $(window).width();
  });

})(jQuery);