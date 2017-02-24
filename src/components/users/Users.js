import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import mock from '../../mock/users';
import User from './User';
import UserFilter from './UserFilters';

import { unixTimestamp } from '../../helpers/formatDateTime';

class Users extends React.Component {
  renderUsers() {
    /* chain filter and sort to get users */
    return mock.users.filter(user => true)
      .sort(/* write sorting logic here */)
      .map((user, index) => <User
      key={index}
      user={user}
      formattedDate={ unixTimestamp(user.sub_end) }
    />)
  }
  render(){
  console.log(this.props.filterType);
    return (
      <div className='all-users'>
        <UserFilter filter={ this.props.filterType } />
        {
          this.renderUsers()
        }
      </div>
    );
  }
}

export default Users;
