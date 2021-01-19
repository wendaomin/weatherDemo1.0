import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home'
import Weather from './component/weather/Weather'
import './assets/css/global.css'
export default function BasicExample() {
  return (
    <Router>
      <div className = 'container'>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/weather">
            <Weather />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}