import { getMovies } from "./get-movies.js";

export const addCardsToSwiper = (data, id)=> {
    const swiperName = document.getElementById(id);
    const slides = swiperName.querySelector(`#${id} .swiper-wrapper`)

    for (const el of data) {
        const swiperSlide = document.createElement("div");
        swiperSlide.classList.add('swiper-slide');
        const card = document.createElement("div");
        card.classList.add("card-container");

        if (el?.primaryImage) {
            card.dataset.bgImage = el.primaryImage;
            const observer = new IntersectionObserver(
                (entries, observer) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            const target = entry.target;
                            target.style.backgroundImage = `url(${target.dataset.bgImage})`;
                            target.style.backgroundSize = "cover";
                            target.style.backgroundPosition = "center";
                            target.style.backgroundRepeat = "no-repeat";

                            observer.unobserve(target);
                        }
                    });
                },
                { rootMargin: "100px" }
            );

            observer.observe(card);
        }

        const title = document.createElement("div");
        title.textContent = el?.originalTitle || "No Title";
        card.appendChild(title);
        swiperSlide.appendChild(card);
        slides.appendChild(swiperSlide);

        console.log("Slide added:", el?.originalTitle);
    }


}
document.addEventListener('DOMContentLoaded', ()=> {
           const popularMovies = localStorage.getItem('popular-movies');
           if(popularMovies){
               addCardsToSwiper(JSON.parse(popularMovies), 'popular-movies');
           } else{
               getMovies('imdb/most-popular-movies').then(response => {
                   addCardsToSwiper(response, 'popular-movies');
                   localStorage.setItem('popular-movies', JSON.stringify(response));
               });
           }

})