
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




// cases make a change







// test accordion

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}





//test2

function openCategory(evt, Category1) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(Category1).style.display = "block";
  evt.currentTarget.className += " active";
}




// destroyer of the universe
$(".accordion2").on("click", ".accordion2-header", function() {
  $(this).toggleClass("active").next().slideToggle();
});

document.getElementById("smthsmth").click();









