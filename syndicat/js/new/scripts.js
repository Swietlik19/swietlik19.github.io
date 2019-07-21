(function($){

  var screenWidth = $(window).width();

  /* Инициализация wow */
  wow = new WOW({mobile: false})
  wow.init();

  $('.select').niceSelect();

  /* Нужно для IE и некоторых других браузеров, чтобы понимал svg спрайты во внешних файлах */
  svg4everybody();

  /* полифил для object-fit */
  objectFitImages($('[data-object-fit-cover],[data-object-fit-contain],[data-object-fit-contain-bottom]'), {watchMQ: true});


  setTimeout(function() {
    $('.main-page .scr1').addClass('active');
  }, 5000);

  /* инициализация fancybox */
  $(".fancybox").fancybox({
    padding: 0,
    scrolling: 'auto'
  });

  /* Плавный скролл к якорю для всех ссылок с классом "inner-link" */
  $(function(){
    $('.inner-link[href^="#"]').click(function(){
      var _href = $(this).attr('href');
      $('html, body').animate({scrollTop: $(_href).offset().top - 80 +'px'});
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
    $('.main-menu').toggleClass('active');
  });

  $('#page_wr').click(function() {
    $('#header-burger').removeClass('active');
    $('.main-menu').removeClass('active');
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

  function closeBanner() {
    if ( window.matchMedia('(max-width: 900px)').matches ) {
      $('.scr1').fadeOut();
    }
  }

  $(document).mouseup(function (e) {
    var container = $(".modal .modal__content");
    if (container.has(e.target).length === 0){
      closeModal();
    }
    var containerBanner = $(".scr1");
    if (containerBanner.has(e.target).length === 0){
      closeBanner();
    }
  });

  $('.modal .close').click(function(){
    closeModal();
  });

  $(document).keydown(function(eventObject){
    if( eventObject.which == 27 ){
      closeModal();
      closeBanner();
    }
  });

  $('a.insta__item').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    $('.insta__block--one').removeClass('disabled');
    $('.insta__block--one .insta__img:not(' + _href + ')').removeClass('active');
    $('.insta__block--one .insta__img'  + _href).addClass('active');
    if ( window.matchMedia('(max-width: 650px)').matches && $(this).parents('.insta-page').length > 0 ) {
      $('html, body').animate({scrollTop: $('.insta__block--one').offset().top - 20 +'px'});
    }
  })

  $('.insta__block--one .close').click(function(event) {
    event.preventDefault();
    $(this).parents('.insta__block--one').addClass('disabled');
  });

  $('.header__second-menu .menu > .menu-item-has-children > a').hover(function() {
    if ( !(window.matchMedia('(max-width: 900px)').matches) ) {
      $(this).parent().addClass('active');
      $(this).siblings('.sub-menu__wrap').fadeIn();
      $(this).parent().siblings('.menu-item-has-children').removeClass('active');
      $(this).parent().siblings('.menu-item-has-children').find('.sub-menu__wrap').fadeOut('fast');
    }
  });

  $('.header__second-menu .menu > .menu-item-has-children > a').click(function(event) {
    event.preventDefault();
    if ( window.matchMedia('(max-width: 900px)').matches ) {
      $(this).parent().toggleClass('active');
      $(this).siblings('.sub-menu__wrap').fadeToggle();
      $(this).parent().siblings('.menu-item-has-children').removeClass('active');
      $(this).parent().siblings('.menu-item-has-children').find('.sub-menu__wrap').fadeOut('fast');
      $(this).siblings('.sub-menu__wrap').offset({left:0})
    }
  });

  $('.main-menu .menu > .menu-item-has-children > a').click(function(event) {
    event.preventDefault();
    if ( window.matchMedia('(max-width: 900px)').matches ) {
      $(this).parent().toggleClass('active');
      $(this).siblings('.sub-menu').toggleClass('active');
      $(this).parent().siblings('.menu-item-has-children').removeClass('active');
      $(this).parent().siblings('.menu-item-has-children').find('.sub-menu').removeClass('active');
    }
  });

  $('.menu-letters .menu > .menu-item-has-children').hover(function() {
    $(this).addClass('active');
    $(this).find('.sub-menu__wrap').addClass('active');
    $(this).siblings('.menu-item-has-children').removeClass('active');
    $(this).siblings('.menu-item-has-children').find('.sub-menu__wrap').removeClass('active');
  });

  $('.page_wr, .header__main').hover(function() {
    closeMenues();
  });

  $('.page_wr, .header__main').click(function() {
    closeMenues();
  });

  function closeMenues() {
    $('.header__second-menu .menu > .menu-item-has-children').removeClass('active');
    $('.header__second-menu .menu > .menu-item-has-children .sub-menu__wrap').fadeOut('fast');

    $('.menu-letters .menu > .menu-item-has-children').removeClass('active');
    $('.menu-letters .menu > .menu-item-has-children .sub-menu__wrap').removeClass('active');
  }


  $('.open-search').click(function() {

    $(this).siblings('.search-wrap').animate({width:'toggle'},350);
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

  $('.marks button').click(function() {
    event.preventDefault();
    $(this).toggleClass('active');
  });

  /* Раскрытие меню в футере на мобильных устройствах */
  function openSubMenu() {
    $.each(['footer-menu'],function(xi,xe) {
      $('.' + xe + ' h4').click(function(e) {
        if (window.matchMedia('(max-width: 650px)').matches) {
          $(this).parents('.' + xe).find('.' + xe + '__item').each(function(i, el) {
            if ( $(el).has(e.target).length === 0 ) {
              $(el).find('.menu').removeClass('active');
              $(el).find('h4').removeClass('active');
            }
          });
          $('.footer__contacts .footer__contacts-content').removeClass('active');
          $('.footer__contacts h4').removeClass('active');
          $(this).toggleClass('active');
          $(this).siblings('.menu').toggleClass('active');
        }
      });
    });
    $.each(['footer__contacts'],function(xi,xe) {
      $('.' + xe + ' h4').click(function(e) {
        if (window.matchMedia('(max-width: 650px)').matches) {
          $('.footer__menu').find('.menu').removeClass('active');
          $('.footer__menu h4').removeClass('active');
          $(this).toggleClass('active');
          $(this).siblings('.footer__contacts-content').toggleClass('active');
        }
      });
    });
  }

  openSubMenu();

  // фиксированные шапка
  $(window).on("scroll", function() {
    var fromTop = $(document).scrollTop();
      if ( !(window.matchMedia('(max-width: 900px)').matches) ) {
        $(".header__middle-menu").toggleClass("fixed", (fromTop > 682));
        $(".bar__item--cart").toggleClass("fixed", (fromTop > 250));
      } else {
        $(".header__main").toggleClass("fixed", (fromTop > 682));
        $(".main-menu").toggleClass("fixed", (fromTop > 682));
      }
  });

  // Табы
  function makeTabs(xNavParent,xNavLink,xTab,xScroll) {
    $(xNavParent + ' ' + xNavLink).click(function(event) {
      event.preventDefault();
      $(this).addClass('active');
      $(this).parent().siblings().find(xNavLink).removeClass('active');
      var _href = $(this).attr('href');
      $(xTab + ':not(' + _href + ')').removeClass('active');
      $(_href).addClass('active');
      if (window.matchMedia('(max-width: 750px)').matches && xScroll) {
        $('html, body').animate({scrollTop: $(xNavParent).offset().top - 20 +'px'});
      }
    });
  }

  // Табы articles__tab
  makeTabs('.articles__nav', '.articles__link', '.articles__tab', true);
  makeTabs('.login__nav', '.login__nav-link', '.login__tab', false);


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

  toggleHidden('.questions',true);
  toggleHidden('.filter',false);

  $('.prod-item__nav a').click(function(event) {
    event.preventDefault();
    var _href = $(this).attr('href');
    $(this).parent().siblings().removeClass('current');
    $(this).parent().addClass('current');
    $('.prod-item__tab').not(_href).hide();
    $(_href).fadeIn();
    if (window.matchMedia('(max-width: 768px)').matches) {
      $('html, body').animate({scrollTop: $(_href).offset().top - 50 +'px'});
    }
  });


  $('.filter__menu').click(function() {
    $(this).siblings('.form--filter').slideToggle();
  });

  /* Замена input(type="number") */
  (function quantityProducts() {
    if ($(".quantity-num").length > 0) {
      var $quantityArrowMinus = $(".quantity-arrow-minus");
      var $quantityArrowPlus = $(".quantity-arrow-plus");

      $quantityArrowMinus.click(quantityMinus);
      $quantityArrowPlus.click(quantityPlus);

      function quantityMinus() {
        var $quantityNum = $(this).parents('.quantity').find(".quantity-num");
        if ($quantityNum.val() >= 1) {
          $quantityNum.val(+$quantityNum.val() - 1);
        }
      }

      function quantityPlus() {
        var $quantityNum = $(this).parents('.quantity').find(".quantity-num");
        $quantityNum.val(+$quantityNum.val() + 1);
      }
    }
  })();

  // Всё, что срабатывает при изменении размеров экрана
  $(window).resize(function() {

    if ($(window).width() != screenWidth) {
      $(".header__main").removeClass("fixed");
      $(".main-menu").removeClass("fixed");
      $(".header__middle-menu").removeClass("fixed");
      $(".bar__item--cart").removeClass("fixed");
    }
    screenWidth = $(window).width();
  });

})(jQuery);
