import React, { Component } from 'react';
import mock from '../../mock/users';

import { connect } from 'react-redux';

import { search } from '../../actions/search';
import User from './User';

const Users = ({ search }) => {
  return (
    <div className='all-users'>
      <h1>Testing usersMock</h1>
    </div>
  );
}

export default Users;
