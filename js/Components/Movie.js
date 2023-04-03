import {deleteFavorite} from "../movie-api.js";

class Movie {
    constructor(data, target){
        this.id = data.id
        this.poster_path= data.poster_path
        this.year = data.year;
        this.genres = data.genres;
        this.title = data.title;
        this.element = this.render(target);
    }
    render(target){
        let moviesNode = document.createElement('div');
        moviesNode.classList.add('movie-card');
        let html = `
              <div class="catalog-img-wrapper">
              ${this.poster_path ? `<img src="https://image.tmdb.org/t/p/w500/${this.poster_path}" />` : this.title}
              </div>
              <div class="card-bottom">
                <h2>${this.year}</h2>
                <p>${this.genres}</p>
                <button class="movie-edit">Edit</button>
                <button class="movie-delete">Delete</button>
              </div>
        `;
        moviesNode.innerHTML = html;
        let deleteButton = moviesNode.querySelector('.movie-delete');
        deleteButton.addEventListener('click', async function(){
             await deleteFavorite(this.id);
            moviesNode.remove();
        }.bind(this));
        target.appendChild(moviesNode);
        return moviesNode;

    }



    movieClick(){

    }
}

export default Movie;