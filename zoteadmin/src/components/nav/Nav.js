import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';

import Users from '../users/Users';
import Groups from '../groups/Groups';

import { search } from '../../actions/search';

function Nav ({ search }) {
  return (
    <nav>
      <div className='nav-link-container'>
        <img src="assets/images/zb-full-logo.png" alt="Zotebook" width="108" height="34"/>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/groups">Groups</Link>
      </div>
      <input
        type='text'
        placeholder='search'
        className='nav-search-input'
        onKeyUp={(e) => search(e.target.value)}>
      </input>
      <img className='search-icon' src='assets/images/search_icon.svg'/>
    </nav>
  );
}


export default connect(
  state => ({ searchTerm: state.searchTerm }),
  { search }
)(Nav)
