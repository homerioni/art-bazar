'use strict'

$(document).ready(function () {

    // Masked input
    $('.input-phone').mask('+7 999 999 - 99 - 99');
    $('.input-card').mask('9999 - 9999 - 9999 - 9999', {placeholder:'0'});
    $('.input-date-card').mask('99/99');
    $('.input-date-month').mask('99', {
        placeholder:'0', completed: function () {
        $('.payment-info__card-date .month').text($(this).val()); $('.input-date-year').focus()}
    });
    $('.input-date-year').mask('99', {placeholder:'0'});
    if ($('.input-cvv')[0]) {
        $('.input-cvv')[0].oninput = function () {
            if (this.value.length > 4) {
                this.value = this.value.slice(0,4);
            }
        };
    }

    // Like in product
    $('.like').click(function () {
        $(this).toggleClass('active');
    });

    // Burger menu
    $('.header__burger').click(function () {
        $(this).toggleClass('active');
    });

    // Player
    let play = false;
    $('.audio-play').click(function () {
        if ($(this).hasClass('play')) {
            $(this).removeClass('play').parent().find('audio')[0].pause();
            play = false;
        } else {
            $('.audio-play').removeClass('play');
            $('audio').each(function () {
                $(this)[0].pause();
            });
            $(this).addClass('play').parent().find('audio')[0].play();
            play = true;
            timelinePlay($(this).parent().find('audio')[0], $(this).parent().find('.timeline'));
        }
    });

    function timelinePlay (audio, timeline) {
        setTimeout(function () {
            if (audio.currentTime === audio.duration) {
                timeline.css('width', '0');
                $('.audio-play').removeClass('play');
                play = false;
                return;
            }
            let width = audio.currentTime / audio.duration * 100;
            timeline.css('width', width + '%');
            if (play === true) {
                timelinePlay(audio, timeline);
            }
        }, 700);
    }

    $('.form-music__audio-line').click(function (e) {
        let offset = $(this).offset();
        let left = e.clientX - offset.left;
        let width = $(this).width();
        let audio = $(this).parents('.form-music__audio-block').find('audio');
        let timeline = $(this).find('.timeline');
        audio.prop('currentTime', audio[0].duration * left / width);
        timeline.css('width', audio[0].currentTime / audio[0].duration * 100 + '%');
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

    // Input Dimensions
    $('.hcm').change(function () {
        if ($(this).val()) {
            let inch = String($(this).val() * 0.393701);
            $(this).parent().addClass('cm');
            inch = inch.split('.')[0] + '.' + inch.split('.')[1].slice(0, 2);
            $(this).parent().parent().find('.hin').val(inch).parent().addClass('inch');
        } else {
            $(this).parent().removeClass('cm');
            $(this).parent().parent().find('.hin').val('').parent().removeClass('inch');
        }
    });
    $('.wcm').change(function () {
        if ($(this).val()) {
            $(this).parent().addClass('cm');
            let inch = String($(this).val() * 0.393701);
            inch = inch.split('.')[0] + '.' + inch.split('.')[1].slice(0, 2);
            $(this).parent().parent().find('.win').val(inch).parent().addClass('inch');
        } else {
            $(this).parent().removeClass('cm');
            $(this).parent().parent().find('.win').val('').parent().removeClass('inch');
        }
    });
    $('.hin').change(function () {
        if ($(this).val()) {
            let cm = String($(this).val() * 2.54);
            $(this).parent().addClass('inch');
            cm = cm.split('.')[0] + '.' + cm.split('.')[1].slice(0, 1);
            $(this).parent().parent().find('.hcm').val(cm).parent().addClass('cm');
        } else {
            $(this).parent().removeClass('inch');
            $(this).parent().parent().find('.hcm').val('').parent().removeClass('cm');
        }
    });
    $('.win').change(function () {
        if ($(this).val()) {
            let cm = String($(this).val() * 2.54);
            $(this).parent().addClass('inch');
            cm = cm.split('.')[0] + '.' + cm.split('.')[1].slice(0, 1);
            $(this).parent().parent().find('.wcm').val(cm).parent().addClass('cm');
        } else {
            $(this).parent().removeClass('inch');
            $(this).parent().parent().find('.wcm').val('').parent().removeClass('cm');
        }
    });

    // Form music
    $('.form-music__delete').click(function () {
        $('.form-music__complete-block').hide();
        $('.form-music__add-block').css('display', 'flex');
        $('.audio-play').removeClass('play');
        $('audio').each(function () {
            $(this)[0].pause();
        });
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
    $('.music-modal__filter-btn').click(function () {
        $('.music-modal__filter-btn').removeClass('active');
        $(this).addClass('active');
    });

    // Checkout functions
    $('.form-info__info-edit-btn--edit').click(function () {
        $(this).parents('.form-info').find('.info').hide();
        $(this).parents('.form-info').find('.edit').show();
    });
    $('.form-info__ready').click(function () {
        $(this).parents('.form-info').find('.info').show();
        $(this).parents('.form-info').find('.edit').hide();
    });
    $('.form-info__radio-label input').change(function () {
        $(this).parents('.form-info').find('.form-info__item').removeClass('active');
        $(this).parents('.form-info__item').addClass('active');
        $('.payment-info').removeClass('active');
        $(this).parents('.payment-info').addClass('active');
    });
    $('.form-info__tab').click(function () {
        $('.form-info__tab').removeClass('active');
        $(this).addClass('active');
    });

    // Personal functions
    $('.input-edit').click(function () {
        $(this).parents('.form__content').find('.input-edit').hide();
        $(this).parents('.form__content').find('.form__item input').removeAttr('disabled');
        $(this).parents('.form__content').find('.input-save').css('display', 'flex');
    });
    $('.input-save').click(function () {
        $(this).parents('.form__content').find('.input-edit').show();
        $(this).parents('.form__content').find('.form__item input').attr('disabled', true);
        $(this).hide();
    });

    // Favorites
    $('.personal__tab').click(function () {
        $('.personal__tab').removeClass('active');
        $(this).addClass('active');
    });
    $('.personal__tab-content input').change(function () {
        $('.personal__tab-content').removeClass('active');
        $(this).parent().addClass('active');
    });

    // Payment-info
    $('.payment-info__input-number-card').keyup(function () {
        $('.payment-info__card-number').text($(this).val().slice(0, 4) + ' **** **** ****');
    });
    $('.input-date-month').keyup(function () {
        $('.payment-info__card-date .month').text($(this).val());
    });
    $('.input-date-year').keyup(function () {
        $('.payment-info__card-date .year').text($(this).val());
    });
    $('.payment-info__input-name-card').keyup(function () {
        if ($(this).val() === '') {
            $('.payment-info__card-name').text('name on card');
        } else {
            $('.payment-info__card-name').text($(this).val());
        }
    });
    $('.payment-info__edit-btn').click(function () {
        $('.payment-info').hide();
        $(this).parents('.payment-info').show()
            .find('.info').hide()
            .parent().find('.edit').show();
        $('.payment-info__add-btn').hide();
    });
    $('.payment-info__save-btn').click(function () {
        $(this).parents('.payment-info').find('.info').show()
            .parent().find('.edit').hide();
        $('.payment-info').show();
        $('.payment-info__add-btn').show();
    });

});