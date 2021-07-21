import { mockMovieDetail } from "./movie-detail-content.mock";
import MovieDetailContent from './movie-detail-content';
import { render } from "@testing-library/react";

it('Movie Detail Component should create', () => {
  const { queryByTestId } = render(<MovieDetailContent movieDetail={ mockMovieDetail } />);
  const container = queryByTestId("movie-detail-component-container");
  expect(container).toBeTruthy();

  const poster = queryByTestId("movie-detail-component-poster");
  expect(poster.src).toBe(mockMovieDetail.Poster);

  const title = queryByTestId("movie-detail-component-title");
  expect(title.innerHTML).toBe(mockMovieDetail.Title);

  const desc = queryByTestId("movie-detail-component-desc");
  expect(desc.innerHTML).toBe(mockMovieDetail.Plot);

  const release = queryByTestId("movie-detail-component-release");
  expect(release.innerHTML).toBe(mockMovieDetail.Released);
});