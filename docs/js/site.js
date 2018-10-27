$(function(){
  $('.nav-menu-toggle').click(function() {
    $(this).toggleClass('nav-open', 'nav-closed')
    $('.mobile-nav').toggleClass('hidden')
  })
})

