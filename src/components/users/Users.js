import React from 'react';
import mock from '../../mock/users';
import User from './User';

// function findLowest(a, b) {
//   return a - b;
// }

const Users = ({ searchTerm }) => {
  return (
    <div className='all-users'>
      <input
        type='text'
        placeholder='search'
        className='nav-search-input'
        onKeyUp={(e) => searchTerm(e.target.value)}>
      </input>

      {mock.users.map(user => <User
        user={user}
        />
      )
      // mock.users.sort(user => findLowest(user))
      }
    </div>
  );
}

export default Users;
