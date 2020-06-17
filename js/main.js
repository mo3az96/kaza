$(window).on('load', function () {
    $('.pre-loader').fadeOut("500", function () {
        $('body').removeClass("overflow");
        $(this).remove();
    });
});
$(document).ready(function () {
    if ($(window).width() > 767) {
        $('select.selectpicker').selectpicker({
            dropupAuto: false
        });
    }
    var mainswiper = new Swiper('.main-slider .swiper-container', {
        spaceBetween: 10,
        loop: true,
        effect: 'fade',
        speed: 500,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.main-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.main-slider .swiper-button-next',
            prevEl: '.main-slider .swiper-button-prev',
        },
    });

    var catswiper = new Swiper('.cats-slider .swiper-container', {
        slidesPerView: 8,
        spaceBetween: 1,
        loop: true,
        pagination: {
            el: '.cats-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.cats-slider .swiper-button-next',
            prevEl: '.cats-slider .swiper-button-prev',
        },
        breakpoints: {
            480: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            },
            1500: {
                slidesPerView: 7,
            },
        },
    });

    var bestsellerswiper = new Swiper('.bestseller .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.bestseller .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.bestseller .swiper-button-next',
            prevEl: '.bestseller .swiper-button-prev',
        },
        breakpoints: {
            480: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1500: {
                slidesPerView: 4,
            },
        },
    });
    var cat1swiper = new Swiper('#cat1 .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        observer: true,
        observeParents: true,
        pagination: {
            el: '#cat1 .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '#cat1 .swiper-button-next',
            prevEl: '#cat1 .swiper-button-prev',
        },
        breakpoints: {
            480: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1500: {
                slidesPerView: 4,
            },
        },
    });
    var cat2swiper = new Swiper('#cat2 .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        observer: true,
        observeParents: true,
        pagination: {
            el: '#cat2 .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '#cat2 .swiper-button-next',
            prevEl: '#cat2 .swiper-button-prev',
        },
        breakpoints: {
            480: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1500: {
                slidesPerView: 4,
            },
        },
    });
    var cat3swiper = new Swiper('#cat3 .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        observer: true,
        observeParents: true,
        pagination: {
            el: '#cat3 .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '#cat3 .swiper-button-next',
            prevEl: '#cat3 .swiper-button-prev',
        },
        breakpoints: {
            480: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1500: {
                slidesPerView: 4,
            },
        },
    });
    var cat4swiper = new Swiper('#cat4 .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        observer: true,
        observeParents: true,
        pagination: {
            el: '#cat4 .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '#cat4 .swiper-button-next',
            prevEl: '#cat4 .swiper-button-prev',
        },
        breakpoints: {
            480: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1500: {
                slidesPerView: 4,
            },
        },
    });
    var cat5swiper = new Swiper('#cat5 .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        observer: true,
        observeParents: true,
        pagination: {
            el: '#cat5 .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '#cat5 .swiper-button-next',
            prevEl: '#cat5 .swiper-button-prev',
        },
        breakpoints: {
            480: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1500: {
                slidesPerView: 4,
            },
        },
    });

    /////////////side////////////////
    $('.cats-btn').click(function (e) {
        $(".cats-dispaly").slideToggle("500");
        $(".mo-overlay").fadeToggle(500);
        $(".cats-btn ").toggleClass("active");
        if ($(window).width() <= 767) {
            $(".mo-overlay").hide();
            $('body').addClass("overflow");
        }
    });
    $('.mo-overlay').click(function () {
        $(".cats-dispaly").slideUp("500");
        $(".mo-overlay").fadeOut(500);
        $(".cats-btn ").removeClass("active");
    });
    if ($(window).width() <= 991) {
        //////search //////
        $(".search-select").removeClass("selectpicker");
        $(".search-select").addClass("mobile-select");
        $(".search-select").wrap('<div class="mobile-select-cont"></div>');

        $('.mo-search-icon').click(function () {
            $(".search-form").fadeIn(300);
            $(".search-cont").addClass("open");
            $("body").addClass("overflow");
        });
        $('.search-form').click(function () {
            $("body").removeClass("overflow");
            $(".search-cont").removeClass("open");
            $(".search-form").fadeOut(400);
        });
        $('.search-cont').click(function (e) {
            e.stopPropagation();
        });
        //////menu //////
        $(".cats-dispaly .sub-list").unwrap();
        $(".cats-btn").addClass("mo-accordion");
        $(".xs-li .nav-anchor").addClass("mo-accordion");
        $(".sub-list").addClass("mo-panel");

        $('.mo-menu-icon').click(function () {
            $("nav").fadeIn(400);
            $(".nav-cont").addClass("nav-in");
            $("body").addClass("overflow");
        });

        $('nav').click(function () {
            $("nav").fadeOut(400);
            $(".nav-cont").removeClass("nav-in");
            $("body").removeClass("overflow");
        });
        $('.nav-cont').click(function (e) {
            e.stopPropagation();
        });
        $('.menu-close-btn').click(function () {
            $("nav").fadeOut(400);
            $(".nav-cont").removeClass("nav-in");
            $("body").removeClass("overflow");
        });
    }
    ////////////////////////////acc/////
    if ($(window).width() <= 767) {
        $(".nav-foot-header").addClass("mo-accordion");
        $(".nav-foot").addClass("mo-panel");
    }
    $('.mo-accordion').click(function () {
        var x = $(this).siblings().prop('scrollHeight') + 12 + "px";
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('max-height') == '0px') {
            $(this).siblings().css('max-height', x);
            $(this).siblings('.nav-foot').css('padding-top', "15px");
        } else {
            $(this).siblings().css('max-height', '0');
            $(this).siblings('.nav-foot').css('padding-top', "0");
        }

        $(".mo-accordion").not(this).siblings().css('max-height', '0');
        $(".mo-accordion").not(this).siblings('.nav-foot').css('padding-top', "0");
    })
});