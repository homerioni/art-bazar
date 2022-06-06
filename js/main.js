'use strict'

$(document).ready(function () {

    // Masked input
    $('.input-phone').mask('+7 999 999 - 99 - 99');

    // Like in product
    $('.like').click(function () {
        $(this).toggleClass('active');
    });

    // Burger menu
    $('.header__burger').click(function () {
        $(this).toggleClass('active');
    });

    // Player
    $('.audio-play').click(function () {
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

    // Form select
    $('.form__select-dropdown').each(function () {
        let i = 1,
            dropdown = $(this);
        $(this).parent().find('option').each(function () {
            dropdown.append($('<li>', {
                num: i,
                text: $(this).text()
            }));
            i++;
        });
        dropdown.find('li:first-child').addClass('active');
        dropdown.parent().find('.form__current-select').text(dropdown.parent().find('option:selected').text());
    });
    $('.form__select').click(function (e) {
        e.preventDefault();
        $(this).find('.form__select-dropdown').slideToggle(200);
    });
    $('.form__select-dropdown li').click(function () {
        let num = $(this).attr('num'),
            select = $(this).parent().parent();
        $(this).parent().find('li').removeClass('active');
        $(this).addClass('active');
        select.find('option:nth-child(' + num + ')').prop('selected', 'selected');
        select.find('.form__current-select').text(select.find('option:selected').text());
    });

    // Form materials
    $('.form__materials input').change(function () {
        if ($(this).prop('checked')) {
            $(this).parent().css('display', 'flex');
            $(this).parent().parent().parent().find('label[for="' + $(this).attr('id') + '"]').hide();
        } else {
            $(this).parent().css('display', 'none');
            $(this).parent().parent().parent().find('label[for="' + $(this).attr('id') + '"]').show();
        }
    });

    // Form music
    $('.form-music__delete').click(function () {
        $('.form-music__complete-block').hide();
        $('.form-music__add-block').css('display', 'flex');
    });

    // Modal music
    $('.music-add').click(function () {
        $('body').addClass('lock');
        $('main').css('filter', 'blur(20px)');
        $('header').css('filter', 'blur(20px)');
        $('.music-modal').css('display', 'flex').hide().fadeIn();
    });
    function musicModalClose () {
        $('body').removeClass('lock');
        $('main').css('filter', '');
        $('header').css('filter', '');
        $('.music-modal').fadeOut();
    }
    $('.music-modal__choose-btn').click(function () {
        $('.form-music__add-block').hide();
        $('.form-music__complete-block').css('display', 'flex');
        musicModalClose();
    });
    $('.music-modal__close').click(musicModalClose);
    $('.music-modal__bg').click(musicModalClose);

});