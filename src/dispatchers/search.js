import store from 'redux';

export const dispatchSearch = (search) => {
  store.dispatch({
    search
  });
};
