import React, { Component, PropTypes } from 'react';

// import '../styles/index.scss';

import Nav from '../nav/Nav';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Nav />
        <input
          type='text'
          placeholder='search'
          className='nav-search-input'
          // value={this.state.term}
          onKeyUp={(e) => this.props.searchTerm(e.target.value) } />
        { this.props.children }
      </div>
    )
  }
}

export default App;
