import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import './App.css'
import { Login } from "./Components/Authentication/Login/Login";
import { Home } from './Components/Home/Home/Home';

function App() {
  return (
    <Router >
   <Switch>
     <Route exact path="/">
     <Home/>
     </Route>
     <Route  path="/login">
     <Login/>
     </Route>
   </Switch>
    </Router>
  );
}

export default App;
