// import * as ActionTypes from '../actions';
import filter from './filter';
import search from './search';
import selectUser from './selectUser';

import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  // entities,
  filter,
  search,
  selectUser,
  routing
});

export default rootReducer;
