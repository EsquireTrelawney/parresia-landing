 var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    loop: true,
},
    slidesPerView: 1,
    pagination: {
    el: ".swiper-pagination",
    clickable: true
},
     zoom: {
         maxRatio: 3,
         minRatio: 1
     },
     autoplay: {
         delay: 10000,
         pauseOnMouseEnter: true
     },
    mousewheel: true,
    keyboard: true,
});