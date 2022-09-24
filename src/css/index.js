var swiper = new Swiper(".mySwiper1", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 20,
    grabCursor: true,

});
var swiper = new Swiper(".mySwiper2", {
    spaceBetween: 20,
    slidesPerView: "auto",
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});