import { connect } from 'react-redux';
import Groups from '../components/groups/Groups';
// import Users from '../components/users/Users';

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm,
  };
};

let GroupsPage = connect(mapStateToProps, null)(Groups);

export default GroupsPage;
