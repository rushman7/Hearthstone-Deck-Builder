import { 
  FETCH_CARDS_START,
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_FAILURE
} from '../actions';

const initialState = {
  cards: [],
  error: '',
  isFetching: false,
}

export const rootReducer = (state = initialState, action) => {
  switch(action.type) { 
    case FETCH_CARDS_START:
      return {
        ...state,
        error: '',
        isFetching: true
      }
    default:
      return state;
  }
}