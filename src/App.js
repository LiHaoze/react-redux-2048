import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './page/Home';
import RankList from './page/RankList';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/ranklist' component={RankList}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
