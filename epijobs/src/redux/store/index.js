import { configureStore } from '@reduxjs/toolkit';
import { favouritesReducer, searchResultsReducer } from './reducers';

const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
    results: searchResultsReducer,
  },
});

export default store;
