$(window).ready(function(){
    new WOW().init();
})

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

    $('.left_manufacture_prod_carousel').owlCarousel({
        loop:true,
        margin:20,
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


    setTimeout(() => {
        $('.reel_01_anim .left-bottle-crush').addClass('show_left_bottle_crush')
    }, 1000);

    setTimeout(() => {
        $('.reel_02_anim .top-bottle-crush').addClass('show_top_bottle_crush')
    }, 1000);
    
    setTimeout(() => {
        $('.reel_03_anim .right-bottle-crush').addClass('show_right_bottle_crush')
    }, 1000);

    setTimeout(() => {
        $('.reel_01_anim img.red_thread').addClass('show_red_thread')
    }, 2000);

    setTimeout(() => {
        $('.reel_02_anim img.orange_thread').addClass('show_orange_thread')
    }, 2000);

    setTimeout(() => {
        $('.reel_03_anim img.purple_thread').addClass('show_purple_thread')
    }, 2000);

    setTimeout(() => {
        $('.reel_01_anim .thread-02').addClass('show_thread_02')
    }, 3000);

    setTimeout(() => {
        $('.reel_02_anim .thread-03').addClass('show_thread_03')
    }, 3000);

    setTimeout(() => {
        $('.reel_03_anim .thread-01').addClass('show_thread_01')
    }, 3000);

    setTimeout(() => {
        $('.reel_01_anim .red_vector').addClass('show_red_vector')
    }, 4000);

    setTimeout(() => {
        $('.reel_02_anim .orange_vector').addClass('show_orange_vector')
    }, 4000);

    setTimeout(() => {
        $('.reel_03_anim .purple_vector').addClass('show_purple_vector')
    }, 4000);

    $('.count-up').countUp({
        'time': 2000,
    });
    
})