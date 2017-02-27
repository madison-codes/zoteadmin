import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import UsersPage from './containers/UsersPage';
import GroupsPage from './containers/GroupsPage';
import SelectedUser from './containers/SelectedUser';

export default
  <Route path="/" component={App}>
      <Route path="/users" component={UsersPage} />
      <Route path="/groups" component={GroupsPage} />
      <Route path='/:id' component={SelectedUser} />
  </Route>
