import './App.scss';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom';
import LandingPage from "./pages/landing/landing.page";
import { Header } from "./shared/components/header/header";

function App() {
  return (
    <Router>
      <Header></Header>
      <div className="App">
        <Switch>
          <Route path='/'><LandingPage /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
