$(function() {
    'use strict';


     //trigger nice scroll
   /* $('html').niceScroll(); 

    ("html").niceScroll({
        cursorcolor:"aquamarine",
        cursorwidth:"24px",
        background:"rgba(20,20,20,0.3)",
        cursorborder:"1px solid aquamarine",
        cursorborderradius:0
});*/


   
   
   //to become header with the same height of window(screen)
   // Change Header Height
   //$('.header').height($(window).height());
   

/* start Of Menu ********************************************/
   $('.header .navbar .links').click(function(){
    $('.header .navbar .links').fadeOut();
    $('.header .slide').fadeIn();
   });

   $('.header .slide .close').click(function(){
    $('.header .slide').fadeOut();
    $('.header .navbar .links').fadeIn();
   });
   
// up botton to scroll to top ********************************
   $(".up").click(function(){

    $("html,body").animate({
        scrollTop: $(".header").offset().top
    },1500);

    }); 

   //scroll to features section
    $(".header .arrow i").click(function(){

        $("html,body").animate({
            scrollTop: $(".features").offset().top
        },1500);

    });

    $(".header .Afeatues").click(function(){

        $("html,body").animate({
            scrollTop: $(".features").offset().top
        },1500);

    });
     
    //scroll to features section
    $(".header .buttons .btn-our-works").click(function(){
        $("html,body").animate({
            scrollTop: $(".our-work").offset().top
        },1500);
    });

    $(".header .Aour-work").click(function(){
        $("html,body").animate({
            scrollTop: $(".our-work").offset().top
        },1500);
    });

    //scroll to subscribe section
    $(".header  .Asubscribe").click(function(){
        $("html,body").animate({
            scrollTop: $(".subscribe").offset().top
        },1500);
    });

    //scroll to Our Team section
        $(".header .Aour-team").click(function(){
            $("html,body").animate({
                scrollTop: $(".our-team").offset().top
            },1800);
        });
    //scroll to testim section
    $(".header .Atestim").click(function(){
        $("html,body").animate({
            scrollTop: $(".testim").offset().top
        },1800);
    });

    //scroll to contact section
        $(".header .Acontact").click(function(){
            $("html,body").animate({
                scrollTop: $(".contact").offset().top
            },2000);
        });

     //show more item
     $('.show-more').click(function(){
        $('.our-work .items-box .hidden').fadeIn(2000);
        
        $(this).hide();
        $('.our-work .show-less').show();
        
        $("html,body").animate({
            scrollTop: $(".our-work .item-box .first").offset().top
        },1500);
     });
     
    $('.show-less').click(function(){
        $('.our-work .items-box .hidden').fadeOut(1000);
        
        $(this).hide();
        $('.our-work .show-more').show();
        
     });
     

     //check testimonials
     var leftarrow = $('.testim .fa-chevron-left');
     var rightarrow = $('.testim .fa-chevron-right');  
     
     function checkClients(){
        if($('.client:first').hasClass('active')){
            leftarrow.fadeOut(0);
        }
        else{
            leftarrow.fadeIn();
        }
        
        if($('.client:last').hasClass('active')){
            rightarrow.fadeOut(0);
        }
        else{
            rightarrow.fadeIn();
        }
       //$('.client:first').hasClass('active') ? leftarrow.fadeOut() : leftarrow.fadeIn();          //short cute of if function
     }
    checkClients();
    
    $('.testim i').click(function(){
        if($(this).hasClass('fa-chevron-right') ){
            $('.testim .active').fadeOut(300,function(){
               $(this).removeClass('active').next('.client').addClass('active').fadeIn();
               checkClients();
            });
        }else{
                $('.testim .active').fadeOut(300,function(){
               $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
               checkClients();
            });
        }
       
        
    });
    
});

/*$(document).ready(function(){
    //$('html').niceScroll();
    
});*/