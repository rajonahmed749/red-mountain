import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import About from './Components/Home/About/About';
import Checkout from './Components/Home/Checkout/Checkout';
import Orders from './Components/Home/Orders/Orders';
import NoFound from './Components/Shared/NoFound/NoFound';
import Login from './Components/Shared/Login/Login';
import Admin from './Components/Admin/Admin';
import PrivateRoute from './Components/Home/PrivateRoute/PrivateRoute';
import { createContext, useState } from 'react';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <PrivateRoute path="/checkout/:id">
            <Checkout />
          </PrivateRoute>
          
          <PrivateRoute path="/orders">
            <Orders />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <Route path="*">
            <NoFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;