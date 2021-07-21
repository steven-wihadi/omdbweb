import { render } from "@testing-library/react";
import MovieDetailPage from "./movie-detail.page";
import { 
  BrowserRouter as Router,
  Route 
} from 'react-router-dom';

it('Movie detail page should create', () => {

  const { queryByTestId } = render(
    <Router>
      <Route exact path='/movie-detail/tt0372784'><MovieDetailPage /></Route>   
    </Router>
  );
  const container = queryByTestId("movie-detail-container");
});
