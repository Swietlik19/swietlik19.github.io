new WOW().init();

(function($) {
    
        
    $('.filter_category a').on('click', function(e){
        e.preventDefault();
        $('.filter_category a').removeClass('active');
        $(this).addClass('active');
        var service = $(this).data('service-id');
        $.ajax({
            type: "POST",
            url: window.wp_data.ajax_url,
            data : {
                action : 'get_projects',
                category_id : service
            },
            beforeSend: function() {
                $('#ajax-portfolio-container .work_items').html('');
                $('#ajax-portfolio-container .work_items').addClass("loading");
            },
            success: function (data) {
                $('#ajax-portfolio-container .work_items').removeClass("loading").html(data);
            }
        });
    });
    
    
    $('body').on('click','#load-more-events', function(e){
        e.preventDefault();
        var service = $(this).data('service-id'); // если посты уже отфильтрованы, то в кнопку для загрузки следующей страницы
        var page = $(this).data('page'); // номер страницы для загрузки
        var button = $(this).parent();
        $.ajax({
            type: "POST",
            url: window.wp_data.ajax_url,
            data : {
                action : 'get_projects',
                category_id : service,
                paged : page
            },
            beforeSend: function() {
               $('#ajax-portfolio-container .btn_wr_show_all').html("<span>Загрузка...</span>");
               $('body').addClass('loading');
            },
            success: function (data) {
                button.remove(); //удаляем кнопку
                $('#ajax-portfolio-container .work_items').removeClass("loading").append(data);
                $('body').removeClass('loading');
            }
        });
    });
    	
	$(".projects .fancybox").fancybox({
    	padding: 0,
        scrolling: 'auto',
        beforeShow: function () {
            var t = this.title;
            this.title = '<div class="adv_btn" style="position: relative; z-index: 1;">';
            this.title += '<a class="order_pro">Хочу так же</a>';
            if(t.length){
                this.title += '<a href="'+ t +'" target="_blank" rel="nofollow" class="link_site">Перейти на сайт</a>';
            }
            this.title += '</div>';                
        },
        afterShow: function() {
            $('.order_pro').click(function(){
                $(".form_order_modal").magnificPopup("open");
                $.fancybox.close();
            });
        },
        helpers : {
            title : {
                type: 'inside'
            }
        }  
    });
    
})(jQuery);	 