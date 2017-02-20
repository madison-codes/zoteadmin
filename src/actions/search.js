import { dispatchSearch } from '../dispatchers/search';
//
// export function search(e) {
//   return {
//     type: SEARCHTERM,
//     amount: e
//   };
// }
//
// store.dispatch(search(e));

export const search = (term) => {
  const action = {
    type: 'SEARCH_TERM',
    term
  };
  dispatchSearch(action);
};


// export const boundSearch = (term) => dispatch(search(term));

// return dispatch(search(action));
