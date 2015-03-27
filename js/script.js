$(document).ready(function () {
    var click = 0;
    $('.show-menu').click(function () {
        if (click === 1) {
            $('.navbar-item-link').removeClass('active-menu');
            $('.show-menu').removeClass('active-arrow');
            click = 0;
        }
        else {
            $('.navbar-item-link').addClass('active-menu');
            $('.show-menu').addClass('active-arrow');
            click = 1;
        }
    });
});
