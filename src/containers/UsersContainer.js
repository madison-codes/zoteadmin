import { connect } from 'react-redux';
import { search } from '../actions/index';
import Home from '../components/users/Users';

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm,
  };
};

let UserContainer =  connect(mapStateToProps, null)(Users);

export default UserContainer;
