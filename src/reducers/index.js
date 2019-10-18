import * as actionType from '../actions';

const initialState = {
  cards: {
    Classic: []
  },
  error: '',
  isFetching: false,
  currPage: 1,
  totalPages: 1,
  currDeck: [],
  currSet: [],
  currSetName: '',
  currCost: 'All',
  savedDecks: [],
  currClass: ''
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
    case actionType.SORT_BY_SET:
      if (state.playerClass === '') {
        return {
          ...state,
          error: 'Please select a class.'
        }
      } else {
        return {
          ...state,
          currSet: state.cards[action.payload],
          currSetName: action.payload,
          totalPages:             
            Math.ceil((state.cards[action.payload].filter(card => {
              return (card.playerClass === state.currClass) || (card.playerClass === 'Neutral')
            })).length / 10),
          error: '',
          currCost: 'All',
        }
      }
    case actionType.SORT_BT_COST:
      if (state.playerClass === '') {
        return {
          ...state,
          error: 'Please select a class.'
        }
      } else if (action.payload === 'All') {
        return {
          ...state,
          currCost: action.payload,
          currSet: state.cards[state.currSetName],
          totalPages:           
            Math.ceil((state.cards[state.currSetName].filter(card => {
              return card.playerClass === state.currClass || card.playerClass === 'Neutral';
            })).length / 10),
          error: '',
        }
      } else if (action.payload === '7+') {
        return {
          ...state,
          currSet: state.cards[state.currSetName].filter(card => card.cost > 10),
          currCost: action.payload,
          totalPages: 
            Math.ceil((state.cards[state.currSetName].filter(card => {
              return (card.playerClass === state.currClass && card.cost === action.payload) || (card.playerClass === 'Neutral' && card.cost === action.payload);
            })).length / 10),
          error: '',
        }
      } else {
        return {
          ...state,
          currSet: state.cards[state.currSetName].filter(card => parseInt(card.cost) === action.payload),
          currCost: action.payload,
          totalPages:
            Math.ceil((state.cards[state.currSetName].filter(card => {
              return (card.playerClass === state.currClass && card.cost === action.payload) || (card.playerClass === 'Neutral' && card.cost === action.payload);
            })).length / 10),
          error: '',
        }
      }
    case actionType.SAVE_DECK:
      return {
        ...state,
        savedDecks: [...state.savedDecks, action.payload]
      }
    case actionType.SET_CURR_TO_EDIT:
      return {
        ...state,
        currDeck: action.payload.deck
      }
    case actionType.SET_CLASS:
      if (!state.cards[state.currSetName]) {
        return {
          ...state,
          currClass: action.payload,
        }
      } else {
        return {
          ...state,
          currClass: action.payload,
          totalPages: 
            Math.ceil((state.cards[state.currSetName].filter(card => {
              if (state.currCost === 'All') {
                return card.playerClass === action.payload || card.playerClass === 'Neutral';
              } else {
                return (card.playerClass === action.payload && card.cost === state.currCost) || (card.playerClass === 'Neutral' && card.cost === state.currCost);
              }
            })).length / 10),
        }
      }
    default:
      return state;
  }
}