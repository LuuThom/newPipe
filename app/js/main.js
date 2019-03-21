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
    $(".js-btn-select").on("click",function(){
        $(".js-dropdown--btn").slideToggle();
    });
    $(".js-admin").on("click",function(){
        $(".js-dropdown--menu").slideToggle();
    });
    $(".js-showmenu").on('click',function(){
        var $this = $(this);
        if ($this.next().hasClass('show')) {
            $this.next().removeClass('show');
            $this.next().slideUp(350);
            console.log($this.next());
        }
        else {
            $this.parent().parent().find('.js-submenu').removeClass('show');
            $this.parent().parent().find('.js-submenu').slideUp(350);
            $this.next().toggleClass('show');
            $this.next().slideToggle();
        }
    });
    $(document).on('click',function(e){
        if(!e.target.matches(".js-btn-select")&&(!e.target.matches(".js-dropdown--btn"))){
            $(".js-dropdown--btn").hide();
        }
        if(!e.target.matches(".js-admin")&&(!e.target.matches(".js-showmenu"))){
            $(".js-dropdown--menu").hide();
        }
    })
    // if (!$(event.target).closest('.form-control').length) {
    //     $(".js-dropdown--btn").slideUp();
    //     $(".js-dropdown--menu").slideUp();
    // }
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
            setTimeout(carousel, 4000);
        }
    }
    slide("js-slider1");
    slide("js-slider2");
    setTimeout(function(){
        slide("js-slider3");
    },3000);
})