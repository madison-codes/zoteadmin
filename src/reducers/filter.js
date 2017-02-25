const defaultState = '';

const filterType = (state = defaultState, action) => {
  switch (action.type) {
    case 'FILTER_TYPE':
      return action.filterType;
    default:
      return state;
  }
};

export default filterType;
