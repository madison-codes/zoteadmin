import React from 'react';
import mock from '../../mock/users';
import User from './User';
import UserFilter from './UserFilters';

import { unixTimestamp } from '../../helpers/formatDateTime';

const Users = ({ filterType }) => {
  return (
    <div className='all-users'>
      <UserFilter filter={ filterType } />
      {
        mock.users.map(user => <User
        user={user}
        formattedDate={ unixTimestamp(user.sub_end) }
        />
      )
      }
    </div>
  );
}

export default Users;
