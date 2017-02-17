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
import UserPage from './containers/UserPage';
import RepoPage from './containers/RepoPage';

export default <Route path="/" component={App}>
  <Route path="/:login/:name"
         component={RepoPage} />
  <Route path="/:login"
         component={UserPage} />
</Route>
