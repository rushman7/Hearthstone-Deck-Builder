import { 
  FETCH_CARDS_START,
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_FAILURE
} from '../actions';

const initialState = {
  cards: {
    Classic: [],
  },
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
    case FETCH_CARDS_SUCCESS:
      return {
        ...state,
        error: '',
        isFetching: false,
        cards: action.payload
      }
    case FETCH_CARDS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      }
    default:
      return state;
  }
}