(function($){

  /* Инициализация wow */
  wow = new WOW({mobile: false})

  wow.init();
  /* Инициализация красивых select'ов */  

  /* Нужно для IE и некоторых других браузеров, чтобы понимал svg спрайты во внешних файлах */
  svg4everybody();

  /* полифил для object-fit */
  objectFitImages($('[data-object-fit]'), {watchMQ: true});

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

  $('.burger').click(function() {
    $(this).toggleClass('active');
    $('.main-menu').slideToggle();
    if (window.matchMedia('(max-width: 880px)').matches) {
      $('.menu').toggleClass('active');
    }
  });

  $(window).resize(function() {
    makeCircle();
    if (window.matchMedia('(max-width: 880px)').matches && !($('.burger').hasClass('active')) ) {
      $('.menu').removeClass('active');
    }
  });
  
  function closeMainMenu() {
    $('.burger').removeClass('active');
    $('.main-menu').slideUp();
  }

  $('.page_wr').click(function() {
    closeMainMenu();
  });

  $(document).keydown(function(eventObject){
    if( eventObject.which == 27 ){
      closeMainMenu();
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

  /* Анимация кнопок с градиентом */
  $('.btn--grad,.submit__wrap--grad')
    .on('mouseenter', function(e) {
      var parentOffset = $(this).offset(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
      $(this).find('span').css({top:relY, left:relX})
    })
    .on('mouseout', function(e) {
      var parentOffset = $(this).offset(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
      $(this).find('span').css({top:relY, left:relX})
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

  /* Список в "груповых посещениях" вокруг родителя */

  function makeCircle() {
    if (document.querySelector('.group__features') !== null) {
      var circleParent = $('.group__features');

      circleParent.each(function(xi,el) {
        var items = $(el).find('.group__features-item');
               
        var length = items.length;
        var arc = 2.79253 * (1 / length);
        var radius = ($(el).width()) / 2;
               
        for (var i = 0; i < length; i++) {
          var angle = i * arc - 1;
          var x = radius * Math.cos(angle);
          var y = radius * Math.sin(angle);
          
          $(items[i]).css('left','calc(50% + ' + x + 'px - 10px)');
          $(items[i]).css('top','calc(50% + ' + y + 'px - 10px)');
        }  
      });            
    }
  }  

  makeCircle();

  $(window).resize(function() {
    makeCircle();
    if (window.matchMedia('(min-width: 681px)').matches) {
      $('.footer-menu .footer-menu__links').slideDown();
      $('.main-menu .main-menu__links').slideDown();
    } else {
      $('.footer-menu .footer-menu__links:not(".footer-menu__links--strong")').slideUp();
      $('.main-menu .main-menu__links:not(".main-menu__links--strong")').slideUp();
    }
  });

  /* Раскрытие меню в футере и хедере на мобильных устройствах */

  function openSubMenu() {
    $.each(['footer-menu','main-menu'],function(xi,xe) {
      $('.' + xe + ' h4').click(function(e) {
        if (window.matchMedia('(max-width: 680px)').matches) {
          $(this).toggleClass('active');        
          $(this).siblings('.' + xe + '__links').slideToggle();
          $(this).parents('.' + xe).find('.' + xe + '__item').each(function(i, el) {
            if ( $(el).has(e.target).length === 0 && !($(el).hasClass(xe + '__item--strong')) ) {
              $(el).find('.' + xe + '__links').slideUp();
              $(el).find('h4').removeClass('active');
            }
          });
        }
      });
    });
  }

  openSubMenu();

  // фиксированные шапка
  $(window).on("scroll", function() {
    var fromTop = $(document).scrollTop();
    $(".nav").toggleClass("fixed", (fromTop > 682));   
  });

  /* "Открыть" на странице "вопрос-ответ" */
  $('.questions .questions__item .top').click(function() {    
    $(this).siblings('.hidden').slideToggle();
    $(this).find('.open').toggleClass('active');

    $(this).parents('.questions__item').siblings('.questions__item').find('.hidden').slideUp();
    $(this).parents('.questions__item').siblings('.questions__item').find('.open').removeClass('active');    
  });

  $(".group__nav-item").click(function(event) {
    event.preventDefault();
    $(this).parent().siblings().find('.group__nav-item').removeClass("current");

    if ( !($(this).hasClass('current')) ) {
      $(this).addClass("current");
      var tab = $(this).attr("href");
      $(".group__tab").not(tab).hide();
      $(tab).fadeIn();     
    }
  });

  $(".buy__link").click(function(event) {
    event.preventDefault();
    $(this).parent().siblings().find('.buy__link').removeClass("current");

    if ( !($(this).hasClass('current')) ) {
      $(this).addClass("current");
      var tab = $(this).attr("href");
      $(".steps__section--tab").not(tab).hide();
      $(tab).fadeIn();   
      $('html, body').animate({scrollTop: $(tab).offset().top - 80 +'px'});  
    }
  });

  $(".count-range").ionRangeSlider({
    min: 3,
    max: 20,
    from: 10,
    step: 1,
    grid: true,
    grid_snap: true
  });

  function changeGridNum() {
    if (document.querySelector(".count-range") !== null) {
      var my_range = $(".count-range").data("ionRangeSlider");
      if (window.matchMedia('(max-width: 600px)').matches) {      
        my_range.update({
          grid_snap: false,
          grid_num: 8
        });
      } else {
        my_range.update({
          grid_snap: true
        });
      }
    }
  }
  
  changeGridNum();  

  $(window).resize(function() {
    changeGridNum();
  });

  $('.age-text').on('input change paste', function() {
    $(this).val(this.value.replace(/[^0-9]/, '')); // запрещаем ввод любых символов, кроме цифр    
  });

  /* Всплывающие подсказки для интерактивной карты */
  function tooltipCoords(popup,link,type) {
    if ( !(window.matchMedia('(max-width: 880px)').matches) ) {
      var myPath = $(link).find('.part')[0];
      var w = myPath.getBoundingClientRect().width;
      var h = myPath.getBoundingClientRect().height;

      if (type == 'initial') {
        var top = $(link).offset().top + (h - 44 - 10) / 2 - 10;
        if ( $(popup).hasClass('tooltips__item--reversed') ) {          
          var left = $(link).offset().left + w - $(popup).outerWidth() - w / 2;  
        } else {        
          var left = $(link).offset().left + (w - 44) / 2;      
        }
      }
      if (type == 'hover') {
        // var top = $(link).offset().top - 90;    
        var top = $(link).offset().top + h / 2 - $(popup).outerHeight() - 70;  
        if ( $(popup).hasClass('tooltips__item--reversed') ) {        
          var left = $(link).offset().left + w - $(popup).outerWidth() - w / 4;  
        } else {
          var left = $(link).offset().left + w / 4;    
        }      
      }
      $(popup).offset({top:top, left:left}); 
    }
  }

  function firstCoords() {
    $('.part-wrap').each(function(i,el) {
      var popup = $('.tooltips__item' + $(el).attr("href"));
      tooltipCoords(popup,el,'initial');
    });    
  }

  // $(".svg-map").load("image/svg+xml",function(){
  //   firstCoords();
  // });

  setTimeout(firstCoords(),500);
 
  $(window).resize(function() {
    firstCoords();
  }); 

  $('.part-wrap').mouseenter(function(){
    if ( !(window.matchMedia('(max-width: 880px)').matches) ) {
      var popup = $('.tooltips__item' + $(this).attr("href"));
      $(this).addClass('active');
      $(popup).addClass('active'); 

      tooltipCoords(popup,this,'hover');
    }
  });

  $('.part-wrap').mouseleave(function(){
    if ( !(window.matchMedia('(max-width: 880px)').matches) ) {
      $('.tooltips__item').removeClass('active');
      $('.part-wrap').removeClass('active');
      var popup = $('.tooltips__item' + $(this).attr("href"));

      tooltipCoords(popup,this,'initial');
    }
  });

  $('.tooltips__item').mouseenter(function(){
    if ( !(window.matchMedia('(max-width: 880px)').matches) ) {
      var link = $('.part-wrap[href="#' + $(this).attr('id') + '"]');
      $(this).addClass('active');
      $(link).addClass('active');  

      tooltipCoords(this,link,'hover');
    }
  });

  $('.tooltips__item').mouseleave(function(){
    if ( !(window.matchMedia('(max-width: 880px)').matches) ) {
      $('.tooltips__item').removeClass('active');
      $('.part-wrap').removeClass('active');
      var link = $('.part-wrap[href="#' + $(this).attr('id') + '"]');

      tooltipCoords(this,link,'initial');
    }
  });

  $('.part-wrap').click(function(event){
    event.preventDefault();
  });

  if ($('#screen_map_inner').length > 0) {

    var myMap;

    // Дождёмся загрузки API и готовности DOM.
    ymaps.ready(init);

    function init () {
        // Создание экземпляра карты и его привязка к контейнеру с
        // заданным id ("map").
        myMap = new ymaps.Map('screen_map_inner', {
            // При инициализации карты обязательно нужно указать
            // её центр и коэффициент масштабирования.
            center: [44.971128, 34.076988], 
            zoom: 15
        }, {
            searchControlProvider: 'yandex#search'
        });

        // Создаём макет содержимого.
          MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
              '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
          ),

          myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
              hintContent: 'MEGANOM До 21:00',
              balloonContent: 'MEGA Град'
          }, {
              // Опции.
              // Необходимо указать данный тип макета.
              iconLayout: 'default#image',
              // Своё изображение иконки метки.
              iconImageHref: 'img/svg/pin.svg',
              // Размеры метки.
              iconImageSize: [39, 62],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              iconImageOffset: [-20, -46]
          });

      myMap.geoObjects
          .add(myPlacemark);

      myMap.behaviors.disable('scrollZoom');
    }
  }

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

})(jQuery);
