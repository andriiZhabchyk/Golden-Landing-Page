'use strict';

$(document).ready(function(){

    /*Fixed header*/
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 30 && $("header").hasClass("default") ){
            $("header").removeClass("default").addClass("fixed");
        } else if($(this).scrollTop() <= 30 && $("header").hasClass("fixed")) {
            $("header").removeClass("fixed").addClass("default");
        }
    });

    /*Scroll*/
    $('a[href^="#"]').bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });
});