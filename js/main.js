$(document).ready(() => {
  $nav = $(".nav");
  $toggleCollapse = $(".toggle-collapse");

  // click event on toggle menu
  $toggleCollapse.click(() => {
    $nav.toggleClass("collapse");
  });

  // owl-carousel
  $('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    dots: false,
    nav: true,
    navText:[$('.owl-nav .owl-prev'), $('.owl-nav .owl-next')]
  });
});
