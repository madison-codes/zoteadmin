import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import createLogger from 'redux-logger';

import reducers from './reducers/index';
import App from './components/app/App';
import Users from './components/users/Users';
import User from './components/users/User';
import SelectedUser from './components/users/SelectedUser';

import Groups from './components/groups/Groups';

const middleWare = [];


const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

const logger = createLogger();
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="users" component={Users}/>
        <Route path="groups" component={Groups}/>
        {/* <Route path="/:user_id" component={SelectedUser}/> */}
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
