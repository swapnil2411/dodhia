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
                items:3
            },
            1000:{
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
        items:4,
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

    $('.left_manufacture_prod_carousel').owlCarousel({
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

    $('.open_market_list').on('click', function(){
        // $('.market_loction_world').addClass('open_market_location');
        $('.market_loction_world').toggleClass('open_market_location');
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
        $(this).parent('.help_form_floating').toggleClass('position_form');
        $(this).parent().parent().parent('.help_form_area').toggleClass('overflow_unset');
        
    })

    $('.count-up').countUp({
        'time': 2000,
    });
    
})