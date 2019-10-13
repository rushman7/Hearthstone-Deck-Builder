import React from 'react';
import { connect } from 'react-redux';

const SavedDeckList = props => {
  return (
    <div className="saved-deck-cont">
      {props.savedDecks.map(deck => <p>{deck.name}</p>)}
    </div>
  )
}

const mapStateToProps = state => ({
  savedDecks: state.savedDecks
})

export default connect(mapStateToProps, {})(SavedDeckList);