//= require jquery
//= require materialize-sprockets
//= require jquery-colorbox
//= require bricklayer/dist/bricklayer.min

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

var bricklayer = new Bricklayer(document.querySelector('.development .bricklayer'))
var bricklayer = new Bricklayer(document.querySelector('.design .bricklayer'))

$(document).ready(function(){
  // $('.parallax').parallax();
  $(".dropdown-button").dropdown();
});
