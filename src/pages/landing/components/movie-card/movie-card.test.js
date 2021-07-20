import { render } from "@testing-library/react";
import MovieCard from './movie-card';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureMockStore([thunk]);

it('Card movie should create', () => {
  const mockMovie = {
    "Title": "Batman Forever",
    "Year": "1995",
    "imdbID": "tt0112462",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  }

  const store = mockStore({
    popUpPosterConf: {
      isShow: false,
      imgLink: ''
    }
  });

  const wrapper = mount(
    <Provider store={ store }>
      <MovieCard movie={mockMovie}/>
    </Provider>
  );

  const { queryByTestId } = render(wrapper);
  expect(wrapper).toBeTruthy();

  const moviePoster = queryByTestId('movie-card-poster');
  expect(moviePoster.src).toBe(mockMovie.Poster);

  const movieTitle = queryByTestId('movie-card-title');
  expect(movieTitle.innerHTML).toBe(mockMovie.Title);

  const movieYear = queryByTestId('movie-card-year');
  expect(movieYear.innerHTML).toBe(mockMovie.Year);
});
