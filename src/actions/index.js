import axios from 'axios';

export const FETCH_CARDS_START = 'FETCH_CARDS_START';
export const FETCH_CARDS_SUCCESS = 'FETCH_CARDS_SUCCESS';
export const FETCH_CARDS_FAILURE = 'FETCH_CARDS_FAILURE';

export const fetchHSCards = () => dispatch => {
  dispatch({ type: FETCH_CARDS_START });
  axios
    .get('https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/Tirion%20Fordring', {
      headers: {
        "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
        "x-rapidapi-key": "92ef65b0c8msh8ce6fa52d268712p1844aejsnda00a170fff9"
      }
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
}