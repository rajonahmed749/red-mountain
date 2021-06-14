import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import About from './Components/Home/About/About';
import NoFound from './Components/Shared/NoFound/NoFound';
import Login from './Components/Shared/Login/Login';

function App() {
  return (
    <Router>
       <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="*">
            <NoFound/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
