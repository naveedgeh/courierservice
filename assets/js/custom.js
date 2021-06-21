/*
| ----------------------------------------------------------------------------------
| TABLE OF CONTENT
| ----------------------------------------------------------------------------------
-SETTING
-Preloader
-Sticky Header
-Dropdown Menu Fade
-Menu Android
-Search Animation
-Disable Mobile Animated
-Animated Entrances
-Accordion
-Tooltips
-Chars Start
-Сustomization select
-Tooltip
-Zoom Images
-HOME SLIDER
-Slider thumbnails
-OWL Sliders
-Animated WOW
-Scroll Animation
*/



$(document).ready(function() {

    "use strict";



/////////////////////////////////////////////////////////////////
// SETTING
/////////////////////////////////////////////////////////////////

    var windowHeight = $(window).height();
    var windowWidth = $(window).width();


    var tabletWidth = 767;
    var mobileWidth = 640;



/////////////////////////////////////////////////////////////////
// Preloader
/////////////////////////////////////////////////////////////////


    var $preloader = $('#page-preloader'),
    $spinner   = $preloader.find('.spinner-loader');
    $spinner.fadeOut();
    $preloader.delay(50).fadeOut('slow');



/////////////////////////////////////
//  Sticky Header
/////////////////////////////////////


    if (windowWidth > tabletWidth) {

        var headerSticky = $(".layout-theme").data("header");
        var headerTop = $(".layout-theme").data("header-top");

        if (headerSticky.length) {
            $(window).on('scroll', function() {
                var winH = $(window).scrollTop();
                var $pageHeader = $('.header');
                if (winH > headerTop) {

                    $('.yamm').addClass("animated");
                    $('.yamm').addClass("animation-done");
                    $('.yamm').addClass("bounce");
                    $pageHeader.addClass('sticky');

                } else {

                    $('.yamm').removeClass("bounce");
                    $('.yamm').removeClass("animated");
                    $('.yamm').removeClass("animation-done");
                    $pageHeader.removeClass('sticky');
                }
            });
        }
    }



/////////////////////////////////////////////////////////////////
//   Dropdown Menu Fade
/////////////////////////////////////////////////////////////////


    $(".dropdown").hover(
        function() {
            $('.dropdown-menu', this).stop(true, true).slideDown("fast");
            $(this).toggleClass('open');
        },
        function() {
            $('.dropdown-menu', this).stop(true, true).slideUp("fast");
            $(this).toggleClass('open');
        }
    );


    $(".yamm .navbar-nav>li").hover(
        function() {
            $('.dropdown-menu', this).fadeIn("fast");
        },
        function() {
            $('.dropdown-menu', this).fadeOut("fast");
        });


    window.prettyPrint && prettyPrint();
    $(document).on('click', '.yamm .dropdown-menu', function(e) {
        e.stopPropagation();
    });



/////////////////////////////////////
//  Menu Android
/////////////////////////////////////

$( '.navbar-nav li:has(ul)' ).doubleTapToGo();



/////////////////////////////////////
//  Search Animation
/////////////////////////////////////


    $('#search-open, #search-close').on('click', function(e) {
        e.preventDefault();
        $('.header-search ').toggleClass('open-search');
        $('.header-search').toggleClass('open');
    });



/////////////////////////////////////
//  Disable Mobile Animated
/////////////////////////////////////

    if (windowWidth < mobileWidth) {

        $("body").removeClass("animated-css");

    }


        $('.animated-css .animated:not(.animation-done)').waypoint(function() {

                var animation = $(this).data('animation');

                $(this).addClass('animation-done').addClass(animation);

        }, {
                        triggerOnce: true,
                        offset: '90%'
        });



//////////////////////////////
// Animated Entrances
//////////////////////////////



    if (windowWidth > 1200) {

        $(window).scroll(function() {
                $('.animatedEntrance').each(function() {
                        var imagePos = $(this).offset().top;

                        var topOfWindow = $(window).scrollTop();
                        if (imagePos < topOfWindow + 400) {
                                        $(this).addClass("slideUp"); // slideUp, slideDown, slideLeft, slideRight, slideExpandUp, expandUp, fadeIn, expandOpen, bigEntrance, hatch
                        }
                });
        });

    }


/////////////////////////////////////
//  Search Animation
/////////////////////////////////////


    $(document).on("click", ".btn_header_search", function (event) {
        event.preventDefault();
        $(".search-form-modal").addClass("open");
    });
    $(document).on("click", ".search-form_close", function (event) {
        event.preventDefault();
        $(".search-form-modal").removeClass("open");
    });




/////////////////////////////////////////////////////////////////
// Accordion
/////////////////////////////////////////////////////////////////

    $(".btn-collapse").on('click', function () {
            $(this).parents('.panel-group').children('.panel').removeClass('panel-default');
            $(this).parents('.panel').addClass('panel-default');
            if ($(this).is(".collapsed")) {
                $('.panel-title').removeClass('panel-passive');
            }
            else {$(this).next().toggleClass('panel-passive');
        };
    });




/////////////////////////////////////
//  Tooltip
/////////////////////////////////////


    $('.link-tooltip-1').tooltip({
    template: '<div class="tooltip tooltip-1" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  });
    $('.link-tooltip-2').tooltip({
    template: '<div class="tooltip tooltip-2" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  });


/////////////////////////////////////
//  Chars Start
/////////////////////////////////////

    if ($('body').length) {
            $(window).on('scroll', function() {
                    var winH = $(window).scrollTop();

                    $('.list-progress').waypoint(function() {
                            $('.chart').each(function() {
                                    CharsStart();
                            });
                    }, {
                            offset: '80%'
                    });
            });
    }


        function CharsStart() {
            $('.chart').easyPieChart({
                    barColor: false,
                    trackColor: false,
                    scaleColor: false,
                    scaleLength: false,
                    lineCap: false,
                    lineWidth: false,
                    size: false,
                    animate: 7000,

                    onStep: function(from, to, percent) {
                            $(this.el).find('.percent').text(Math.round(percent));
                    }
            });

        }



/////////////////////////////////////////////////////////////////
// Сustomization select
/////////////////////////////////////////////////////////////////

    $('.selectpicker').selectpicker();



/////////////////////////////////////
//  Tooltip
/////////////////////////////////////


    $('.link-tooltip').tooltip();



/////////////////////////////////////
//  Zoom Images
/////////////////////////////////////


    $(".prettyPhoto").prettyPhoto({animation_speed:'normal',theme:'light_square',slideshow:3000});




////////////////////////////////////////////
// HOME SLIDER
///////////////////////////////////////////


    if ($('#my-slider').length > 0) {


            var sliderWidth = $("#my-slider").data("slider-width");
            var sliderHeigth = $("#my-slider").data("slider-height");

            $( '#my-slider' ).sliderPro({
            width:  sliderWidth,
            height: sliderHeigth,
            fade: true,
            loop: false,
            arrows: false,
            buttons: false,
            autoplay: true,
            autoScaleLayers: false,
            thumbnailHeight: 40,
            thumbnailWidth: 40,
            thumbnailPointer: false,
            thumbnailTouchSwipe: true,
            breakpoints: {
                500: {
                    thumbnailWidth: 30,
                    thumbnailHeight: 30
                }
            }
        });
    }



////////////////////////////////////////////
// Slider thumbnails
///////////////////////////////////////////



        if ($('#slider-product').length > 0) {

                    // The slider being synced must be initialized first
                    $('#carousel-product').flexslider({
                        animation: "slide",
                        controlNav: false,
                        directionNav: false,
                        animationLoop: false,
                        slideshow: true,
                        itemWidth: 84,
                        itemMargin: 8,
                        asNavFor: '#slider-product',
                        direction: "vertical",
                        smoothHeight: true
                    });

                    $('#slider-product').flexslider({
                        animation: "slide",
                        controlNav: false,
                        animationLoop: false,
                        slideshow: true,
                        sync: "#carousel-product",
                        smoothHeight: true
                    });
        }





/////////////////////////////////////////////////////////////////
// OWL Sliders
/////////////////////////////////////////////////////////////////

    var Core = {

        initialized: false,

        initialize: function() {

                if (this.initialized) return;
                this.initialized = true;

                this.build();

        },

        build: function() {

        // Owl Carousel

            this.initOwlCarousel();
        },
        initOwlCarousel: function(options) {

            $(".enable-owl-carousel").each(function(i) {
                var $owl = $(this);

                var itemsData = $owl.data('items');
                var navigationData = $owl.data('navigation');
                var paginationData = $owl.data('pagination');
                var singleItemData = $owl.data('single-item');
                var autoPlayData = $owl.data('auto-play');
                var transitionStyleData = $owl.data('transition-style');
                var mainSliderData = $owl.data('main-text-animation');
                var afterInitDelay = $owl.data('after-init-delay');
                var stopOnHoverData = $owl.data('stop-on-hover');
                var min480 = $owl.data('min480');
                var min768 = $owl.data('min768');
                var min992 = $owl.data('min992');
                var min1200 = $owl.data('min1200');

                $owl.owlCarousel({
                    navigation : navigationData,
                    pagination: paginationData,
                    singleItem : singleItemData,
                    autoPlay : autoPlayData,
                    transitionStyle : transitionStyleData,
                    stopOnHover: stopOnHoverData,
                    navigationText : ["<i></i>","<i></i>"],
                    items: itemsData,
                    itemsCustom:[
                                    [0, 1],
                                    [465, min480],
                                    [750, min768],
                                    [975, min992],
                                    [1185, min1200]
                    ],
                    afterInit: function(elem){
                                if(mainSliderData){
                                        setTimeout(function(){
                                                $('.main-slider_zoomIn').css('visibility','visible').removeClass('zoomIn').addClass('zoomIn');
                                                $('.main-slider_fadeInLeft').css('visibility','visible').removeClass('fadeInLeft').addClass('fadeInLeft');
                                                $('.main-slider_fadeInLeftBig').css('visibility','visible').removeClass('fadeInLeftBig').addClass('fadeInLeftBig');
                                                $('.main-slider_fadeInRightBig').css('visibility','visible').removeClass('fadeInRightBig').addClass('fadeInRightBig');
                                        }, afterInitDelay);
                                    }
                    },
                    beforeMove: function(elem){
                        if(mainSliderData){
                                $('.main-slider_zoomIn').css('visibility','hidden').removeClass('zoomIn');
                                $('.main-slider_slideInUp').css('visibility','hidden').removeClass('slideInUp');
                                $('.main-slider_fadeInLeft').css('visibility','hidden').removeClass('fadeInLeft');
                                $('.main-slider_fadeInRight').css('visibility','hidden').removeClass('fadeInRight');
                                $('.main-slider_fadeInLeftBig').css('visibility','hidden').removeClass('fadeInLeftBig');
                                $('.main-slider_fadeInRightBig').css('visibility','hidden').removeClass('fadeInRightBig');
                        }
                    },
                    afterMove: sliderContentAnimate,
                    afterUpdate: sliderContentAnimate,
                });
            });

            function sliderContentAnimate(elem){
                var $elem = elem;
                var afterMoveDelay = $elem.data('after-move-delay');
                var mainSliderData = $elem.data('main-text-animation');
                if(mainSliderData){
                    setTimeout(function(){
                        $('.main-slider_zoomIn').css('visibility','visible').addClass('zoomIn');
                        $('.main-slider_slideInUp').css('visibility','visible').addClass('slideInUp');
                        $('.main-slider_fadeInLeft').css('visibility','visible').addClass('fadeInLeft');
                        $('.main-slider_fadeInRight').css('visibility','visible').addClass('fadeInRight');
                        $('.main-slider_fadeInLeftBig').css('visibility','visible').addClass('fadeInLeftBig');
                        $('.main-slider_fadeInRightBig').css('visibility','visible').addClass('fadeInRightBig');
                    }, afterMoveDelay);
                }
            }
        },

    };

    Core.initialize();


});


/////////////////////////////////////
//  Scroll Animation
/////////////////////////////////////


//window.sr = ScrollReveal({
 //       mobile:false,
     //   reset:true
   // });

    //sr.reveal('.wow');



    
