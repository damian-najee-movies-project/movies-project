import { displayMovies } from './movie-api.js'

const carousel = document.querySelector('.carousel');
const rightButton = document.querySelector('#left');
const leftButton = document.querySelector('#right');
const addMovie = document.querySelector('#add-movie')
let selectedIndex = 0;
let cellCount = 9;

function rotateCarousel() {
    let angle = selectedIndex / cellCount * -360;
    carousel.style.transform = 'translateZ(-288px) rotateY(' + angle + 'deg)';
}
rightButton.addEventListener('click', () => {
    selectedIndex--;
    rotateCarousel();
});

leftButton.addEventListener('click', () => {
    selectedIndex++;
    rotateCarousel();

});
addMovie.addEventListener('click', ()=>{
    document.querySelector('.overlay').classList.toggle('show');
})
document.querySelector('.cancel').addEventListener('click', function(event) {
    document.querySelector('.overlay').classList.toggle('show');
});



(async ()=>{
    await displayMovies()
    document.querySelector('.content').style = 'display: flex'
    document.querySelector('#loading-icon').style = 'display:none'
})()


