import * as actionType from '../actions';

const initialState = {
  cards: {
    Classic: []
  },
  error: '',
  isFetching: false,
  currPage: 1,
  totalPages: 25,
  currDeck: [],
}

export const rootReducer = (state = initialState, action) => {
  switch(action.type) { 
    case actionType.FETCH_CARDS_START:
      return {
        ...state,
        error: '',
        isFetching: true
      }
    case actionType.FETCH_CARDS_SUCCESS:
      return {
        ...state,
        error: '',
        isFetching: false,
        cards: action.payload,
      }
    case actionType.ERROR:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      }
    case actionType.CHANGE_PAGE:
      return {
        ...state,
        error: '',
        currPage: action.payload
      }
    case actionType.ADD_TO_DECK:
      console.log(state.cards)
      if (state.currDeck.filter(card => card.name === action.payload.name).length === 2) {
        return {
          ...state,
          error: `You already have two copies of ${action.payload.name}.`,
        }
      } else if (state.currDeck.length >= 30) {
        return {
          ...state,
          error: 'Your deck is full.',
        }
      } else {
        return {
          ...state,
          error: '',
          currDeck: [...state.currDeck, action.payload],
        }
      }
    case actionType.REMOVE_FROM_DECK:
      return {
        ...state,
        error: '',
        currDeck: state.currDeck.filter(card => card !== action.payload)
      }
    default:
      return state;
  }
}