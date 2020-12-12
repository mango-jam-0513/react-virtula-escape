import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';

function App() {
  return (
    <Router>
      <Home />
      <Switch>
        <Route></Route>
      </Switch>
    </Router>
  );
}

export default App;
