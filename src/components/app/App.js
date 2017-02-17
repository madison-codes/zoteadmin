import React, { Component, PropTypes } from 'react';
import { connect, getState } from 'react-redux'
import '../../styles/index.scss';


class App extends Component {
  // static propTypes = {
  //   searchTerm: PropTypes.string
  // };

  // searchNewTerm(){
  //   const { searchTerm } = this.props;
  //   if(!searchTerm){
  //     return null;
  //   }
  // }

  render(){
    return(
      <h1>App</h1>
    )
  }
}


const mapStateToProps = (state, ownProps) => ({
  // searchTerm: state.searchTerm
});

export default connect(mapStateToProps, {
  // searchNewTerm
})(App)
// import Nav from '../nav/Nav';
//
// import Users from '../users/Users';
// import Groups from '../groups/Groups';
//
// import mock from '../../mock/users';
// import { search } from '../../actions/search';
//
//
// function App({ search, children }) {
//   return (
//     <div>
//       <main>
//         <Nav />
//         <Users search={ search }/>
//         { children }
//       </main>
//       <footer>
//         <a href='mailto:support@zotebook.io'>support@zotebook.io</a>
//         <p>Crafted in Boulder, Colorado</p>
//         <p>© 2017 Blank Slate Systems</p>
//       </footer>
//     </div>
//   )
// }
//
// export default connect(
//   state => ({ searchTerm: state.searchTerm }),
//   { search }
// )(App)


// export default App;
