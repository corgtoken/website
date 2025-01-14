$(document).ready(function () {
  var fixed_top = $("header");
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 300) {
      fixed_top.addClass("header-fixed fadeInUp");
    } else {
      fixed_top.removeClass("header-fixed fadeInUp");
    }
  });
});
