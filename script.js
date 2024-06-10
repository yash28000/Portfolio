$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
      event.preventDefault();
  
      var target = $(this.getAttribute('href'));
  
      if (target.length) {
        $('html, body').stop().animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    });
  
    // Show/hide the "Back to Top" button
    $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
        $('.up').fadeIn();
      } else {
        $('.up').fadeOut();
      }
    });
  
    $('.up').click(function() {
      $('html, body').animate({ scrollTop: 0 }, 1000);
      return false;
    });
  });