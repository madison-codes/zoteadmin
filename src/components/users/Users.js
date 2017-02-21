import React from 'react';
import mock from '../../mock/users';
import User from './User';


const Users = ({ searchTerm }) => {

  // this needs to sort by sub_end not id
  mock.users.sort((a, b) => {
    return a.id - b.id;
  });

  return (
    <div className='all-users'>
      <h1>USERS</h1>
      {
        mock.users.map(user => <User
        user={user}
        />
      )
      }
    </div>
  );
}

export default Users;
