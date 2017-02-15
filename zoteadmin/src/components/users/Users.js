import React, { Component } from 'react';
import mock from '../../mock/users';

import { connect } from 'react-redux';

import { search } from '../../actions/search';
import User from './User';

function Users({ search }) {
  return (
    <div className='all-users'>
      <input
        type='text'
        placeholder='search'
        className='nav-search-input'
        onKeyUp={(e) => search(e.target.value)}>
      </input>
      {mock.users.map(user => <User
        user={user}
        />
      )}
    </div>
  );
}


export default connect(
  state => ({ searchTerm: state.searchTerm }),
  { search }
)(Users)
