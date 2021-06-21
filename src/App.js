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
import Admin from './Components/Admin/Admin';
import { createContext, useState } from 'react';
export const UserContext = createContext() 
function App() {

  const [loggedInUser, setLoggedInUser] = useState ({})
  return (
    <UserContext.Provider value ={[loggedInUser, setLoggedInUser]}>
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
            <Route path="/admin">
              <Admin/>
            </Route>
            <Route path="*">
              <NoFound/>
            </Route>
          </Switch>
      </Router>
   </UserContext.Provider>
  );
}

export default App;
