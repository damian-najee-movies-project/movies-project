import {deleteFavorite, editFavorite, edit} from "../movie-api.js";
class Movie {
    constructor(data, target){
        this.poster_path= data.poster_path
        this.title = data.title;
        this.vote_average = data.vote_average;
        this.id=data.id
        this.genres = data.genres
        this.element = this.render(target);
    }
    render(target){
        let moviesNode = document.createElement('div');
        moviesNode.classList.add('movie-card');
        let html = `
              <div class="catalog-img-wrapper">
              ${this.poster_path ? `<img src="https://image.tmdb.org/t/p/w500/${this.poster_path}" />` : `<img src='../../images/no-image.jpeg'/>`}
              </div>
              <div class="card-bottom">
                <h2>${this.title}</h2>
                ${this.vote_average ?  `<p>${this.vote_average}</p>`: `<p>${this.genres}</p>`}
                <button class="edit-movie">Edit</button>
                <button class="movie-delete">Delete</button>
              </div>
        `;
        moviesNode.innerHTML = html;
        let editButton = moviesNode.querySelector('.edit-movie')
        editButton.addEventListener('click', async function(){
            edit(this.id)
            await editFavorite(this.id)
        }.bind(this));

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