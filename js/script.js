$(document).ready(function(){

    //sets the fixed navigation on homepage
   $(window).bind('scroll', function() {
   var navHeight = $(window).height() - 110;
         if ($(window).scrollTop() > navHeight) {
             $('.navigation.home').addClass('fixed');
             $('.navigation .work').addClass('selected');
         }
         else {
             $('.navigation.home').removeClass('fixed');
             $('.navigation .work').removeClass('selected');
         }
    });

   //scroll to work page
   $('.navigation').localScroll({
     target:'body',
     duration: 800,
     offset:-130,
     hash:true
   });

   // $('.work').click(function(){
   //    alert('work');
   //    $('.work').addClass('selected');
   // })

   //mobile menu
   $('.device-menu').mmenu();

   //contact page popup
   $('.contact-popup').magnificPopup({
        type:'iframe',
        removalDelay:300,
        mainClass:'mfp-fade',
        closeOnContentClick:true
    });

   //target android only
    var _device = {};
    if (navigator.userAgent.match(/iPad/i)) {
        _device.name = 'ipad';
        _device.type = 'mobile';
    } else if (navigator.userAgent.match(/android/i)) {
        _device.name = 'android';
        _device.type = 'mobile';
    } else {
        _device.type = 'desktop';
    }
    $('body').addClass(_device.name).addClass(_device.type);

});


