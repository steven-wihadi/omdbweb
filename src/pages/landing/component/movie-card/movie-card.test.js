import { render } from "@testing-library/react";
import MovieCard from './movie-card';

it('Card movie should create', () => {
  const mockMovie = {
    "Title": "Batman Forever",
    "Year": "1995",
    "imdbID": "tt0112462",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  }
  const { queryByTestId } = render(<MovieCard movie={mockMovie}/>);
  const movieCard = queryByTestId('movie-card');
  expect(movieCard).toBeTruthy();

  const moviePoster = queryByTestId('movie-card-poster');
  expect(moviePoster.src).toBe(mockMovie.Poster);

  const movieTitle = queryByTestId('movie-card-title');
  expect(movieTitle.innerHTML).toBe(mockMovie.Title);

  const movieYear = queryByTestId('movie-card-year');
  expect(movieYear.innerHTML).toBe(mockMovie.Year);
});
