import React from 'react';
import { Link } from 'react-router-dom';

const SavedDeckAmount = props => {
  return (
    <div>
      <Link to="/Saved_Decks"><button>Saved Decks</button></Link>
      {props.currDeck.length} / 30
    </div>
  )
}

export default SavedDeckAmount;