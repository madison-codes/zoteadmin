import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import './App.scss';

import Users from '../users/Users';
import Groups from '../groups/Groups';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/users">Users</Link>
          <Link to="/groups">Groups</Link>

          {/* <div>
            <button onClick={() => browserHistory.push('/foo')}>Go to /foo</button>
          </div> */}
        </nav>
         {this.props.children}
      </div>
    );
  }
}

export default App;
