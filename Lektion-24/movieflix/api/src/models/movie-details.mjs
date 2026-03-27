import Movie from './movie.mjs';
import HttpClient from '../helpers/http-client.mjs';

export default class MovieDetails extends Movie {
  constructor() {
    super();
    this.backgroundImage = '';
    this.overview = '';
    this.runtime = 0;
    this.genres = [];
  }

  async findMovie(id) {
    const data = await new HttpClient('movie/' + id).fetchData();
    const movie = new MovieDetails();

    movie.id = data.id;
    movie.title = data.title;
    movie.backgroundImage = `${process.env.IMAGE_URL}/original${data.backdrop_path}`;
    movie.language = data.original_language;
    movie.overview = data.overview;
    movie.poster = `${process.env.IMAGE_URL}/w500${data.poster_path}`;
    movie.releaseDate = data.release_date;
    movie.rating = data.vote_average;
    movie.runtime = data.runtime;
    data.genres.map((genre) => {
      movie.genres.push({ name: genre.name });
    });

    return movie;
  }
}
