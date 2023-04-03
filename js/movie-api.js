import Movie from '../../movies-project/js/Movie.js'
export async function getMovies(){
    let url = 'http://localhost:3000/movies'
    let options = {
        headers:{
            'Content-Type': 'application/json'
        }
    }
    try{
        let response = await fetch( url, options)
        let data = await response.json()
        return data
    }catch (e) {
        console.log(e)
    }
}
export async function displayMovies(){
    let movieArray = await getMovies();
    movieArray.forEach(function(movie){
        let movieList = document.querySelector('.content');
        new Movie(movie, movieList);
    });
    console.log(movieArray)
}