import React, { Component } from 'react';
import { connect } from 'react-redux';
import Users from '../components/users/Users';

import { searchTerm } from '../actions';
import { filterType } from '../actions';

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
    state: state,
    searchTerm: state.searchTerm,
    filterType: state.filterType
  };
};

let UsersPage = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersPage;
