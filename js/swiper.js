/*
const reviews_slider = new Swiper('.reviews__slider', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 50,
    breakpoints: {
        0: {},
    },
    pagination: {
        el: '',
        type: '',
    },
    navigation: {
        nextEl: '',
        prevEl: '',
    },
    autoplay: {
    },
});
*/

// Пересчет rem в px для swiper
const rem = function (rem) {
    if ($(window).width() > 768) {
        return 0.005208335 * $(window).width() * rem;
    } else {
        // где 375 это ширина моб версии макета
        return (100/414) * (0.1 * $(window).width()) * rem;
    }
}

const main_intro_slider = new Swiper('.main-intro__slider', {
    direction: 'horizontal',
    loop: true,

    breakpoints: {
        769: {
            slidesPerView: 1.25,
        },
        0: {
            slidesPerView: 1,
        },
    },

    pagination: {
        el: '.main-intro__pagination-bullet',
        type: 'bullets',
    },

    autoplay: {
        delay: 7500,
    },

    on: {
        beforeInit: function () {
            let total = $('.main-intro__slide').length;
            if (total < 10) {
                total = '0' + total;
            }
            $('.main-intro__slide-nav .slider-nav__total').text(total);
        },

        slideChange: function (slider) {
            let current = slider.realIndex + 1;
            if (current < 10) {
                current = '0' + current;
            }
            $('.main-intro__slide-nav .slider-nav__current').text(current);
        },
    },
});