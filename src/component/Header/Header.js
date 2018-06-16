import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { cleanRecentAddedScore, startNewGame } from '../../actions';
import './Header.css';

const ScoreBox = ({ label, score }) => {
  return (
    <div className="score-box">
      <div className="score-label">{label}</div>
      <div className="score-content">{score}</div>
    </div>
  );
};

ScoreBox.propTypes = {
  label: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
};

const Header = (props) => {
  return (
    <div className="header-box">
      <h1 className="title">2048</h1>
      <ScoreBox score={props.score} label="当前分数" />
      <div style={{width: '100%'}}>
        <button className="new-game-btn" onClick={props.startNewGame}>新游戏</button>
      </div>
    </div>
  );
};

Header.propTypes = {
  recentAddedScores: PropTypes.array.isRequired,
  score: PropTypes.number.isRequired,
  onAnimationEnd: PropTypes.func.isRequired,
  startNewGame: PropTypes.func.isRequired
};


const mapStateToProps = ({scores}) => scores;

const mapDispatchToProps = (dispatch) => {
  return {
    onAnimationEnd: id => dispatch(cleanRecentAddedScore(id)),
    startNewGame: () => dispatch(startNewGame())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
