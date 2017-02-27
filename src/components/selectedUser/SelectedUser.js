import React, { Component } from 'react';
import { Link } from 'react-router';

class SelectedUser extends Component {
  render(){
    const user = this.props.state.selectUser;
    return(
      <div>
        <form onSubmit={() => console.log('update user')}>
          <input type='text' defaultValue={user.username}></input>
          <input type='text' defaultValue={user.sub_end}></input>
          <input type='text' defaultValue={user.stripe_id}></input>
          <Link
            onClick={() => this.props.selectUser({})}
            to="/users"><button type='submit'>Submit Changes</button>
          </Link>
        </form>
        <button>
        <Link
        onClick={() => this.props.selectUser({})}
        to="/users"> Cancel
        </Link>
        </button>
      </div>
    )
  }
}

export default SelectedUser;
