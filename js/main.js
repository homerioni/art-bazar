'use strict'

$(document).ready(function () {

    // Like in product
    $('.like').click(function () {
        $(this).toggleClass('active');
    });

    // Burger menu
    $('.header__burger').click(function () {
        $(this).toggleClass('active');
    });

});