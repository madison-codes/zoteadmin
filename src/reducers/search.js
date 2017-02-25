const defaultState = {
  searchTerm: { searchTerm: ''}
};

const searchTerm = (state = defaultState, action) => {
  switch (action.type) {
    case 'SEARCH_TERM':
      return Object.assign({}, state, {
        searchTerm: action.term
      });
    default:
      return state;
  }
};

export default searchTerm;
