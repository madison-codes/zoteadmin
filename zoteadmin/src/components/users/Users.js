import React, { Component } from 'react';
import mock from '../../mock/users';

class Users extends Component {
  render() {
    return (
      <div className='single-user'>
      <h1>Users</h1>

        {mock.users.map(user =>
          <div className='user'>
            <div className='user-info'>
              <p>{user.username}</p>
              <p>{user.email}</p>
            </div>
            <p>{user.stripe_id}</p>
            <p>{user.sub_end}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Users;
