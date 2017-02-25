import { connect } from 'react-redux';
import AppComponent from '../components/app/App';
import { searchTerm } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    searchTerm: (input) => {
      dispatch(searchTerm(input));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    state
  };
};

let App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);

export default App;
