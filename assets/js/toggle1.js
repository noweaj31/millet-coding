$(function () {
  $(".trigger").click(function () {
    $(this).toggleClass("active");
    $(".gnb-wrap").toggleClass("active");
  });

  $(".gnb-wrap span").click(function () {
    $(".gnb-wrap").removeClass("active");
  });
});
