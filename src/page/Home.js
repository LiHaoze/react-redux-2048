import React from 'react';
import Game from '../component/Game/Game';
import Navigation from '../component/Navigation/Navigation';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Game />
        <Navigation/>
      </div>
    )
  }
}

export default Home;