import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import { loadUser } from '../actions';
import User from '../components/User';
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
      <h1>GROUPS PAGE</h1>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    // entities: { users }
  } = state

  return {
  }
}

export default connect(mapStateToProps, {
  // loadUser
})(UsersPage)
