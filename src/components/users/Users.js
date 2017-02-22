import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import mock from '../../mock/users';
import User from './User';
import UserFilter from './UserFilters';

import { unixTimestamp } from '../../helpers/formatDateTime';

class Users extends React.Component {
  render(){
  console.log(this.props);
    return (
      <div className='all-users'>
        <UserFilter filter={ this.props.filterType } />
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
}

export default Users;
