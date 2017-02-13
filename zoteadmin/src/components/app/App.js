import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.scss';

import Nav from '../nav/Nav';

import Users from '../users/Users';
import Groups from '../groups/Groups';

import { search } from '../../actions/search'

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <h2>Welcome to React</h2>
//         </div>
//         <input type='text'
//           placeholder='search'
//           onKeyUp={(e) => search(e.target.value)}>
//         </input>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//         <Nav />
//          {this.props.children}
//       </div>
//     );
//   }
// }


function App({ search }) {
  return (
    <div className="App">
      <div className="App-header">
        <h2>Welcome to React</h2>
      </div>
      <input type='text'
        placeholder='search'
        onKeyUp={(e) => search(e.target.value)}>
      </input>
      {/* {this.props.} */}
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <Nav />
       {/* {this.props.children} */}
    </div>
  )
}

export default connect(
  state => ({ searchTerm: state.searchTerm }),
  { search }
)(App)


// export default App;
