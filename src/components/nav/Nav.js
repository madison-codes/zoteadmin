import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';

import Users from '../users/Users';
import Groups from '../groups/Groups';

const Nav = ({ }) => {
  return (
    <nav>
      <div className='nav-link-container'>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/groups">Groups</Link>
      </div>
    </nav>
  );
}


export default connect(

)(Nav)
