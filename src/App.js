import React from 'react';
import { Route } from 'react-router-dom';
import './assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home'
import About from './pages/About'

const App = () => (
  <div className="center-text">
    <Route path="/" exact component={Home} />
    <Route path="/about" exact component={About} />
  </div>
)

export default App;
