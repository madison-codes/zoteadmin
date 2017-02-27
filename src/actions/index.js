export const searchTerm = (term) => {
  return {
    type: 'SEARCH_TERM',
    term
  };
};

export const filterType = (filterType) => {
  return {
    type: 'FILTER_TYPE',
    filterType
   };
};

export const selectUser = (user) => {
  return {
    type: 'SELECT_USER',
    user
   };
};
