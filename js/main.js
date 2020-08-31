$(document).ready(() => {
  $nav = $(".nav");
  $toggleCollapse = $(".toggle-collapse");

  // click event on toggle menu
  $toggleCollapse.click(() => {
    $nav.toggleClass("collapse");
  });

  // owl-carousel
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 4000,
    dots: false,
    nav: true,
    navText: [$(".owl-nav .owl-prev"), $(".owl-nav .owl-next")],
  });

  // scroll to top
  $(".scroll-up span").click(() => {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });
});
