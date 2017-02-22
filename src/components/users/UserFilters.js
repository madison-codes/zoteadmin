import React from 'react';
import mock from '../../mock/users';
import User from './User';
import { unixTimestamp } from '../../helpers/formatDateTime';

const UserFilters = ({ filter }) => {
  return (
    <div className='all-users'>
      <button
        onClick={() => filter('sub_end') }>
        By Subscription End
      </button>
      <button
        onClick={() => filter('created') }>
        By Date Created
      </button>
    </div>
  );
}

export default UserFilters;
