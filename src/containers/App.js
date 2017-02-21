import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

// import '../styles/index.scss';

import Nav from '../components/nav/Nav';

class App extends Component {

  render() {
    const { children
      // inputValue
    } = this.props;
    return (
      <div>
        <Nav />
        {children}
      </div>
    )
  }
}
//
const mapStateToProps = (state, ownProps) => ({
  // errorMessage: state.errorMessage,
  // inputValue: ownProps.location.pathname.substring(1)
});

export default connect(mapStateToProps, {
  // resetErrorMessage
})(App);
