import { connect } from 'react-redux';
import AppComponent from '../components/app/App';
import { searchTerm } from '../actions/index';

const mapDispatchToProps = (dispatch) => {
  return {
    searchTerm: (input) => {
      dispatch(searchTerm({ 'searchTerm': input }));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm,
  };
};

let App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);

export default App;
