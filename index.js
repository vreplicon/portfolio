$(function() {
    $('.hamburger').click(e => {
        $('ul').toggleClass('js-miniMenu');

        if ($('ul').hasClass('js-miniMenu')) {
            $('.hamburger').html('&#9747');
        } else {
            $('.hamburger').html('&#9776');
        } 
    });
});