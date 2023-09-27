$(function () {
  $(".trigger").click(function () {
    $(this).toggleClass("active");
    $(".gnb-wrap").toggleClass("active");
  });

  $(".trigger").click(function () {
    $(".gnb-wrap, .trigger").removeClass("active");
  });
});
