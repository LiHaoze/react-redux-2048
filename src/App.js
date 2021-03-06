import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './page/Home';
import ScoreList from './page/ScoreList';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/scorelist' component={ScoreList}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
