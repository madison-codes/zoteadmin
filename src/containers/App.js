// import React, { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';
// import { browserHistory } from 'react-router';
//
// // import '../styles/index.scss';
//
// import Nav from '../components/nav/Nav';
//
// class App extends Component {
//   static propTypes = {
//     errorMessage: PropTypes.string,
//     resetErrorMessage: PropTypes.func,
//     inputValue: PropTypes.string.isRequired,
//     // Injected by React Router
//     children: PropTypes.node
//   }
//
//   handleDismissClick = e => {
//     this.props.resetErrorMessage();
//     e.preventDefault();
//   }
//
//   handleChange = nextValue => {
//     browserHistory.push(`/${nextValue}`);
//   }
//
//   renderErrorMessage() {
//     const { errorMessage } = this.props;
//     if (!errorMessage) {
//       return null;
//     }
//
//     return (
//       <p>
//         {/* <b>{errorMessage}</b> */}
//         {/* {' '} */}
//         (<a href="#"
//             onClick={this.handleDismissClick}>
//           Dismiss
//         </a>)
//       </p>
//     )
//   }
//
//   render() {
//     const { children
//       // inputValue
//     } = this.props
//     return (
//       <div>
//         <Nav />
//         {children}
//       </div>
//     )
//   }
// }
//
// const mapStateToProps = (state, ownProps) => ({
//   // errorMessage: state.errorMessage,
//   // inputValue: ownProps.location.pathname.substring(1)
// })
//
// export default connect(mapStateToProps, {
//   // resetErrorMessage
// })(App)
