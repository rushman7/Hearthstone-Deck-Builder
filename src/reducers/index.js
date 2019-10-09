import * as actionType from '../actions';

const initialState = {
  cards: {
    'Basic': [],
    'Classic': [],
    'Blackrock Mountain': [],
    'Goblins vs Gnomes': [],
    'Hall of Fame': [],
    "Journey to Un'Goro": [],
    'Knights of the Frozen Throne': [],
    'Kobolds & Catacombs': [],
    'Mean Streets of Gadgetzan': [],
    'One Night in Karazhan': [],
    "Rastakhan's Rumble": [],
    'Rise of Shadows': [],
    'Saviors of Uldum': [],
    'The Boomsday Project': [],
    'The Grand Tournament': [],
    'The League of Explorers': [],
    'The Witchwood': [],
    'Whispers of the Old Gods': [],
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
        currPage: action.payload
      }
    case actionType.ADD_TO_DECK:
      return {
        ...state,
        currDeck: [...state.currDeck, action.payload]
      }
    default:
      return state;
  }
}