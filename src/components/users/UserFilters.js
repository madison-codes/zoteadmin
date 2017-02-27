import React, { Component } from 'react';

class UserFilters extends Component {
  constructor(props) {
    super(props);
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
