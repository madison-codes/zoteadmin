import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

// import '../styles/index.scss';

import Nav from '../nav/Nav';

// const App = ({ searchTerm, children}) => {
//     return (
//       <div>
//         <Nav />
//         <input
//           type='text'
//           placeholder='search'
//           className='nav-search-input'
//           value={this.state.searchTerm}
//           onKeyDown={(e) => searchTerm(e.target.value)} />
//         { children }
//       </div>
//     )
//   }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  handleChange = e => {
    this.setState({ term: e.target.value });
    this.props.searchTerm(e.target.value);
  }

  render() {
    const { searchTerm, children } = this.props;
    return (
      <div>
        <Nav />
        <input
          type='text'
          placeholder='search'
          className='nav-search-input'
          value={this.state.term}
          onChange={this.handleChange}
          onKeyUp={(e) => {
            this.setState({
              term: e.target.value
            });
            searchTerm(e.target.value);
          }} />
        { children }
      </div>
    )
  }
}

export default App;
