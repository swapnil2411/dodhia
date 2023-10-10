$(window).ready(function(){
    new WOW().init();
})

$(window).scroll(function(){
    let sticky = $('header'),
    scroll = $(window).scrollTop();

    if (scroll >= 100){
        sticky.addClass('sticky');
    }else {
        sticky.removeClass('sticky');
    }
});



$(document).ready(function(){
    

    $('.certification_carousel').owlCarousel({
        loop:true,
        margin:40,
        nav:false,
        slideBy: 1,
        dots: true,
        dotsEach: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5,
            }
        }
    })

    $('.awards_carousel').owlCarousel({
        loop:true,
        margin:40,
        nav:false,
        slideBy: 1,
        dots: true,
        dotsEach: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2,
            }
        }
    })

    
    $('.team_leader_carousel').owlCarousel({
        loop:true,
        margin:60,
        nav:false,
        slideBy: 1,
        dots: true,
        dotsEach: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3,
            },
            1300: {
                items:4,
            }
        }
    })

    $('.textile_range_carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        slideBy: 1,
        dots: true,
        // dotsEach: true,
        // items:4,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },

            800:{
                items: 3
            },
            1000:{
                items:4,
            }
        }
    })

    $('.past_events_slider').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        slideBy: 1,
        dots: false,
        // dotsEach: true,
        items:4,
        navText: ['<span class="iconify" data-icon="cil:arrow-left"></span>','<span class="iconify" data-icon="cil:arrow-right"></span>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1.5
            },
            1000:{
                items:2.5,
            }
        }
    })

    $('.left_manufacture_prod_carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        slideBy: 1,
        dots: true,
        // dotsEach: true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:2
            },
            768: {
                items:3
            },
            1100:{
                items:4,
            }
        }
    })

    $('.left_chem_prod_carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        slideBy: 1,
        dots: true,
        // dotsEach: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4,
            }
        }
    })
    
    $('.about_timeline_yr').owlCarousel({
        loop:true,
        margin:40,
        nav:true,
        slideBy: 1,
        dots: false,
        navText: ['<span class="iconify" data-icon="cil:arrow-left"></span>','<span class="iconify" data-icon="cil:arrow-right"></span>'],
        // dotsEach: true,
        responsive:{
            0:{
                items:2.5
            },
            600:{
                items:4.5
            },
            1000:{
                items:7.5,
            }
        }
    })

    $(".innovate_carousel").owlCarousel({
        loop:true,
        margin:40,
        nav:false,
        slideBy: 1,
        items: 1,
        dots: true,
        navText: ['<span class="iconify" data-icon="cil:arrow-left"></span>','<span class="iconify" data-icon="cil:arrow-right"></span>'],
        // dotsEach: true,
    })

    $('.open_market_list').on('click', function(){
        // $('.market_loction_world').addClass('open_market_location');
        $('.market_loction_world').toggleClass('open_market_location');
        $(this).siblings(".open_txt").toggleClass("show_closeline");
        $(this).toggleClass("close_market_list");
    })
    
    $('.close_market_map').on('click', function(){
        $('.market_loction_world').removeClass('open_market_location');
    })

    $('.left_product_list .menu div').click(function () {
        var panelToShow = $(this).attr('rel');
        // alert(panelToShow)
        $(this).addClass('active').siblings().removeClass('active')
    
        $('.right_product_desc .product_desc_panel.active').fadeOut(600, function () {
            $(this).removeClass('active');
            $('#' + panelToShow).fadeIn(600, function () {
                $(this).addClass('active');
            })
        })
    })

    $('.help_form_floating .help_form_heading').on('click', function(){
        $(this).children('svg').toggleClass('rotate');
        $(this).parent('.help_form_floating').toggleClass('position_form');
        $(this).parent().parent().parent('.help_form_area').toggleClass('overflow_unset');
        
    })

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
         //>=, not <=
        if (scroll >= 150) {
            //clearHeader, not clearheader - caps H
            $(".how_it_works_txt").addClass("hitSection");
            $(".plastic_recycling_banner").addClass('showHide');
        }
        else{
            $(".how_it_works_txt").removeClass("hitSection");
            $(".plastic_recycling_banner").removeClass('showHide');
        }
    }); //missing );

    $(".hambuger_menu").on("click", function(){
        $('.mobile_navmenu').addClass("show_mobile_menu");
        setTimeout(() => {
            $('.mobile_main_menu ul li a').addClass("show_main_links");
            $('.mobile_other_links a').addClass("show_other_links");
        }, 1000);
        
    })

    $(".close_menu").on("click", function(){
        $('.mobile_main_menu ul li a').removeClass("show_main_links");
        $('.mobile_other_links a').removeClass("show_other_links");
        setTimeout(() => {
            $('.mobile_navmenu').removeClass("show_mobile_menu");
        }, 1000);
       
    })
    


    let windowLocation = window.location.href;
    if (windowLocation.includes("newsroom")){
        $("header").addClass("white_links");
        $(".main_navbar .right_navbar nav ul li a").addClass("white_links");
        $(".header .main_navbar .right_navbar nav ul li.dropdown .btn").addClass("white_links");
    }
    else if (windowLocation.includes("careers")){
        $("header").addClass("white_links");
        $(".main_navbar .right_navbar nav ul li a").addClass("white_links");
        $(".header .main_navbar .right_navbar nav ul li.dropdown .btn").addClass("white_links");
    }
    else if (windowLocation.includes("plasticrecycle")){
        $("header").addClass("plastic_recycle_header")
    }
    else{
        
    }

  


            
            

    $('.count-up').countUp({
        'time': 2000,
    });
    
})