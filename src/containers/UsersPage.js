import { connect } from 'react-redux';
import Users from '../components/users/Users';

import { searchTerm } from '../actions';
import { filterType } from '../actions';
import { selectUser } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    searchTerm: (input) => {
      dispatch(searchTerm(input));
    },
    filterType: (term) => {
      dispatch(filterType(term));
    },
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

let UsersPage = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersPage;
