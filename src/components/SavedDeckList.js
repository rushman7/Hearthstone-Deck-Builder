import React from 'react';
import { connect } from 'react-redux';
import { setEditToCurr, deleteDeck, setClass } from '../actions/index';
import Button from '@material-ui/core/Button';


const SavedDeckList = props => {
  const editDeck = (deck) => {
    props.setEditToCurr(deck)
    props.setClass(deck.hero)
    props.history.push('/')
  }

  const deleteDeck = deck => {
    props.deleteDeck(deck)
  }

  return (
    <div className="saved-deck-cont">
      {props.savedDecks.map((deck,index) => 
        <div key={index} className="saved-deck">
          <p>{deck.name}</p>
          <Button 
            variant="contained" 
            color="primary"
            onClick={() => editDeck(deck)}
            className="saved-deck-button"
          >Edit</Button>
          <Button 
            variant="contained" 
            color="primary"
            onClick={() => deleteDeck(deck)}
            className="saved-deck-button"
          >Delete</Button>
          <img 
            src={require(`../images/${deck.hero}.jpg`)} 
            alt={deck.hero}
            className={`hero-image-${deck.hero}`}
          />
        </div>
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  currDeck: state.currDeck,
  savedDecks: state.savedDecks
})

export default connect(mapStateToProps, { setEditToCurr, deleteDeck, setClass })(SavedDeckList);