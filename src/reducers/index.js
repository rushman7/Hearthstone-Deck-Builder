import { FETCH_HS_CARDS } from '../actions';

const initialState = {
  cards: [],
  error: ''
}

export const rootReducer = (state = initialState, action) => {
  switch(action.type) { 
    case FETCH_HS_CARDS:
      return {
        ...state,
        error: 'Nothing to do...'
      }
    default:
      return state;
  }
}