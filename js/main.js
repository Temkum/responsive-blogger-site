// make items responsive
const responsive = {
  0: {
    items: 1,
  },
  320: {
    items: 1,
  },
  560: {
    items: 2,
  },
  1024: {
    items: 3,
  },
  1440: {
    items: 4,
  },
};

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
    autoplayTimeout: 3000,
    dots: false,
    nav: true,
    navText: [$(".owl-nav .owl-prev"), $(".owl-nav .owl-next")],
    responsive: responsive,
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

  // animate on scroll
  AOS.init();
});
