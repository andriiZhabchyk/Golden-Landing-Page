'use strict';

$(document).ready(function(){
    fixedHeader (); //call fixed header function
    smoothScroll (); //call smooth scroll function
    activeNav (); //call active navigation function
    scrollParallax (); // call parallax function home page
    fadeServices(); //call function services fadeIn
    portfolioHover(); //call function portfolio hover
    aosAnimate(); //call aos animate function
    activeClassNav();//call active navigation function
    toggleMenu();// call toggle menu function
    removeEffectsTextH ();// call function remove effects into h3 & p into section
});

/*Fixed header function*/
function fixedHeader () {
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 30 && $("header").hasClass("default") ){
            $("header").removeClass("default").addClass("fixed");
        } else if($(this).scrollTop() <= 30 && $("header").hasClass("fixed")) {
            $("header").removeClass("fixed").addClass("default");
        }
    });
}

/*Smooth scroll function*/
function smoothScroll () {
    $('a[href^="#"]').bind("click", function(e){
        let anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 700);
        e.preventDefault();
    });   
}

//active class to navigation
function activeNav() {
    $('li > a').click(function () {
        if (window.matchMedia('screen and (max-width: 768px)').matches) {
            $('.nav').hide();

            $('header').css({
                'background': '#222',
                'opacity': '.8'
            });
        }

        $('ul > li').removeClass('liToggle');
        $('a').removeClass('active');
        $(event.currentTarget).addClass('active');
    });
}

//parallax function
function scrollParallax () {
    $(window).scroll( function () {
        if (window.matchMedia('screen and (min-width: 768px)').matches) {
            let scroll = $(this).scrollTop();
            let scrollHomeScreen = $('.home > h3, h1, .btn');

            $(scrollHomeScreen).css(
                `transform`, `translate(0%, ${scroll/5}%)`
            );

            if ($(this).scrollTop() > 700) {
                $(scrollHomeScreen).css(
                    `transform`, `translate(0%, 0%)`
                )
            }
        }
    });
}

//functions services fadeIn
function fadeServices() {
    $(window).scroll( function () {
        if ($(this).scrollTop() === $('#services').offset().top && window.matchMedia('screen and (min-width: 768px)').matches){   //offset by elem from start page
            anime({
                targets: '.services',
                opacity: 0
            });

            let relativeOffset = anime.timeline(); //anime duration timeline

            relativeOffset
                .add({
                    targets: '.responsive',
                    translateX: [- 200, 0],
                    easing: 'linear',
                    opacity: [0, 1],
                    duration: 300
                })
                .add({
                    targets: '.security',
                    translateX: [- 400, 0],
                    easing: 'linear',
                    opacity: [0, 1],
                    duration: 400
                })
                .add({
                    targets: '.services',
                    translateY: [-50, 0],
                    opacity: [0, 1],
                    offset: '-=100',
                    duration: 500
                });
        }
    });
}

//hover effect to item portfolio cell
function portfolioHover() {
    $('.hover').mouseover(function () {
        if (window.matchMedia('screen and (min-width: 768px)').matches) {
            $(event.currentTarget).siblings('.p-item-footer').addClass('hoverText');
        }
    });
    $('.hover').mouseleave(function () {
        $(event.currentTarget).siblings('.p-item-footer').removeClass('hoverText');
    });
}

//aos jquery plugin animate
function aosAnimate() {
    AOS.init({
        duration: 250,
        easing: 'ease-in-sine',
        delay: 100,
    });
}

//active class to navigation
function activeClassNav() {
    $(window).scroll( function () {
        let scroll = $(this).scrollTop();
        $('a').removeClass('active');

        if (scroll >= $('#home').offset().top -100 && scroll < $('#services').offset().top - 100) {
            $('li > a[href="#home"]').addClass('active');
        }
        if (scroll > $('#services').offset().top -100 && scroll < $('#portfolio').offset().top - 100) {
            $('li > a[href="#services"]').addClass('active');
        }
        if (scroll > $('#portfolio').offset().top -100 && scroll < $('#about').offset().top - 100) {
            $('li > a[href="#portfolio"]').addClass('active');
        }
        if (scroll > $('#about').offset().top -100 && scroll < $('#contact').offset().top - 100) {
            $('li > a[href="#about"]').addClass('active');
        }
        if (scroll > $('#contact').offset().top -100) {
            $('li > a[href="#contact"]').addClass('active');
        }
    });
}

//toggle menu function
function toggleMenu() {
    $('.toggle').click(function () {
        if (!$('ul > li').hasClass('liToggle')){
            let toggle = $('.nav');
            toggle.css('display', 'block');

            $('a').removeClass('active');
            $("header").css({
                'background' : '#777'
            });

            $('ul > li').addClass('liToggle');
        } else {
            $('ul > li').removeClass('liToggle');
            $('.nav').css('display', 'none');
            $('header').css('background', 'none');
        }
    });
}

/*Remove fade effects h3 & p section into section */
function removeEffectsTextH () {
    if (window.matchMedia('screen and (max-width: 768px)').matches) {
        $('h2, p, input, textarea, .item-employer').removeAttr('data-aos');
    }
}


