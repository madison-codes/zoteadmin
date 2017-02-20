import React, { Component} from 'react';

// import '../styles/index.scss';

import Nav from '../nav/Nav';
import Users from '../users/Users';


export default class App extends Component {
  render() {
    const { children  } = this.props;
    return (
      <div>
        <Nav />
        <Users />
        {children}
      </div>
    )
  }
}
