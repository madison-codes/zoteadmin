import React, { Component } from 'react';
import { connect } from 'react-redux';
import Users from '../components/users/Users';

import { searchTerm } from '../actions';
import { filterType } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    searchTerm: (input) => {
      dispatch(searchTerm(input));
    },
    filterType: (term) => {
      dispatch(filterType(term));
    }
  };
};

const mapStateToProps = (state) => {
  // const { search } = state;
  return {
    state
  };
};

let UsersPage = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersPage;
