import { getMovies } from "./get-movies.js";
import { addCardsToSwiper } from "./on-page-load.js";


document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.getElementById("search-bar");
    const searchButton = document.getElementById("search");
    const popularMovies = document.getElementById("popular-movies");
    const newReleased = document.getElementById("new-released");
    const searchResultSection = document.getElementById("search-result");

    if (!searchInput || !searchButton || !popularMovies || !newReleased || !searchResultSection) {
        console.error("Some required elements are missing from the DOM!");
        return;
    }

    const search = (input) => {
        getMovies("imdb/search", { type: "movie", primaryTitleAutocomplete: input }).then((response) => {
            searchResultSection.classList.remove("hide-swiper");
            addCardsToSwiper(response.results, "search-result");
        });
    };

    const searchBarAction = () => {
        const inputValue = searchInput.value.trim();
        if (!inputValue) return;

        popularMovies.classList.add("hide-swiper");
        newReleased.classList.add("hide-swiper");


        search(inputValue);
    };

    searchButton.addEventListener("click", searchBarAction);

    searchInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            searchBarAction();
        }
    });
});
