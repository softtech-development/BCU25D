import HttpClient from '../helpers/http-client.mjs';

export default class Movie {
  constructor() {
    this.id = 0;
    this.title = '';
    this.language = '';
    this.poster = '';
    this.releaseDate = '';
    this.grade = '';
  }

  async listMovies() {
    const data = await new HttpClient('discover/movie').fetchData();
    const movies = [];

    data.results.map((item) => {
      const movie = new Movie();
      movie.id = item.id;
      movie.title = item.title;
      movie.language = item.original_language;
      movie.poster = `${process.env.IMAGE_URL}/w500${item.poster_path}`;
      movie.releaseDate = item.release_date;
      movie.grade = item.vote_average;

      movies.push(movie);
    });

    return { page: data.page, total: data.results.length, movies };
  }
}
