const defaultState = {
  searchTerm:''
};

const weatherApp = (state = defaultState, action) => {
  switch (action.type) {
    case 'SEARCH_TERM':
      return Object.assign({}, state, {
        searchTerm: action.term
      });
    default:
      return state;
  }
};

export default weatherApp;
