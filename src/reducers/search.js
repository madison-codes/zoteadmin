const defaultState = '';

const search = (state = defaultState, action) => {
  switch (action.type) {
    case 'SEARCH_TERM':
      return action.term;
    default:
      return state;
  }
};

export default search;
