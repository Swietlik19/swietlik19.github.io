(function($){

  wow = new WOW(
    {
      mobile: false
    }
  )
  wow.init();

  /* Плавный скролл к якорю для всех ссылок с классом "inner-link" */
  $(function(){
    $('.inner-link[href^="#"]').click(function(){
      var _href = $(this).attr('href');
      $('html, body').animate({scrollTop: $(_href).offset().top+'px'});
      return false;
    });
  });

  $('a[href^="#page_wr"]').click(function(){
    var _href = $(this).attr('href');
    $('html, body').animate({scrollTop: '0px'});
    return false;
  });

  $('.burger__wrap').click(function() {
    $(this).toggleClass('active');
    $('.menu').toggleClass('active');
    $('.header').toggleClass('active');
  });

  /* Показать + */
  $('.show-tabs-nav').click(function(){
    $(this).siblings('.tabs__nav').slideToggle();
  });

  $(document).mouseup(function (e) {
    var container = $(".scr_services-tabs .tabs__nav-wrap");
    if (container && container.css('position') == 'absolute' && container.has(e.target).length === 0){
      container.find('.tabs__nav').slideUp();
    }
  });

  // фиксированная шапка
  $(document).ready(function() {
    $(window).on("scroll", function() {
      var fromTop = $(document).scrollTop();
      $(".header").toggleClass("fixed", (fromTop > 682));
    });
  });

  /* Открытие / закрытие модалок (кроме карты) */
  $('a.open-modal').click(function(event){
    event.preventDefault();
    var _href = $(this).attr('href');
    $(_href).show();
    $(_href + ' .modal__content').fadeIn();
    $('.page_wr').addClass('blur-it');
  });

  function closeModal() {
    $('.modal').fadeOut();
    $('.modal__content').fadeOut();
    $('.page_wr').removeClass('blur-it');
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

  $('#suppliers__slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  /* На мобильном меню в футере открывается по клику на h3 */
  $('.footer__menu').click(function(){
    var elem = $(this);
    if (document.body.clientWidth <= 576) {
      $('.footer__menu-list').each(function(i,e) {
        if (elem.has(e).length === 0) {
          $(e).slideUp();
        }
      });
      elem.find('.footer__menu-list').slideToggle();
    }
  });

  /* Делаем картинку лого инлайновой */
  $('a.logo img').each(function(){
    var $img = $(this);
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    $.get(imgURL, function(data) {
      var $svg = $(data).find('svg');
      if(typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass+' replaced-svg');
      }
      $svg = $svg.removeAttr('xmlns:a');
      if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
      }
      $img.replaceWith($svg);
    }, 'xml');
  });

  /* Табы "услуги" */
   $(".scr_services-tabs .tabs__nav a").click(function(event) {
      event.preventDefault();
      $(this).parent().addClass("current");
      $(this).parent().siblings().removeClass("current");
      var tab = $(this).attr("href");
      $(".scr_services-tabs .tabs__item").not(tab).slideUp();
      $(tab).slideDown();
  });

  /* ToDo: условие на страницу */
  function mapActivate(xID) {
    if (document.querySelector("#" + xID + "") !== null) {

      /* Карта */
      var myMap;

      // Дождёмся загрузки API и готовности DOM.
      ymaps.ready(init);

      function init () {
          // Создание экземпляра карты и его привязка к контейнеру с
          // заданным id ("map").
          myMap = new ymaps.Map(xID, {
              // При инициализации карты обязательно нужно указать
              // её центр и коэффициент масштабирования.
              center: [44.604014, 33.505597],
              zoom: 16
          }, {
              searchControlProvider: 'yandex#search'
          });

          // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),

            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'ул. Пожарова 20/2',
                balloonContent: 'ТехноТерм'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'img/favicon/fav192.png',
                // Размеры метки.
                iconImageSize: [50, 50],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-15, -66]
            }),

            myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
                hintContent: '',
                balloonContent: '',
                iconContent: ''
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#imageWithContent',
                // Своё изображение иконки метки.
                // iconImageHref: 'images/ball.png',
                // Размеры метки.
                iconImageSize: [48, 48],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-24, -24],
                // Смещение слоя с содержимым относительно слоя с картинкой.
                iconContentOffset: [15, 15],
                // Макет содержимого.
                iconContentLayout: MyIconContentLayout
            });

        myMap.geoObjects
            .add(myPlacemark)
            .add(myPlacemarkWithContent);

        myMap.behaviors.disable('scrollZoom');

      }
    }
  }

  mapActivate('screen_map');
  mapActivate('screen_map_inner');

})(jQuery);
