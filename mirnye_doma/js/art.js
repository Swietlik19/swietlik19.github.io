$('.open_button_mob').click(function() {  
    $('.open_button_mob').not(this).removeClass('point_art');
    $(this).toggleClass('point_art');
});