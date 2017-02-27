import React, { Component } from 'react';
import Nav from '../nav/Nav';

// import '../styles/index.scss';


class App extends Component {

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
