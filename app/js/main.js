$(document).ready(function () {
  $('.js-sidebarlink').on('click', function (myfunction) {
    myfunction.preventDefault();
    var $this = $(this);
    if ($this.next().hasClass('show')) {
      $this.next().removeClass('show');
      $this.next().slideUp(350);
    }
    else {
      $this.parent().parent().find('.js-submenu').removeClass('show');
      $this.parent().parent().find('.js-submenu').slideUp(350);
      $this.next().toggleClass('show');
      $this.next().slideToggle();
    }
  });
  
  $(".js-showmenu").on('click', function () {
    var $this = $(this);
    if ($this.next().hasClass('show')) {
      $this.next().removeClass('show');
      $this.next().hide();
    }
    else {
      $this.parent().parent().find('.js-submenu').removeClass('show');
      $this.parent().parent().find('.js-submenu').slideUp(350);
      $this.next().toggleClass('show');
      $this.next().toggle();
    }
  });
  $(".js-btn-select").on("click", function () {
    $(".js-dropdown--btn").toggle();
  });
  $(".js-admin").on("click", function (e) {
    e.stopPropagation();
        $(".js-dropdown--menu").toggle();
  });
  $(document).on('click', function (e) {
    if (!e.target.matches(".js-btn-select") && (!e.target.matches(".js-dropdown--btn"))) {
      $(".js-dropdown--btn").hide();
    }
    var container = $("#menu .js-dropdown--menu");
    if (!e.target.matches(".js-admin")) {
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
      }
    }
  });

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