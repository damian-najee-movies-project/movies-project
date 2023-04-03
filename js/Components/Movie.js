class Movie {
    constructor(data, target){
        this.id = data.id
        this.rating = data.rating;
        this.genre = data.genre;
        this.title = data.title;
        this.element = this.render(target);
    }
    render(target){
        let moviesNode = document.createElement('div');
        moviesNode.classList.add('movie-card');
        let html = `
              <div class="catalog-img-wrapper">
              
                <img src="${this.title}" />
              </div>
              <div class="card-bottom">
                <h2>${this.rating}</h2>
                <p>${this.genre}</p>
                <p>${this.id}</p>
              </div>
        `;
        moviesNode.innerHTML = html;
        target.appendChild(moviesNode);
        return moviesNode;
    }
    movieClick(){

    }
}

export default Movie;