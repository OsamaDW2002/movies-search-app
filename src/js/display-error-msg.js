const displayErrorMsg = () => {
    const popularMoviesSection = document.getElementById('popular-movies');
    const searchResltSection = document.getElementById('search-result');
    const errorMsg = document.getElementById('error-msg');
    if(!popularMoviesSection.classList.contains('hide-swiper')) {
        popularMoviesSection.classList.add('hide-swiper');
    }

    if(!searchResltSection.classList.contains('hide-swiper'))
        searchResltSection.classList.add('hide-swiper');

    if(errorMsg.classList.contains('hide-swiper'))
        errorMsg.classList.remove('hide-swiper');
}
document.getElementById('try-again').addEventListener('click', ()=> window.location.reload())
export {displayErrorMsg}

