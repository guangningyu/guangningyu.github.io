$(document).ready(function() {
    $('.btn-mobile-menu__icon').click(function() {
        if ($('.navigation-wrapper').css('display') == "block") {
            // $('.navigation-wrapper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
              $('.navigation-wrapper').toggleClass('visible animated bounceOutUp');
            // });
            // $('.navigation-wrapper').toggleClass('animated bounceInDown animated bounceOutUp');
        } else {
            $('.navigation-wrapper').toggleClass('visible animated bounceInDown');
        }
        $('.btn-mobile-menu__icon').toggleClass('fa fa-list fa fa-angle-up animated fadeIn');
    });
});

