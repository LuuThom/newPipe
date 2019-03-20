$(document).ready(function(){
    $('.js-sidebarlink').on('click', function(myfunction) {
        myfunction.preventDefault();
        var $this = $(this);
        if($this.next().hasClass('show')){
            $this.next().removeClass('show');
            $this.next().slideUp(350);
            console.log($this.next());
        }
        else 
        {
            $this.parent().parent().find('.js-submenu').removeClass('show');
            $this.parent().parent().find('.js-submenu').slideUp(350);
            $this.next().toggleClass('show');
            $this.next().slideToggle();
        }
    });
    $('html').on('click',function(){
        $('.js-submenu').hide();
    });
    $(window).on('click',function(event){
        event.stopPropagation();
    })
})