import Movie from './Components/Movie.js'
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
export const addMovie = async (movie) => {
    try {
        let url = `http://localhost:3000/movies`;
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
export const deleteFavorite = async () => {
    try {
        let url = `http://localhost:3000/movies/`;
        let options = {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        }
        let response = await fetch(url, options);
        let data = await response.json();
        return data;
    } catch(error){
        console.log(error);
    }
}