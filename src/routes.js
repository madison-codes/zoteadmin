import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import UsersPage from './containers/UsersPage';
import GroupsPage from './containers/GroupsPage';

export default
  <Route path="/" component={UsersPage}>
      <Route path="/users"
      component={UsersPage} />
      <Route path="groups"
             component={GroupsPage} />
  </Route>
