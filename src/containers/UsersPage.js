import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import { loadUser } from '../actions';
import UserList from '../components/users/Users';
// import Repo from '../components/Repo';
// import List from '../components/List';
// import zip from 'lodash/zip';

// const loadData = ({ login, loadUser }) => {
//   loadUser(login, [ 'name' ]);
// };

class UsersPage extends Component {
  static propTypes = {
    // login: PropTypes.string.isRequired,
    // user: PropTypes.object,
    // starredPagination: PropTypes.object,
    // starredRepos: PropTypes.array.isRequired,
    // starredRepoOwners: PropTypes.array.isRequired,
    // loadUser: PropTypes.func.isRequired,
    // loadStarred: PropTypes.func.isRequired
  }

  render() {
    return(
      <div>
        <h1>USERS PAGE</h1>
        <UserList />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { } = state;
  return { }
}

export default connect(mapStateToProps, {
  // loadUser
})(UsersPage)
