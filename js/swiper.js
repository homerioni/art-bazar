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

const catalog_intro_slider = new Swiper('.catalog-intro__slider', {
    direction: 'horizontal',
    loop: true,

    breakpoints: {
        769: {
            slidesPerView: 1.7,
        },
        0: {
            slidesPerView: 1,
        },
    },

    pagination: {
        el: '.catalog-intro__pagination-bullet',
        type: 'bullets',
    },

    navigation: {
        nextEl: '.catalog-intro .next',
        prevEl: '.catalog-intro .prev',
    },

    autoplay: {
        delay: 7500,
    },

    on: {
        beforeInit: function () {
            let total = $('.catalog-intro__slide').length;
            if (total < 10) {
                total = '0' + total;
            }
            $('.catalog-intro .slider-nav__total').text(total);
        },

        slideChange: function (slider) {
            let current = slider.realIndex + 1;
            if (current < 10) {
                current = '0' + current;
            }
            $('.catalog-intro .slider-nav__current').text(current);
        },
    },
});

const popular_slider = new Swiper('.popular__slider', {
    direction: 'horizontal',
    loop: true,

    breakpoints: {
        769: {
            slidesPerView: 3,
            spaceBetween: rem(5),
        },
        0: {
            slidesPerView: 1.3,
            spaceBetween: rem(2),
        },
    },

    pagination: {
        el: '.popular .slider-nav__pagination-block',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass, index, total) {
            return '<div class="' + currentClass + '">'+ index +'</div>' +
                '<div class="slider-nav__pagination-separator"></div>' +
                '<div class="' + totalClass + '">'+ total +'</div>';
        },
        formatFractionCurrent: function (number) {
            if (number < 10) {
                return '0' + number;
            } else {
                return number;
            }
        },
        formatFractionTotal: function (number) {
            if (number < 10) {
                return '0' + number;
            } else {
                return number;
            }
        },
    },

    navigation: {
        nextEl: '.popular .next',
        prevEl: '.popular .prev',
    },

    autoplay: {
        delay: 7500,
    },
});

const category_paint_slider = new Swiper('.category-paint__slider', {
    direction: 'horizontal',
    loop: true,

    breakpoints: {
        769: {
            slidesPerView: 2,
            spaceBetween: rem(5),
        },
        0: {
            slidesPerView: 1.3,
            spaceBetween: rem(2),
        },
    },

    pagination: {
        el: '.category-paint .slider-nav__pagination-block',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass, index, total) {
            return '<div class="' + currentClass + '">'+ index +'</div>' +
                '<div class="slider-nav__pagination-separator"></div>' +
                '<div class="' + totalClass + '">'+ total +'</div>';
        },
        formatFractionCurrent: function (number) {
            if (number < 10) {
                return '0' + number;
            } else {
                return number;
            }
        },
        formatFractionTotal: function (number) {
            if (number < 10) {
                return '0' + number;
            } else {
                return number;
            }
        },
    },

    navigation: {
        nextEl: '.category-paint .next',
        prevEl: '.category-paint .prev',
    },

    autoplay: {
        delay: 5000,
    },
});

const prod_intro_slider = new Swiper(".prod-intro__slider", {
    direction: "vertical",
    slidesPerView: 1,
    loop: true,
    spaceBetween: 20,

    pagination: {
        el: '.prod-intro__pagination-bullet',
        type: 'bullets',
    },

    navigation: {
        nextEl: '.prod-intro .next',
        prevEl: '.prod-intro .prev',
    },

    on: {
        beforeInit: function () {
            let total = $('.prod-intro__slide').length;
            if (total < 10) {
                total = '0' + total;
            }
            $('.prod-intro .slider-nav__total').text(total);
            $('.prod-intro .slider-nav__current').text('01');
            $('.prod-intro__slider-nav').height($('.prod-intro__container').height());
        },

        slideChange: function (slider) {
            let current = slider.realIndex + 1;
            if (current < 10) {
                current = '0' + current;
            }
            $('.prod-intro .slider-nav__current').text(current);
        },
    },
});

document.querySelectorAll('.music-catalog').forEach(n => {
    const music_catalog_slider = new Swiper(n.querySelector('.music-catalog__slider'), {
        direction: "horizontal",
        slidesPerView: 5,
        spaceBetween: rem(5),

        navigation: {
            nextEl: n.querySelector('.next'),
            prevEl: n.querySelector('.prev'),
        },

        pagination: {
            el: n.querySelector('.slider-nav__pagination-block'),
            type: 'fraction',
            renderFraction: function (currentClass, totalClass, index, total) {
                return '<div class="' + currentClass + '">'+ index +'</div>' +
                    '<div class="slider-nav__pagination-separator"></div>' +
                    '<div class="' + totalClass + '">'+ total +'</div>';
            },
            formatFractionCurrent: function (number) {
                if (number < 10) {
                    return '0' + number;
                } else {
                    return number;
                }
            },
            formatFractionTotal: function (number) {
                if (number < 10) {
                    return '0' + number;
                } else {
                    return number;
                }
            },
        },

        autoplay: {
            delay: 6000,
        },
    });

    music_catalog_slider.controller.control = music_catalog_slider;
});

const top_creators_slider = new Swiper('.top-creators__slider', {
    direction: 'horizontal',
    loop: true,

    breakpoints: {
        769: {
            slidesPerView: 4,
            spaceBetween: rem(5),
        },
        0: {
            slidesPerView: 1.3,
            spaceBetween: rem(2),
        },
    },

    pagination: {
        el: '.top-creators .slider-nav__pagination-block',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass, index, total) {
            return '<div class="' + currentClass + '">'+ index +'</div>' +
                '<div class="slider-nav__pagination-separator"></div>' +
                '<div class="' + totalClass + '">'+ total +'</div>';
        },
        formatFractionCurrent: function (number) {
            if (number < 10) {
                return '0' + number;
            } else {
                return number;
            }
        },
        formatFractionTotal: function (number) {
            if (number < 10) {
                return '0' + number;
            } else {
                return number;
            }
        },
    },

    navigation: {
        nextEl: '.top-creators .next',
        prevEl: '.top-creators .prev',
    },

    autoplay: {
        delay: 5000,
    },
});