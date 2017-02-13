import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

class Nav extends Component {
  render() {
    return (
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/users">Users</Link>
        <Link to="/groups">Groups</Link>

        {/* <div>
          <button onClick={() => browserHistory.push('/foo')}>Go to /foo</button>
        </div> */}
      </nav>
    );
  }
}

export default Nav;
