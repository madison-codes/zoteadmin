import React, { Component } from 'react';
import mock from '../../mock/users';

import { connect } from 'react-redux';

import { search } from '../../actions/search';
import User from './User';

class Users extends Component {
  constructor(){
    super();
    this.state = {

    };
  }

  render(){
    return (
      <div className='all-users'>
        <input
          type='text'
          placeholder='search'
          className='nav-search-input'
          onKeyUp={(e) => search(e.target.value)}>
        </input>
        {mock.users.map(user => <User
          id={user.id}
          name={user.username}
          email={user.email}
          stripe_id={user.stripe_id}
          sub_end={user.sub_end}
          />
        )}
      </div>
    );
  }
}

export default connect(
  state => ({ searchTerm: state.searchTerm }),
  { search }
)(Users)
