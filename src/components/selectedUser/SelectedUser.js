import React, { Component } from 'react';
import UsersPage from '../../containers/UsersPage';
import { Link } from 'react-router';

class SelectedUser extends Component {
  render(){
    return(
      <div>
        <button>
          <Link
            onClick={() => this.props.selectUser({})}
            to="/users"> Exit
          </Link>
        </button>

        <h1>Working</h1>
      </div>
    )
  }
}

export default SelectedUser;
