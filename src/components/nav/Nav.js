import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const Nav = () => {
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

export default connect()(Nav)
