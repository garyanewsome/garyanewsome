$(function(){
  $(".mobile-nav").hide()

  $(".nav-menu-toggle").on('click', function() {
    $('.mobile-nav').fadeToggle()
  })
})

