(function($){

  $('#partners__slider .slider1__slides').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {      
          arrows: false,
          dots: true,
          appendDots: $('#partners__slider .slider1__dots')
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,          
          arrows: false,
          dots: true,
          appendDots: $('#partners__slider .slider1__dots')
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,          
          arrows: false,
          dots: true,
          appendDots: $('#partners__slider .slider1__dots')
        }
      }
    ]
  });

  // function equalHeight(sliderID) {
  //   var slides = $(sliderID + ' .slick-slide');
  //   var stHeight = 0;
  //   slides.each(function(i, el) {
  //     if ($(el).height() > stHeight) {
  //       stHeight = $(el).height();
  //     }
  //   });

  //   $(sliderID + ' .slick-slide').css('minHeight',stHeight + 'px' );
  //   $(sliderID + ' .choose__item').css('minHeight',stHeight + 'px' );
  // }

  // equalHeight('#choose__slider');
  // equalHeight('#choose__slider--not-infinite');

  // $(window).resize(function() {
  //   equalHeight();
  // });
  
	
})(jQuery);