(function($){

  $('#scr1__slider .scr1__slides').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    dots: true,
    appendArrows: $('.scr1__arrows'),
    appendDots: $('.scr1__dots'),
    fade: true,
    speed: 700
  });

  $('#scr1__slider .scr1__slides').on('afterChange', function(event, slick, currentSlide){
    var currentNum = currentSlide + 1;
    $('#scr1__slider .slider1__num').text('' + currentNum + '');
  });

  $('#products__slider1 .products__slides').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    appendArrows: $('#products__slider1')
  });

  $('#products__slider2 .products__slides').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    appendArrows: $('#products__slider2')
  });


  // $('#partners__slider .slider1__slides').slick({
  //   infinite: true,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 5000,
  //   arrows: true,
  //   responsive: [
  //     {
  //       breakpoint: 1200,
  //       settings: {
  //         arrows: false,
  //         dots: true,
  //         appendDots: $('#partners__slider .slider1__dots')
  //       }
  //     }
  //   ]
  // });

  function equalHeight(sliderID) {
    $(sliderID).find('.slick-slide').height('auto');
    var slickTrack = $(sliderID).find('.slick-track');
    var slickTrackHeight = $(slickTrack).outerHeight();
    $(sliderID).find('.slick-slide').css('height', slickTrackHeight + 'px');
  }

  $('#products__slider1 .products__slides').on('setPosition', function(){
    equalHeight('#products__slider1');
  });

  $(window).resize(function() {
    equalHeight('#products__slider1');
  });


})(jQuery);
