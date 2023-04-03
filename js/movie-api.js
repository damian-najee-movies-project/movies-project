import Movie from './Components/Movie.js'
import keys from "./keys.js";

export async function getMovies(movie){
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=${keys.movieKey}&language=en-US&page=1`
    let options = {
        headers:{
            'Content-Type': 'application/json'
        }
    }
    try{
        let response = await fetch( url, options)
        let data = await response.json()
        console.log(data)
        return data.results
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
export const addMovie = async (movie) => {
    try {
        let url = `https://api.themoviedb.org/3/movie/550?api${keys.movieKey}`;
        let options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie)
        }
        let response = await fetch(url, options);
        let data = await response.json();
        return data;
    } catch(error){
        console.log(error);
    }
}
export const deleteFavorite = async (id) => {
    try {
        let url = `http://localhost:3000/movies/${id}`;
        let options = {
            method: "DELETE"

        }
        let response = await fetch(url, options);
        let data = await response.json();
    } catch(error){
        console.log(error);
    }
}

export const editFavorite = async (id) => {
    try {
        let url = `http://localhost:3000/movies/${id}`;
        let options = {
            method: "PATCH"

        }
        let response = await fetch(url, options);
        let data = await response.json();
    } catch(error){
        console.log(error);
    }
}