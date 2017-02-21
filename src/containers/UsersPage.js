import { connect } from 'react-redux';
import Users from '../components/users/Users';
import { searchTerm } from '../actions/index';

const mapDispatchToProps = (dispatch) => {
  return {
    searchTerm: (input) => {
      dispatch(searchTerm({ 'searchTerm': input }));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm,
  };
};

let UsersPage = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersPage;
