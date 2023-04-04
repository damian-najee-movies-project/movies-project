import { displayMovies, addMovie, deleteFavorite, search, debounce} from './movie-api.js';
const carousel = document.querySelector('.carousel');
const rightButton = document.querySelector('#left');
const leftButton = document.querySelector('#right');
const addMoviePopout = document.querySelector('#add-movie')
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
addMoviePopout.addEventListener('click', ()=>{
    document.querySelector('.overlay').classList.toggle('show');
});
document.querySelector('#search').addEventListener('input', debounce( async (e) => {
    let userInput = e.target.value
    console.log(userInput)
    await search(userInput)

}, 1000));

// document.querySelector('.cancel')
// .addEventListener('click', function(event) {
//     document.querySelector('.overlay').classList.toggle('show');
// });
// document.querySelector('#submitBtn').addEventListener('click',async(e) => {
//     const form = document.forms['myForm'];
//     //const title = form.elements['title'].value;
//     const title = document.querySelector('#title').value
//     const genre = document.querySelector('#genre').value
//     const rating = document.querySelector('#ratings').value
//     const id = document.querySelector('#id').value
//
//     let movie = {
//         title,genre,rating,id
//     }
//     await addMovie(movie)
//     await displayMovies()
// });
// const input = document.querySelector('input');
// input.addEventListener('input', debounce(function(){
// }, 500));


(async ()=>{
    await displayMovies()
    document.querySelector('.content').style = 'display: flex'
    document.querySelector('#loading-icon').style = 'display:none'

})()


