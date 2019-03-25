$(document).ready(function () {
  var width = parseInt($(window).width());
  $('.js-sidebarlink').on('click', function (myfunction) {
    var sub =  $(this).next(".js-submenu");
    sub.slideToggle();
    $("i",this).toggleClass("fa-caret-right fa-caret-down");
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
    var container = $(".js-dropdown--menu");
    if (!e.target.matches(".js-admin")) {
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
      }
    }
  });
  ///responsive sidebar
////////hide sidebar when click out sidebar
  $(".js-section-main").on('click',function(){
    if ($(this).css('opacity') == 0.3 ) {
      $('.js-section-main').animate({left:0,opacity: '1'});
      $('.js-navbar-main').animate({left: size});
    }
  });
  if(width <= 991) {
    var slideControl = 0;
    var menuSize = 264;
    var size = -272;
    $('.js-navbar-toggle').on('click',function(){
      if(slideControl < 1){
        $('.js-section-main').animate({opacity: '0.3'});
        $('.js-navbar-main').animate({left: 0});
        slideControl = 1;
      }
      else {
        $('.js-section-main').animate({opacity: '1'});
        $('.js-navbar-main').animate({left: size});
        slideControl = 0;
      }
    });
  }
});
