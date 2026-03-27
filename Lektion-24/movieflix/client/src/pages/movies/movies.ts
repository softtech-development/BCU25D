import { MediaResponse } from '../../models/media-response';
import Media from '../../models/Media';
import CreateDOM from '../../helpers/CreateDOM';

// Hämta in presentations elementet för filmer...
const app = document.querySelector("#top-movies") as HTMLDivElement;

const initApp = async () => {
    const result = await new Media('movies').listMedia();
    displayMovies(result.data);
};

const displayMovies = (movies: Media[]) => {
    movies.map((movie: Media) => {
        const dom = new CreateDOM();
        const card = dom.create({ type: "div", classes: "card" });
        card.innerHTML = `
            <a href="./movie-details.html?id=${movie.id}"
              ><img src="${movie.poster}" alt="${movie.title}"
            /></a>
            <div class="card-body">
              <h5 class="card-title">${movie.title}</h5>
              <p class="card-text text-muted">
                <small>Premiär datum: ${movie.releaseDate}</small>
              </p>
            </div>
        `;

        app.appendChild(card);
    });
    // Hardcore javascript...😁🤯
    // movies.map((movie: Media) => {
    //     const dom = new CreateDOM();
    //     // Skapa card div
    //     app.appendChild(dom.create({ type: "div", classes: "card" }))
    //         // Skapa ankare för att navigera
    //         .appendChild(dom.create({ type: "a", attribute: {name: "href", value: `./movie-details.html?id=${movie.id}`}}))
    //         // Skapa bilden som ska synas
    //         .appendChild(dom.create({ type: "img", attribute: { name: "src", value: movie.poster } }))
    //         .parentElement!.parentElement!.appendChild(dom.create({ type: "div", classes: "card-body" }))
    //         .appendChild(dom.create({ type: "h5", content: movie.title, classes: "card-title" }))
    //         .parentElement!.appendChild(dom.create({ type: "p", classes: "card-text text-muted" }))
    //         .appendChild(dom.create({ type: "small", content: `Premiär datum: ${movie.releaseDate}` }));
    // });
};

document.addEventListener('DOMContentLoaded', initApp);;