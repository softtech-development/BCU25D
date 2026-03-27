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
        const image = dom.create('img') as HTMLImageElement;
        const imageAnchor = (dom.create("a") as HTMLAnchorElement);
        const card = app.appendChild(dom.create("div", undefined, "card"));
        const cardBody = card.appendChild(dom.create("div", undefined, "card-body"));
        const heading = dom.create("h5", movie.title, "card-title");
        const p = dom.create("p", undefined, "card-text text-muted");
        const small = dom.create("small", `Premiär datum: ${movie.releaseDate}`);

        image.src = movie.poster;
        imageAnchor.href = './movie-details.html?id=' + movie.id;

        // Knyt ihop de olika elmenten till dess respektive förälder element...
        card.appendChild(imageAnchor);
        imageAnchor.appendChild(image);
        cardBody.appendChild(heading);
        cardBody.appendChild(p);
        p.appendChild(small);
    });
};

document.addEventListener('DOMContentLoaded', initApp); 