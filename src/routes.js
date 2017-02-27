import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import UsersPage from './containers/UsersPage';
import SelectedUser from './containers/SelectedUser';
import GroupsPage from './containers/GroupsPage';

export default
  <Route path="/" component={App}>
      <Route path="/users" component={UsersPage} />
      <Route path='/:id' component={SelectedUser}/>
      <Route path="groups" component={GroupsPage} />
  </Route>
