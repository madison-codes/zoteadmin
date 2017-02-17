// import React from 'react';
// import { Route } from 'react-router';
//
// import App from './components/app/App';
// import Users from './components/users/Users';
// import Groups from './components/groups/Groups';
//
// export default
//   <Route path="/" component={App}>
//     <Route path="users" component={Users}/>
//     <Route path="groups" component={Groups}/>
//   </Route>


import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import UsersPage from './containers/UsersPage';
import GroupsPage from './containers/GroupsPage';

export default
  <Route path="/" component={App}>
    <Route path="users"
    component={UsersPage} />
    <Route path="groups"
           component={GroupsPage} />
  </Route>
