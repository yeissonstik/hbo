import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Capacitaciones from './pages/PrincipalPages';
import Profile from './pages/Profile';
import UpcomingEvents from './pages/UpcomingEvents'

import "swiper/bundle";
import "./globales.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/Capacitaciones' component={Capacitaciones}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/events' component={UpcomingEvents}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
