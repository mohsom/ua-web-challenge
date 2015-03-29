$(document).ready(function () {
    "use strict";
    $('.show-menu').click(function () {
        $('.navbar').toggleClass('active');
    });
    $(document).click(function(e){
        var $el = $(e.target);
        if(!$('.navbar').has($el).length){
            $('.navbar').removeClass('active');
        }
    });
});

