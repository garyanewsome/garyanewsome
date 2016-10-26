//= require jquery
//= require materialize-sprockets
//= require jquery-colorbox

$(".button-collapse").sideNav();

// jQuery Scroll Animations
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 500);
    }
});

$(document).ready(function(){
  // $('.parallax').parallax();
  $(".dropdown-button").dropdown();
});
