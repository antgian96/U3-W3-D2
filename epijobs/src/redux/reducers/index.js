import { ADD_FAVOURITE, REMOVE_FAVOURITE, SET_SEARCH_RESULTS } from './actionTypes';

// Reducer per i preferiti
const favouritesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FAVOURITE:
      return [...state, action.payload];
    case REMOVE_FAVOURITE:
      return state.filter((company) => company.id !== action.payload);
    default:
      return state;
  }
};

import { SET_SEARCH_RESULTS } from './actionTypes';

const searchResultsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      return action.payload;
    default:
      return state;
  }
};

export { searchResultsReducer };




export { favouritesReducer, searchResultsReducer };
