import React, { Component } from 'react';

import { connect } from 'react-redux';
import SelectedUser from '../components/selectedUser/SelectedUser';

const mapDispatchToProps = (dispatch) => {
  // return {
  //   searchTerm: (input) => {
  //     dispatch(searchTerm(input));
  //   },
  //   filterType: (term) => {
  //     dispatch(filterType(term));
  //   }
  // };
};

const mapStateToProps = (state) => {
  return {
    state
  };
};

let SelectedUserPage = connect(mapStateToProps, mapDispatchToProps)(SelectedUser);

export default SelectedUserPage;
