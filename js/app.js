AOS.init();

var parallaxElement = document.querySelector('.main_wrapper .main_bg');

window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var scale = 1 + (scrollTop / 300);
    parallaxElement.style.transform = 'scale(' + scale + ')';
    parallaxElement.style.opacity = 1 - (scrollTop / 400);
});

let loop_slider = new Swiper(".loop_1", {
    slidesPerView: 'auto',
    spaceBetween: 24,
    loop: true,
    autoplay: {
        delay: 0,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
    },
    speed: 10000,
    breakpoints: {
        650: {
            spaceBetween: 60,
        }
    }
});

let loop_slider2 = new Swiper(".loop_2", {
    slidesPerView: 'auto',
    spaceBetween: 60,
    loop: true,
    autoplay: {
        delay: 0,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
        reverseDirection: true, 
    },
    speed: 10000,
});

let comment_slider = new Swiper(".comment_slider", {
    slidesPerView: 'auto',
    spaceBetween: 15,
    breakpoints: {
        650: {
            spaceBetween: 32,
        }
    }
});

let com_slider = document.querySelector('.comment_slider_wrapper');
let com_container = document.querySelector('.comment .main_container');
let body = document.querySelector('body');

function getCommentStyleLeft () {
    if (com_slider) {
        let marginLeft = com_container.getBoundingClientRect().left + 25;
        let bodyWidth = body.offsetWidth;
        com_slider.style.marginLeft = marginLeft + 'px';
        com_slider.style.width = bodyWidth - marginLeft + 'px';
    }
}

getCommentStyleLeft();

window.addEventListener("resize", function () {
    getCommentStyleLeft()
})