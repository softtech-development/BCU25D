import CreateDOM from '../../helpers/CreateDOM';
import MediaDetails from '../../models/MediaDetails';

const app = document.querySelector("#details") as HTMLDivElement;

const initApp = async () => {
    const id = location.search.split("=")[1];
    const result = await new MediaDetails('movies').findMedia(id);
    console.log(result);
    displayMovieDetails(result.movie);
};

const displayMovieDetails = (movie: MediaDetails) => {
    const dom = new CreateDOM();
    const details = dom.create({ type: "div" });
    details.innerHTML = `
    <div class="details-top">
      <div>
        ${movie.poster
            ? `<img src="${movie.poster}" alt="${movie.title}"/>`
            : `<img src="../dist/assets/images/No-Image.jpg" alt="${movie.title}"`
        }
      </div>
      <div class="info">
        <h2>${movie.title}</h2>
        <p>
          <i class="fas fa-star rating"></i>
          ${movie.rating.toFixed(1)} / 10
        </p>
        <p class="text-muted">Premiär: ${movie.releaseDate}</p>
        <p>${movie.overview}</p>
        <ul>
          ${movie.genres.map((genre) => `<li>${genre.name}</li>`).join('')}
        </ul>
        <p class="text-muted">Längd ${Math.floor(movie.runtime / 60)} tim ${movie.runtime % 60
        } min</p>
      </div>
    </div>
    `;

    app.appendChild(details);

    // Create background...
    const backgroundDiv = dom.create({ type: "div" });
    backgroundDiv.style.backgroundImage = movie.backgroundImage
        ? `url(${movie.backgroundImage})`
        : '';
    backgroundDiv.style.backgroundSize = 'cover';
    backgroundDiv.style.backgroundPosition = 'center';
    backgroundDiv.style.backgroundRepeat = 'no-repeat';
    backgroundDiv.style.height = '100vh';
    backgroundDiv.style.width = '100vw';
    backgroundDiv.style.position = 'absolute';
    backgroundDiv.style.top = '0';
    backgroundDiv.style.left = '0';
    backgroundDiv.style.zIndex = '-1';
    backgroundDiv.style.opacity = '0.3';

    details.appendChild(backgroundDiv);
};

document.addEventListener("DOMContentLoaded", initApp);