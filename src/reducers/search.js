// import searchTerm  from '../actions/search';
//
// const initalState = [];
//
// export const searchReducer = (state = initalState, action) => {
//   switch (action.type) {
//     case SEARCH_TERM:
//       return [
//         ...state,
//         'testing'
//         // search(action)
//       ];
//     default:
//       return state;
//   }
// };


//
// const todos = (state = [], action) => {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return [
//         ...state,
//         todo(undefined, action)
//       ]
//     case 'TOGGLE_TODO':
//       return state.map(t =>
//         todo(t, action)
//       )
//     default:
//       return state
//   }
// }

const defaultState = {
  searchTerm: ''
};

const searchReducer = (state = defaultState, action) => {
  switch (action.type){
    case 'SEARCH_TERM':
    return Object.assign({}, state, {
      searchTerm: action.term
    });
    default:
      return state;
  }
};

export default searchReducer;
