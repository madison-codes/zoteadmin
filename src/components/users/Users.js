import React from 'react';
import mock from '../../mock/users';
import User from './User';
import { unixTimestamp } from '../../helpers/formatDateTime';

const Users = ({ searchTerm }) => {

  // this needs to sort by sub_end not id
  mock.users.sort((a, b) => {
    let formattedA = unixTimestamp(a.sub_end);
    let formattedB = unixTimestamp(b.sub_end);
    return formattedA - formattedB;
  });

  return (
    <div className='all-users'>
      <h1>USERS</h1>
      {
        mock.users.map(user => <User
        user={user}
        formattedDate = { unixTimestamp(user.sub_end) }
        // formattedDate={ formatDate(user.sub_end) }
        />
      )
      }
    </div>
  );
}

export default Users;
