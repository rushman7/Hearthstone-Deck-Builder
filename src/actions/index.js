import axios from 'axios';

export const FETCH_CARDS_START = 'FETCH_CARDS_START';
export const FETCH_CARDS_SUCCESS = 'FETCH_CARDS_SUCCESS';
export const ERROR = 'ERROR';

export const CHANGE_PAGE = 'CHANGE_PAGE';
export const ADD_TO_DECK = 'ADD_TO_DECK';
export const REMOVE_FROM_DECK = 'REMOVE_FROM_DECK';

export const fetchHSCards = () => dispatch => {
  dispatch({ type: FETCH_CARDS_START });
  axios
    .get('https://omgvamp-hearthstone-v1.p.rapidapi.com/cards?locale=enUS&collectible=1', {
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
        type: ERROR, 
        payload: err 
      })
    });
}

export const changePage = currPage => {
  return {
    type: CHANGE_PAGE,
    payload: currPage
  }
}

export const addToDeck = (card, id) => {
  console.log(id)
  return {
    type: ADD_TO_DECK,
    payload: { ...card, id } 
  }
}

export const removeFromDeck = card => {
  return {
    type: REMOVE_FROM_DECK,
    payload: card
  }
}
