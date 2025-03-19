const currentWidth = window.innerWidth <= 700 ? 1 : 4;
document.addEventListener('DOMContentLoaded', ()=> {
    const popularMoviesSwiper = new Swiper(".popular-movies", {
        slidesPerView: currentWidth,
        slidesPerGroup: currentWidth,
        loop: true,
        pagination: { el: ".popular-movies .swiper-pagination", clickable: true },
        navigation: { nextEl: ".popular-movies .swiper-button-next", prevEl: ".popular-movies .swiper-button-prev" },
    });
    const updateSlidesPerView = (slider) => {
        slider.slidesPerView = currentWidth;
        slider.slidesPerGroup= currentWidth;
        if(currentWidth === 1)
            slider.pagination.clickable = false;
        slider.update();
    };

window.addEventListener("orientationchange", () => updateSlidesPerView(popularMoviesSwiper));

window.addEventListener("resize", () => updateSlidesPerView(popularMoviesSwiper));
});

const searchResult = new Swiper('#search-result .swiper', {
    slidesPerView: currentWidth,
    slidesPerGroup: currentWidth,
    loop: true,
    pagination: { el: "#search-result .swiper-pagination" },
    navigation: { nextEl: "#search-result .swiper-button-next", prevEl: "#search-result .swiper-button-prev" },
});


