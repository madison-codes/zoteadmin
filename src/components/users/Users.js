import React from 'react';

import mock from '../../mock/users';
import User from './User';
import UserFilter from './UserFilters';

import { dynamicSort } from '../../helpers/dynamicSort';
import formatDateTime from '../../helpers/formatDateTime';

class Users extends React.Component {

  handleSearchFilter() {
    const search = this.props.state.search;
    const filter = this.props.state.filter;
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
        subEndFormatted={ formatDateTime(user.sub_end) }
        createdFormatted={ formatDateTime(user.created) }

        selectUser={ this.props.selectUser }
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
