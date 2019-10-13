import React from 'react';
import { connect } from 'react-redux';
import { setEditToCurr } from '../actions/index';

const SavedDeckList = props => {
  const editDeck = (team) => {
    props.setEditToCurr(team)
    props.history.push('/')
  }
  return (
    <div className="saved-deck-cont">
      {props.savedDecks.map((deck,index) => 
        <p onClick={() => editDeck(deck)} key={index}>{deck.name}</p>
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  currDeck: state.currDeck,
  savedDecks: state.savedDecks
})

export default connect(mapStateToProps, { setEditToCurr })(SavedDeckList);