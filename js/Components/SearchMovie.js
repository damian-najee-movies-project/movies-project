import {addMovie} from "../movie-api.js";

class searchMovie {
    constructor(data, target) {
        this.poster_path = data.poster_path
        this.title = data.title;
        this.vote_average = data.vote_average;
        this.element = this.render(target);
    }

    render(target) {
        let moviesNode = document.createElement('div');
        moviesNode.classList.add('movie-card');
        let html = `
              <div class="catalog-img-wrapper">
              ${this.poster_path ? `<img src="https://image.tmdb.org/t/p/w500/${this.poster_path}" />` : this.title}
              </div>
              <div class="card-bottom">
                <h2>${this.title}</h2>
                <p>${this.vote_average}</p>
                <button class="movie-add">Favorites</button>
              </div>
        `;
        moviesNode.innerHTML = html;
        let pushMovie = moviesNode.querySelector('.movie-add');
        addMovie.addEventListener('click', async function () {
            await addMovie({
                img: this.poster_path,
                title:this.title,
            });
        }.bind(this));
        target.appendChild(moviesNode);
        return moviesNode;

    }
}
export default searchMovie
