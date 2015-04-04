$(document).ready(function () {
    "use strict";
    $('.show-menu').click(function () {
        $('.navbar-item-link').toggleClass('active');
    });
    $(document).click(function(e){
        var $el = $(e.target);
        if(!$('.navbar').has($el).length){
            $('.navbar-item-link').removeClass('active');
        }
    });
});

