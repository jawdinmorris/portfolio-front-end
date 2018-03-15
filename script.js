$(document).ready(function() {
        // Transition effect for navbar
        $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > 300) {
              $('.navComponent').addClass('solid');
              $('nav').addClass('navShadow');
          } else {
              $('.navComponent').removeClass('solid');
              $('nav').removeClass('navShadow');
          }
        });
});
