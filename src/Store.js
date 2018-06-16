import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const preloadedState = {};

try {
  let scorelist = localStorage.getItem('scorelist');
  if(scorelist) {
    scorelist = JSON.parse(scorelist);
    preloadedState.scores = { scorelist };
  }
} catch(e){}

const store = createStore(reducer, preloadedState, composeEnhancers(
  applyMiddleware(thunk)
));

export default store;