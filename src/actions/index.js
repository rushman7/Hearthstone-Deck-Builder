import axios from 'axios';

export const FETCH_CARDS_START = 'FETCH_CARDS_START';
export const FETCH_CARDS_SUCCESS = 'FETCH_CARDS_SUCCESS';
export const FETCH_CARDS_FAILURE = 'FETCH_CARDS_FAILURE';

export const ADD_PLAYER_HAND = 'ADD_PLAYER_HAND';
export const REMOVE_PLAYER_HAND = 'REMOVE_PLAYER_HAND';

export const fetchHSCards = () => dispatch => {
  dispatch({ type: FETCH_CARDS_START });
  axios
    .get('https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/Classic?locale=enUS&collectible=1', {
      headers: {
        "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
        "x-rapidapi-key": "92ef65b0c8msh8ce6fa52d268712p1844aejsnda00a170fff9"
      }
    })
    .then(res => {
      dispatch({ type: FETCH_CARDS_SUCCESS, payload: res.data})
    })
    .catch(err => {
      dispatch({ 
        type: FETCH_CARDS_FAILURE, 
        payload: `${err.response.data.error} - ${err.response.data.message}` 
      })
    });
}

export const addPlayerHand = item => {
  return {
    type: ADD_PLAYER_HAND,
    payload: item
  }
}

export const removePlayerHand = id => {
  console.log(id);
  return {
    type: REMOVE_PLAYER_HAND,
    payload: id
  }
}