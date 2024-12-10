import { SET_SEARCH_RESULTS } from './actionTypes';

const baseEndpoint = 'https://strive-benchmark.herokuapp.com/api/jobs?search=';

export const fetchSearchResults = (query) => async (dispatch) => {
  try {
    const response = await fetch(`${baseEndpoint}${query}`);
    if (!response.ok) {
      throw new Error('Errore nella fetch dei risultati');
    }
    const data = await response.json();
    dispatch({
      type: SET_SEARCH_RESULTS,
      payload: data.data, // L'array dei risultati è nella proprietà "data"
    });
  } catch (error) {
    console.error('Errore durante la fetch:', error);
  }
};

export default MainSearch