jQuery(document).ready(function () {
  jQuery('a.gallery').colorbox({
    transition: 'fade',
    speed: 250,
    opacity: 0.85,
    rel: 'group1',
    maxWidth: 968,
    maxHeight: 720,
    fadeOut: 250,
    retinaImage: true,
    loop: true
  });
});