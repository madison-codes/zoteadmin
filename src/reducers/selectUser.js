const defaultState= {};

const selectUser = (state = defaultState, action) => {
  switch (action.type) {
    case 'SELECT_USER':
      return action.user;
    default:
      return state;

  }
};

export default selectUser;
