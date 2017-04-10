$(document).ready(function() {
    $('.btn-mobile-menu__icon').click(function() {
        if ($('.navigation-wrapper').css('display') == "block") {
            $('.navigation-wrapper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                console.log('> bounceOutUp');
                $('.navigation-wrapper').toggleClass('visible animated bounceOutUp');
            });
            console.log('> ToggleUpAndDown');
            $('.navigation-wrapper').toggleClass('animated bounceInDown animated bounceOutUp');
        } else {
            console.log('> bounceInDown');
            $('.navigation-wrapper').toggleClass('visible animated bounceInDown');
        }
        console.log('> ToggleIcon');
        $('.btn-mobile-menu__icon').toggleClass('fa fa-list fa fa-angle-up animated fadeIn');
    });
});

