import React from 'react';

import './styles/App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Skills from './components/Skills';
import Story from './components/Story';
import NoMatch from './components/NoMatch';

import Header from './components/Header';


const App = () => (
  <div>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/skills" component={Skills} />
        <Route path="/story" component={Story} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  </div>
);

export default App;
