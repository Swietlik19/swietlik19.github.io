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

  /* Плавный скролл к якорю для всех ссылок с классом "inner-link" */
  $(function(){
    $('.inner-link[href^="#"]').click(function(){      
      var _href = $(this).attr('href');
      if ( $(this).parents('.menu').length == 0 ) {
        $('html, body').animate({scrollTop: $(_href).offset().top+'px'});
      } else {
        $('html, body').animate({scrollTop: $(_href).offset().top - 80 +'px'});
      }
      $('.menu').removeClass('active');
      $('.main-menu').slideUp();
      $('.burger').removeClass('active');
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

  $(window).resize(function() {
    if ( !(window.matchMedia('(max-width: 992px)').matches) ) {
      $('.header .menu').removeClass('active');
      $('#header-burger').removeClass('active');
    }
  });

  $('#scr1-burger').click(function() {
    $(this).toggleClass('active');
    $('.scr1__menu-wrap').slideToggle();
  });

  $(window).resize(function() {
    if ( !(window.matchMedia('(max-width: 700px)').matches) ) {
      $('.scr1__menu-wrap').slideDown();
      $('#scr1-burger').removeClass('active');
    } else {
      $('.scr1__menu-wrap').slideUp();
    }
  });
  
  /* Открытие / закрытие модалок (кроме карты) */
  $('a.open-modal').click(function(event){
    event.preventDefault();
    var _href = $(this).attr('href');
    $(_href).show();
    $(_href + ' .modal__content').addClass('visible');
    $('.page_wr').addClass('blur-it');
    $('.footer').addClass('blur-it');
    $('.header').addClass('blur-it');
  });

  function closeModal() {
    $('.modal').fadeOut();
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

  $(window).resize(function() {
    if ( !(window.matchMedia('(max-width: 900px)').matches) ) {
      $('.footer-menu .menu').slideDown();
    } else {
      $('.footer-menu .menu:not(".menu--strong")').slideUp();      
    }
  });

  openSubMenu();

  // фиксированные шапка
  $(window).on("scroll", function() {
    var fromTop = $(document).scrollTop();
    $(".header__nav").toggleClass("fixed", (fromTop > 682));   
    $(".header").toggleClass("margined", (fromTop > 682));   
  });

  $('.scr1 .menu > li > a').hover(function() {
    var h = $(this).outerHeight();
    var index = $(this).parent().index();
    $('.scr1__menu-wrap .decor-line').css('opacity','1');
    $('.scr1__menu-wrap .decor-line').css('transform','translateY(' + h * index + 'px)');
  });

  $('.scr1 .menu').mouseleave(function() {
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
      $(this).parents('.menu-item-has-children').addClass('active')
    } 
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


  // if ($('#screen_map_inner').length > 0) {

  //   var myMap;

  //   // Дождёмся загрузки API и готовности DOM.
  //   ymaps.ready(init);

  //   function init () {
  //       // Создание экземпляра карты и его привязка к контейнеру с
  //       // заданным id ("map").
  //       myMap = new ymaps.Map('screen_map_inner', {
  //           // При инициализации карты обязательно нужно указать
  //           // её центр и коэффициент масштабирования.
  //           center: [44.971128, 34.076988], 
  //           zoom: 15
  //       }, {
  //           searchControlProvider: 'yandex#search'
  //       });

  //       // Создаём макет содержимого.
  //         MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
  //             '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
  //         ),

  //         myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
  //             hintContent: 'адрес',
  //             balloonContent: 'Кровельный мир'
  //         }, {
  //             // Опции.
  //             // Необходимо указать данный тип макета.
  //             iconLayout: 'default#image',
  //             // Своё изображение иконки метки.
  //             iconImageHref: 'img/svg/pin.svg',
  //             // Размеры метки.
  //             iconImageSize: [39, 62],
  //             // Смещение левого верхнего угла иконки относительно
  //             // её "ножки" (точки привязки).
  //             iconImageOffset: [-20, -46]
  //         });

  //     myMap.geoObjects
  //         .add(myPlacemark);

  //     myMap.behaviors.disable('scrollZoom');
  //   }
  // }

  // /* Замена input(type="number") */
  // (function quantityProducts() {
  //   if ($(".quantity-num").length > 0) {
  //     var $quantityArrowMinus = $(".quantity-arrow-minus");
  //     var $quantityArrowPlus = $(".quantity-arrow-plus");      
   
  //     $quantityArrowMinus.click(quantityMinus);
  //     $quantityArrowPlus.click(quantityPlus);
   
  //     function quantityMinus() {
  //       var $quantityNum = $(this).parents('.quantity-block').find(".quantity-num");
  //       if ($quantityNum.val() >= 1) {          
  //         $quantityNum.val(+$quantityNum.val() - 1);
  //       }
  //     }
   
  //     function quantityPlus() {
  //       var $quantityNum = $(this).parents('.quantity-block').find(".quantity-num");
  //       $quantityNum.val(+$quantityNum.val() + 1);
  //     }
  //   }
  // })();

})(jQuery);
