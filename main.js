let menuMobile = document.querySelector('.header__menu-mobile');

function openMenuMobile() {
    if (menuMobile.classList.contains('header__menu-mobile-opened')) {
        menuMobile.classList.remove('header__menu-mobile-opened');
    } else {
        menuMobile.classList.add('header__menu-mobile-opened');
    }
}

let media500 = window.matchMedia('(max-width: 500px)');


if (media500.matches) {
    document.querySelector(".front__left-block-main-img").setAttribute("src", "../oceanNFT/images/frontImg-mobile.png");
    document.querySelector(".subscribe__image-js").setAttribute("src", "../oceanNFT/images/subscripte-mobile.png");
    document.querySelector(".explore__collections-first-section").addEventListener('click', (e) => {
        if(e.target.contains('.small-block')){
            e.target.classList.add('active')
        }
    })
} else {
    document.querySelector(".front__left-block-main-img").setAttribute("src", "../oceanNFT/images/frontImg.png");
    document.querySelector(".subscribe__image-js").setAttribute("src", "../oceanNFT/images/subscripte.png");
}

const accClick = document.querySelector('.accordion__container');

accClick.addEventListener('click', (e) => {
    if (e.target.classList.contains('accordion')) {
        if (e.target.parentElement.querySelector('.panel').style.maxHeight == '0px') {
            e.target.parentElement.querySelector('.panel').style.maxHeight = '250px';
        } else {
            e.target.parentElement.querySelector('.panel').style.maxHeight = '0px';
        }

    }
})


var swiper = new Swiper(".SwiperFirst", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
    },
    breakpoints: {
        0: {
            slidesPerView: 1.13,
            spaceBetween: 22,
        },
        450: {
            slidesPerView: 1.4,
            spaceBetween: 25,
        },
        500: {
            slidesPerView: 1.5,
            spaceBetween: 25,
        },
        560: {
            slidesPerView: 1.7,
            spaceBetween: 33,
        },
        641: {
            slidesPerView: 1.5,
            spaceBetween: 33,
        },
        1051: {
            slidesPerView: 2.1,
            spaceBetween: 33,
        },
        1110: {
            slidesPerView: 2.3,
            spaceBetween: 33,
        },
        1210: {
            slidesPerView: 2.5,
            spaceBetween: 33,
        },
    },
});

var swiperSecond = new Swiper(".SwiperSecond", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-second",
    },
    breakpoints: {
        0: {
            slidesPerView: 1.13,
            spaceBetween: 22,
        },
        440: {
            slidesPerView: 1.3,
            spaceBetween: 25,
        },
        490: {
            slidesPerView: 1.4,
            spaceBetween: 25,
        },
        590: {
            slidesPerView: 1.7,
            spaceBetween: 25,
        },
        690: {
            slidesPerView: 2,
            spaceBetween: 25,
        },
        790: {
            slidesPerView: 2.3,
            spaceBetween: 25,
        },
        850: {
            slidesPerView: 2.5,
            spaceBetween: 25,
        },
        910: {
            slidesPerView: 2.7,
            spaceBetween: 25,
        },
        975: {
            slidesPerView: 2,
            spaceBetween: 33,
        },
        1051: {
            slidesPerView: 2.1,
            spaceBetween: 33,
        },
        1110: {
            slidesPerView: 2.3,
            spaceBetween: 33,
        },
        1210: {
            slidesPerView: 2.5,
            spaceBetween: 33,
        },
    }
});

var swiperThird = new Swiper(".SwiperThird", {
    loop: true,
    slidesPerView: "1",
    navigation: {
        nextEl: ".swiper-button-third",
    },
    breakpoints: {
        700: {
            slidesPerView: 2,
        },

        1060: {
            slidesPerView: 3,
        },
    },
});