import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './Components/Home/About/About';
import NoFound from './Components/Shared/NoFound/NoFound';

function App() {
  return (
    <Router>
       <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="*">
            <NoFound></NoFound>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
