(function($){

  /* Инициализация wow */
  wow = new WOW({mobile: false})

  wow.init();
  /* Инициализация красивых select'ов */  

  /* Нужно для IE и некоторых других браузеров, чтобы понимал svg спрайты во внешних файлах */
  svg4everybody();

  /* полифил для object-fit */
  objectFitImages($('[data-object-fit],[data-object-fit2]'), {watchMQ: true});


  // инициализация fancybox
  $(".fancybox").fancybox({
    padding: 0,
    scrolling: 'auto'
  });

  var screenWidth = $(window).width();

  /* Плавный скролл к якорю для всех ссылок с классом "inner-link" */
  $(function(){
    $('.inner-link[href^="#"]').click(function(){      
      event.preventDefault();
      var _href = $(this).attr('href');
      $('html, body').animate({scrollTop: $(_href).offset().top - 60 +'px'});

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
    $('.header .menu').toggleClass('active');
  });
  
  $('#scr1-burger').click(function() {
    $(this).toggleClass('active');
    $('.scr1__menu-wrap').slideToggle();
  });

  $('#catalog-burger').click(function() {
    $(this).toggleClass('active');
    $('.scr1__menu-wrap').slideToggle();
  });
  
  /* Открытие / закрытие модалок (кроме карты) */
  $('a.open-modal').click(function(event){
    event.preventDefault();
    var _href = $(this).attr('href');
    // $(_href).show();
    $(_href).addClass('active');
    $(_href + ' .modal__content').addClass('visible');
    $('.page_wr').addClass('blur-it');
    $('.footer').addClass('blur-it');
    $('.header').addClass('blur-it');
  });

  function closeModal() {
    // $('.modal').fadeOut();
    $('.modal').removeClass('active');
    $('.modal__content').removeClass('visible');
    $('.page_wr').removeClass('blur-it');
    $('.footer').removeClass('blur-it');
    $('.header').removeClass('blur-it');
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

  $(".products__nav a").click(function(event) {
    event.preventDefault();
    $(this).parent().siblings().removeClass("current");

    if ( !($(this).parent().hasClass('current')) ) {
      $(this).parent().addClass("current");
      var tab = $(this).attr("href");
      $(".products__tab").not(tab).hide();
      $(tab).fadeIn();     
      if (window.matchMedia('(max-width: 500px)').matches) {
        $('html, body').animate({scrollTop: $('.products').offset().top +'px'});
      }
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
  
  /* Раскрытие меню в футере на мобильных устройствах */
  function openSubMenu() {
    $.each(['footer-menu'],function(xi,xe) {
      $('.' + xe + ' h4').click(function(e) {
        if (window.matchMedia('(max-width: 900px)').matches) {
          $(this).toggleClass('active');        
          $(this).siblings('.menu').slideToggle();
          $(this).parents('.' + xe).find('.' + xe + '__item').each(function(i, el) {
            if ( $(el).has(e.target).length === 0 && !($(el).hasClass(xe + '__item--strong')) ) {
              $(el).find('.menu').slideUp();
              $(el).find('h4').removeClass('active');
            }
          });
        }
      });
    });
  }
  
  $(window).resize(function(){
    if ($(window).width() != screenWidth) {

      if ( !(window.matchMedia('(max-width: 900px)').matches) ) {
        $('.footer-menu .menu').slideDown();
         $('.footer-menu h4').removeClass('active');
      } else {
        $('.footer-menu .menu:not(".menu--strong")').slideUp();      
      }

      if ( !(window.matchMedia('(max-width: 992px)').matches) ) {
        $('.header .menu').removeClass('active');
        $('#header-burger').removeClass('active');
      }

      $('.prod-item-page #scr1-burger').removeClass('active');
      if ( !(window.matchMedia('(max-width: 830px)').matches) ) {
        $('.scr_prod-item .scr1__menu-wrap').slideDown();      
      } else {
        $('.scr_prod-item .scr1__menu-wrap').slideUp();
      }

      $('.production-page #scr1-burger').removeClass('active');
      if ( !(window.matchMedia('(max-width: 900px)').matches) ) {
        $('.scr_production .scr1__menu-wrap').slideDown();      
      } else {
        $('.scr_production .scr1__menu-wrap').slideUp();
      }

      $('.main-page #scr1-burger').removeClass('active');
      if ( !(window.matchMedia('(max-width: 700px)').matches) ) {
        $('.scr_1 .scr1__menu-wrap').slideDown();      
      } else {
        $('.scr_1 .scr1__menu-wrap').slideUp();
      }

      if ( !(window.matchMedia('(max-width: 992px)').matches) ) {
        $('#catalog-burger').removeClass('active');
        $('.catalog .scr1__menu-wrap').slideUp();
      }

      screenWidth = $(window).width();
    }
  });

  openSubMenu();

  // фиксированные шапка
  $(window).on("scroll", function() {
    var fromTop = $(document).scrollTop();
    $(".header__nav").toggleClass("fixed", (fromTop > 682));   
    $(".header").toggleClass("margined", (fromTop > 682));   
  });

  $('.scr1__menu-wrap .menu > li > a').hover(function() {
    var h = $(this).outerHeight();
    var index = $(this).parent().index();
    $('.scr1__menu-wrap .decor-line').css('opacity','1');
    $('.scr1__menu-wrap .decor-line').css('transform','translateY(' + h * index + 'px)');
  });

  $('.scr1__menu-wrap .menu').mouseleave(function() {
    $('.scr1__menu-wrap .decor-line').css('opacity','0');
  });


  $('.header .menu > li > a').hover(function(e) {     
    if ( !(window.matchMedia('(max-width: 992px)').matches) ) {
      $(this).parents('.menu').children('li').each(function(i, el) {
        if ( $(el).has(e.target).length === 0 ) {
          $(el).find('.sub-menu').slideUp();
        }
      }); 
      $(this).siblings('.sub-menu').slideDown();
      $(this).parents('.menu-item-has-children').addClass('active');
    } 
  });


  $('.scr1__menu-wrap .menu > li.menu-item-has-children > a').click(function(e) {
    e.preventDefault();
    $(this).parents('.menu').children('li').each(function(i, el) {
      if ( $(el).has(e.target).length === 0 ) {
        $(el).find('.sub-menu').slideUp();
      }
    }); 
    $(this).siblings('.sub-menu').slideToggle();
  });

  $('.page_wr, .footer').hover(function() {
    if ( !(window.matchMedia('(max-width: 992px)').matches) ) {
      $('.header .menu > .menu-item-has-children .sub-menu').slideUp();
      $('.header .menu > .menu-item-has-children').removeClass('active');
    }    
  });


  $('.header .menu > li > a').click(function(e) {   
    if ( $(this).parent('.menu-item-has-children').length > 0 ) {
      event.preventDefault();  
    }
    if (window.matchMedia('(max-width: 992px)').matches) {
      $(this).parents('.menu').children('li').each(function(i, el) {
        if ( $(el).has(e.target).length === 0 ) {
          $(el).find('.sub-menu').slideUp();
        }
      }); 
      $(this).siblings('.sub-menu').slideToggle();
      $(this).parents('.menu-item-has-children').toggleClass('active')
    } 
  });

  $('.page_wr, .footer').click(function() {
    if (window.matchMedia('(max-width: 992px)').matches) {
      $('.header .menu > .menu-item-has-children .sub-menu').slideUp();
      $('.header .menu > .menu-item-has-children').removeClass('active');
    }    
  });

  $(".scr_prod-item .tabs-nav a").click(function(event) {
    event.preventDefault();
    $(this).parent().siblings().removeClass("current");

    if ( !($(this).parent().hasClass('current')) ) {
      $(this).parent().addClass("current");
      var tab = $(this).attr("href");
      $(".scr_prod-item .tab").not(tab).hide();
      $(tab).fadeIn();   
      $('html, body').animate({scrollTop: $(tab).offset().top - 120 +'px'});  
    }
  });


  createMap('inner-map',[44.999956, 34.203777],[[44.999956, 34.203777], [45.001851, 34.200268]]);

  function createMap(xID,coords,pointer) {

    if ($("#" + xID + "").length > 0) {

      var myMap;

      // Дождёмся загрузки API и готовности DOM.
      ymaps.ready(init);

      function init () {
          // Создание экземпляра карты и его привязка к контейнеру с
          // заданным id ("map").
          myMap = new ymaps.Map(xID , {
              // При инициализации карты обязательно нужно указать
              // её центр и коэффициент масштабирования.
              center: coords, 
              zoom: 15
          }, {
              searchControlProvider: 'yandex#search'
          });

          for(var i = 0; i < pointer.length; ++i) {    
            var myPlacemark = new ymaps.Placemark(pointer[i]);
            myMap.geoObjects.add(myPlacemark);
          }

        myMap.behaviors.disable('scrollZoom');
      }
    }

  }

})(jQuery);
