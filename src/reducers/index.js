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
  currClass: '',
  success: ''
}

export const rootReducer = (state = initialState, action) => {
  switch(action.type) { 
    case actionType.FETCH_CARDS_START:
      return {
        ...state,
        error: '',
        isFetching: true,
        success: '',
      }
    case actionType.FETCH_CARDS_SUCCESS:
      return {
        ...state,
        error: '',
        isFetching: false,
        cards: action.payload,
        success: '',
      }
    case actionType.ERROR:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
        success: '',
      }
    case actionType.CHANGE_PAGE:
      return {
        ...state,
        currPage: action.payload,
        success: '',
      }
    case actionType.ADD_TO_DECK:
      if (state.currDeck.filter(card => card.name === action.payload.name).length === 2) {
        return {
          ...state,
          error: `You already have two copies of ${action.payload.name}.`,
          success: '',
        }
      } else if (state.currDeck.length >= 30) {
        return {
          ...state,
          error: 'Your deck is full.',
          success: '',
        }
      } else {
        return {
          ...state,
          error: '',
          currDeck: [...state.currDeck, action.payload],
          success: '',
        }
      }
    case actionType.REMOVE_FROM_DECK:
      return {
        ...state,
        error: '',
        currDeck: state.currDeck.filter(card => card !== action.payload),
        success: '',
      }
    case actionType.SORT_BY_SET:
      if (state.playerClass === '') {
        return {
          ...state,
          error: 'Please select a class.',
          success: '',
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
          success: '',
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
          success: '',
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
          success: '',
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
          success: '',
        }
      }
    case actionType.SAVE_DECK:
      if (action.payload.name === "") {
        return {
          ...state,
          error: 'Deck name is required',
          success: '',
        }
      } else {
        return {
          ...state,
          savedDecks: [...state.savedDecks, action.payload],
          success: 'Deck Saved',
          error: '',
        }
      }
    case actionType.SET_CURR_TO_EDIT:
      return {
        ...state,
        currDeck: action.payload.deck,
        success: '',
        error: '',
      }
    case actionType.SET_CLASS:
      if (state.currDeck.filter(card => card.playerClass === state.currClass).length > 0) {
        const num = state.currDeck.filter(card => card.playerClass === state.currClass).length;
        return {
          ...state,
          error: `Current deck contains ${num} ${state.currClass} cards. Remove them to switch to ${action.payload}.`,
          success: '',
        }
      } else if (!state.cards[state.currSetName]) {
        return {
          ...state,
          currClass: action.payload,
          success: '',
          error: '',
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
          success: '',
          error: '',
        }
      }
    default:
      return state;
  }
}