import React, { Component } from 'react';
import { connect } from 'react-redux';
import Users from '../components/users/Users';

import { searchTerm } from '../actions/index';
import { filterType } from '../actions/index';

const mapDispatchToProps = (dispatch) => {
  return {
    searchTerm: (input) => {
      dispatch(searchTerm({ 'searchTerm': input }));
    },
    filterType: (term) => {
      dispatch(filterType({ 'filter': term }));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm,
    filterType: state.filter
  };
};

let UsersPage = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersPage;
