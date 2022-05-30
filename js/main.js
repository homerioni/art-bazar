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

    // Catalog and Filter
    $('.filter__block-title').click(function () {
        $(this).toggleClass('closed')
            .parent().find('.filter__block-content').slideToggle();
    });
    $('.checkbox-label').click(function () {
        if ($(this).find('input').prop('checked')) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });
    $('.radio-label').click(function () {
        if ($(this).find('input').prop('checked')) {
            $('.radio-label').removeClass('active');
            $(this).addClass('active');
        }
    });

});