  
(function($){$(document).ready(function(){
  $(".show").click(function() {
      $(".navigation-mobile").toggleClass("active");
  });

    //slider 
    $(function(){
      var $status = $('.pagingInfo');
      var $slickElement = $('.slider__header');
      $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
          //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
          var i = (currentSlide ? currentSlide : 0) + 1;
          $status.html('0' + i + '/'  + '<span>' + '0' + (slick.slideCount) + '</span');
      });
      $('.slider__header').slick({
            dots: true,
            arrows: false,
            infinite: true,
            autoplay: false,
            centerMode: true,
            autoplaySpeed: 5000,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
      });
    });
    $('.certificate__slider').slick({
          dots: true,
          infinite: true,
          arrows: true,
          centerMode: true,
          prevArrow: '<button type="button" class="pre"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
          nextArrow: '<button type="button" class="next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
          autoplaySpeed: 5000,
          speed: 300,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: false,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 740,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
    });

    $('.reviews__slider').slick({
          dots: true,
          autoplay: false,
          autoplaySpeed: 500,
          arrows: true,
          centerMode: true,
          centerPadding: 15,
          infinite: true,
          prevArrow: '<button type="button" class="pre"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
          nextArrow: '<button type="button" class="next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
          slidesToShow: 3,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1150,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });

    //mask
    $(".phone_mask").mask("+7(999)999-99-99");

    $(document).ready(function() {
        $(".fancybox").fancybox();
    });

    // Accordion
    var action = 'click';
    var speed = "500";

    $(document).ready(function() {
      // Question handler
      $('li.tab').on(action,function () {
        // Get next element
          $(this).next()
            .slideToggle(speed)
            .siblings('li.visible')
            .slideUp();
        // Get arrow for active question
        var arrow = $(this).children('.fa');
        // Remove the 'rotate' class for all images except the active.
        $('.fa').not(arrow).removeClass('rotate');
        // Toggle rotate class
        arrow.toggleClass('rotate');
      });
    });

    $(".faq li.tab").click(function(){
        if(!$(this).hasClass('active')){  //если "кликнутый" пункт неактивный:
            $(".tab").removeClass('active');
            $(this).addClass('active');
        } else {
            $(this).removeClass('active')
        }
    }); 

});})(jQuery);