//= require jquery
//= require materialize-sprockets

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

  var ifExists = document.querySelector('#contact form')
  if (ifExists !== null) {
    var bricklayer = new Bricklayer(document.querySelector('.development .bricklayer'))
    var bricklayer = new Bricklayer(document.querySelector('.design .bricklayer'))
  }
  
$(document).ready(function(){
  $(".dropdown-button").dropdown();

  // var navBarY = $(".bottom-bar").offset().top;
  // $(document).scroll(function () {
  //   if ($(window).scrollTop() >= navBarY) {
  //     $(".bottom-bar").addClass("fixed-top")
  //   } else {
  //     $(".bottom-bar").removeClass("fixed-top")
  //   }
  // })

  var height = (window).innerHeight
  $('.home').css({'height':height})

}) 
