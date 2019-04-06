$(document).ready(() => {
  //icon to scroll to top
  $('.arrow-btn').on('click', () => {
    $('body, html').animate({
      scrollTop: 0
    }, 'fast');
  });

  //icon fading mechanism
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 350) {
     $('.arrow-btn').fadeIn('slow');
    } else {
     $('.arrow-btn').fadeOut();
    }
  });

  //smooth scroll to topic
  function scrollToAnchor(anchor) {
    const $navAnchor = $("section[data-name='"+ anchor +"']");
    const $position = $navAnchor.offset().top;
      $('html, body').animate({
        scrollTop: $position
      }, 'slow');
    };

    $('.nav-link').on('click', function() {
      scrollToAnchor(this.id);
    });
});