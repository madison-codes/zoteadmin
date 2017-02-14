import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../../styles/index.scss';

import Nav from '../nav/Nav';

import Users from '../users/Users';
import Groups from '../groups/Groups';

import mock from '../../mock/users';
import { search } from '../../actions/search';


function App({ search, children }) {
  return (
    <main>
      <Nav search={ search }/>
      { children }
    </main>
  )
}

export default connect(
  state => ({ searchTerm: state.searchTerm }),
  { search }
)(App)


// export default App;
