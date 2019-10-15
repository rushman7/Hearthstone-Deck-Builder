import React from 'react';
import { connect } from 'react-redux';
import { setEditToCurr } from '../actions/index';
import Button from '@material-ui/core/Button';


const SavedDeckList = props => {
  const editDeck = (team) => {
    props.setEditToCurr(team)
    props.history.push('/')
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
          >Edit Deck</Button>
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

export default connect(mapStateToProps, { setEditToCurr })(SavedDeckList);