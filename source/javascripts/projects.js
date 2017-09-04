//= require jquery
//= require materialize-sprockets
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

  var ifExists = document.querySelector('.bricklayer')
  if (ifExists !== null) {
    var bricklayer = new Bricklayer(document.querySelector('.development .bricklayer'))
    var bricklayer = new Bricklayer(document.querySelector('.design .bricklayer'))
  }

$(document).ready(function(){
  $(".bottom-bar").addClass("fixed-top")
})
