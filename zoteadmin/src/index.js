import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import reducers from './reducers/index';
import App from './components/app/App';
import Users from './components/users/Users';
import Groups from './components/groups/Groups';


const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
);

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="users" component={Users}/>
        <Route path="groups" component={Groups}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
