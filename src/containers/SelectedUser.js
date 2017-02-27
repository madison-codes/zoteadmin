import React, { Component } from 'react';

import { connect } from 'react-redux';
import SelectedUser from '../components/selectedUser/SelectedUser';

import { selectUser } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    selectUser: (user) => {
      dispatch(selectUser(user));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    state
  };
};

let SelectedUserPage = connect(mapStateToProps, mapDispatchToProps)(SelectedUser);

export default SelectedUserPage;
