$(document).ready(function () {
    function slide(element) {
    var index = 0;
    carousel();
    function carousel() {
      var i;
      var x = document.getElementsByClassName(element);
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      index++;
      if (index > x.length) { index = 1 }
      x[index - 1].style.display = "block";
      setTimeout(carousel, 3000);
    }
  }
  slide("js-slider1");
  slide("js-slider2");
  slide("js-slider3");
});
