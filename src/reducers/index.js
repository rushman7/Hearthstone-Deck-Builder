import { 
  FETCH_CARDS_START,
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_FAILURE
} from '../actions';

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