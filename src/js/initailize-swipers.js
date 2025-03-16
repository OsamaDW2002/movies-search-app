const currentWidth = window.innerWidth <= 700 ? 1 : 4;
const swiper = new Swiper(".swiper", {
    slidesPerView: currentWidth,
    slidesPerGroup: currentWidth,
    loop: true,
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
});
const updateSlidesPerView = () => {
    swiper.params.slidesPerView = currentWidth;
    swiper.params.slidesPerGroup= currentWidth;
    swiper.update();
};

window.addEventListener("orientationchange", updateSlidesPerView);
