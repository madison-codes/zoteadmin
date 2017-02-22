import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

// import '../styles/index.scss';

import Nav from '../nav/Nav';

const App = ({ searchTerm, children}) => {
    return (
      <div>
        <Nav />
        <input
          type='text'
          placeholder='search'
          className='nav-search-input'
          onKeyUp={(e) => searchTerm(e.target.value)}>
        </input>
        { children }
      </div>
    )
  }

export default App;
