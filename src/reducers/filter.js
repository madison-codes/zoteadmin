const defaultState = {
  filter: { filter: 'created'}
};

const filterType = (state = defaultState, action) => {
  switch (action.type) {
    case 'FILTER_TYPE':
      return Object.assign({}, state, {
        filter: action.filterType
      });
    default:
      return state;
  }
};

export default filterType;
