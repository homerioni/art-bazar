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

    // Player
    $('.prod-intro__audio-play').click(function () {
        if ($(this).hasClass('play')) {
            $(this).removeClass('play').parent().find('audio')[0].pause();
        } else {
            $(this).addClass('play').parent().find('audio')[0].play();
        }
    });

});