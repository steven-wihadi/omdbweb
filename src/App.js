import './App.scss';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom';
import LandingPage from "./pages/landing/landing.page";
import { Header } from "./shared/components/header/header";
import MovieDetailPage from "./pages/movie-detail/movie-detail.page";

function App() {
  return (
    <Router>
      <Header></Header>
      <div className="App">
        <Switch>
          <Route exact path='/'><LandingPage /></Route>
          <Route exact path='/movie-detail/:id'><MovieDetailPage /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
