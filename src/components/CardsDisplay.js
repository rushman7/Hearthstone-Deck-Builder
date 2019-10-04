import React from 'react';
import { connect } from 'react-redux'
import { addPlayerHand } from '../actions/index';

const CardsDisplay = props => {
  const addPlayerHand = card => {
    if (props.playerHand.length >= 10) {
      alert('Your hand is full!')
    } else {
      props.addPlayerHand(card)
    }
  }

  return (
    <div className="card-image-container">
      {props.cards.Classic.map(card => 
        <img 
          src={card.img} 
          alt={card.name} 
          key={card.cardId}
          onClick={() => addPlayerHand(card)}
          className="card-image"
        />
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  cards: state.cards,
  error: state.error,
  playerHand: state.playerHand,
})

export default connect(mapStateToProps, { addPlayerHand })(CardsDisplay);
