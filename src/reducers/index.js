// import * as ActionTypes from '../actions';
import search from './search';
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  // entities,
  search,
  routing
});

export default rootReducer;
