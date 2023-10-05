// var parallaxElement = document.getElementsByClassName('thumbnail');
var parallaxElement = document.querySelector('.main_wrapper .main_bg');

// // Scroll o'zgarishlarini kuzatish
window.addEventListener('scroll', function() {
    // Olingan scroll o'rtasida paytni aniqlash
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Paytning kattalash koefitsiyentini o'zgartirib ketish
    var scale = 1 + (scrollTop / 300); // O'zgartirilishi kerak bo'lgan koefitsiyentni o'zingiz belgilang

    console.log(scrollTop / 1000);

    // Elementni kattalashtirish
    parallaxElement.style.transform = 'scale(' + scale + ')';
    parallaxElement.style.opacity = 1 - (scrollTop / 400);
});