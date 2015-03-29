$(document).ready(function () {
    "use strict";
    $('.show-menu').click(function () {
        $('.navbar').toggleClass('active');
        $('.show-menu-icon>i').toggleClass('class','fa fa-times');
    });
});

