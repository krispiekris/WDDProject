
document.getElementById("my2DIV").onclick = function my2Function() {
  var smthng = document.getElementById("mainNavbar");
  smthng.classList.add("scrolled2");
}



$(function () {
  $(document).scroll(function () {
    var $nav = $("#mainNavbar");

    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height()); //when we reach a certain point

  })
})























