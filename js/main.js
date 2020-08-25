$(document).ready(() => {
  $nav = $(".nav");
  $toggleCollapse = $(".toggle-collapse");

  // click event on toggle menu
  $toggleCollapse.click(() => {
    $nav.toggleClass("collapse");
  });
});
