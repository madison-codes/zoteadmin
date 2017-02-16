import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import App from './components/app/App';
import Users from './components/users/Users';
// import SelectedUser from './components/users/SelectedUser';

import Groups from './components/groups/Groups';

export default
  <Route path="/" component={App}>
    <Route path="users" component={Users}/>
    <Route path="groups" component={Groups}/>
    {/* <Route path="/:user_id" component={SelectedUser}/> */}

  </Route>
