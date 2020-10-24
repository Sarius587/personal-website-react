import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Home from './components/Home';
import Skills from './components/Skills';
import Story from './components/Story';
import NoMatch from './components/NoMatch';

import Header from './components/Header';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
  }

  body {
    overflow-x: hidden;
  }
`;


const App = () => (
  <div>
    <GlobalStyle />
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
