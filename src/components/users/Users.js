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

  handleSearchFilter() {
    const search = this.props.state.search;
    const filter = this.props.state.filter;
    console.log(this.props.state.filter);
    /* chain filter and sort to get users */
    const activeUsers = mock.users
      .filter((user) => user.username.includes(search))
      .sort(dynamicSort(filter));
    return this.renderUsers(activeUsers);
  }

  renderUsers(users){
    return users.map((user, index) => <User
        key={index}
        user={user}
        formattedDate={ dynamicSort(user.sub_end) }
    />)

  }

  render(){
    return (
      <div className='all-users'>
        <UserFilter filter={ this.props.filterType } />
        { this.handleSearchFilter() }
      </div>
    );
  }
}

export default Users;
