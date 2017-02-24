import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import mock from '../../mock/users';
import User from './User';
import UserFilter from './UserFilters';

import { unixTimestamp } from '../../helpers/formatDateTime';
import { dynamicSort } from '../../helpers/dynamicSort';


class Users extends React.Component {
  constructor(props, context){
    super(props, context);
  }

  renderUsers() {
    console.log(this.props.state.filter.filter.filter);
    /* chain filter and sort to get users */
    return mock.users.filter(user => true)
      // .filter()
      .sort(dynamicSort(this.props.state.filter.filter.filter))
      .map((user, index) => <User
        key={index}
        user={user}
        formattedDate={ dynamicSort(user.sub_end) }
    />)
  }

  render(){
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
