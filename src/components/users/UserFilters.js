import React from 'react';
import mock from '../../mock/users';
import User from './User';
import { unixTimestamp } from '../../helpers/formatDateTime';

class UserFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render(){
    return (
      <div className='all-users'>
        <button
          onClick={() => this.props.filter('sub_end') }>
          By Subscription End
        </button>
        <button
          onClick={() => this.props.filter('created') }>
          By Date Created
        </button>
      </div>
    );
  }
}

export default UserFilters;
