import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';

import Users from '../users/Users';
import Groups from '../groups/Groups';

import { search } from '../../actions/search';

function Nav({ search, children }) {
  return (
    <nav>
      <img src="assets/images/zb-full-logo.png" alt="Zotebook" width="108" height="34"/>
      <input type='text'
        placeholder='search'
        onKeyUp={(e) => search(e.target.value)}>
      </input>
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
      <Link to="/groups">Groups</Link>
      <button onClick={() => this.authCurrentUser()}></button>
      {/* <div>
        <button onClick={() => browserHistory.push('/foo')}>Go to /foo</button>
      </div> */}
    </nav>
  );
}


export default connect(
  state => ({ searchTerm: state.searchTerm }),
  { search }
)(Nav)
