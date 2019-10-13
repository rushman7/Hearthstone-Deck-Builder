import React from 'react';

const SavedDeckAmount = props => {
  return (
    <div>
      {props.currDeck.length} / 30
    </div>
  )
}

export default SavedDeckAmount;