import React from 'react';
import Score from '../component/ScoreList/ScoreList';
import Navigation from '../component/Navigation/Navigation';

class ScoreList extends React.Component {
  render() {
    return (
      <div>
        <Score/>
        <Navigation/>
      </div>
    )
  }
}

export default ScoreList;