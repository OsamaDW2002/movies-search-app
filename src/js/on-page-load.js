import { getMovies } from "./get-movies.js";
import {displayErrorMsg} from "./display-error-msg.js";

export const addCardsToSwiper = (data, id)=> {
    const swiperName = document.getElementById(id);
    const slides = swiperName.querySelector(`#${id} .swiper-wrapper`)
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    target.style.backgroundImage = `url(${target.dataset.bgImage})`;
                    target.classList.add('img-fit');
                    observer.unobserve(target);
                }
            });
        },
        { rootMargin: "100px" }
    );
    for (const el of data) {
        const swiperSlide = document.createElement("div");
        swiperSlide.classList.add('swiper-slide');
        const card = document.createElement("div");
        card.classList.add("card-container");
        card.id = el.id;
        if (el?.primaryImage) {
            card.dataset.bgImage = el.primaryImage;
            card.addEventListener('click', (event) => {
                getMovies(`imdb/${event.currentTarget.id}`).then(response => {
                    document.getElementById('model-img').style.backgroundImage = `url(${response?.primaryImage})`;
                    document.getElementById('model-img').classList.add('img-fit');
                    document.getElementById('model-name').textContent = response?.primaryTitle;
                    document.getElementById('model-release-date').textContent = response?.startYear;
                    document.getElementById('model-description').textContent = response?.description;
                    document.getElementById('description').showModal();
                });
            })
            observer.observe(card);
        }

        const title = document.createElement("div");
        title.textContent = el?.originalTitle || "No Title";
        card.appendChild(title);
        swiperSlide.appendChild(card);
        slides.appendChild(swiperSlide);

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

               }).catch((error)=>{
                   displayErrorMsg();
               });
               document.getElementById('error-msg').classList.add('hide-swiper');
           }

})