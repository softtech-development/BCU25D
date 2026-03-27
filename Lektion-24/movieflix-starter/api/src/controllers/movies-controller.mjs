import Movie from '../models/movie.mjs';
import MovieDetails from '../models/movie-details.mjs';

export const listAllMovies = async (req, res) => {
  const result = await new Movie().listMovies();

  res.status(200).json({
    success: true,
    statusCode: 200,
    page: result.page,
    items: result.total,
    data: result.movies,
  });
};

export const findMovie = async (req, res) => {
  const movie = await new MovieDetails().findMovie(+req.params.id);
  res.status(200).json({ success: true, statusCode: 200, movie });
};
