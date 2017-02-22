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
