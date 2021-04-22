$(document).ready(function($) {
  $('.tabs li > a').click(function(e) {
    e.preventDefault();
  });
    $('.tab_content').hide();
    $('.tab_content:first').show();
    $('.content2 .tabs li:first').addClass('active');
    $('.content2 .tabs li').click(function(event) {      
      $('.content2 .tabs li').removeClass('active');
      $(this).addClass('active');
      $('.tab_content').hide();
  
      var selectTab = $(this).find('a').attr("href");
  
      $(selectTab).fadeIn();
    });
  });

  $(document).ready(function($) {
    $('.tab_content1').hide();
    $('.tab_content1:first').show();
    $('.tabs1 li:first').addClass('active');
    $('.tabs1 li').click(function(event) {
      $('.tabs1 li').removeClass('active');
      $(this).addClass('active');
      $('.tab_content1').hide();
  
      var selectTab = $(this).find('a').attr("href");
  
      $(selectTab).fadeIn();
    });
  });