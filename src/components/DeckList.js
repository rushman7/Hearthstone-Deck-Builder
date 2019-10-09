import React from 'react';
import { connect } from 'react-redux'
import { removeFromDeck } from '../actions';

const DeckList = props => {
  const removeFromDeck = (e, card) => {
    e.preventDefault();
    props.removeFromDeck(card)
  }

  return (
    <div className="deck-list-cont">
      {
        props.currDeck.length === 0
        ? <p>Click on cards to add them to your deck</p>
        : props.currDeck.map((card, index) => 
          <div key={index} className="deck-card-cont" onClick={(e) => removeFromDeck(e, card)}>
            <h2>{card.name}</h2>
            <img src={card.img} alt={card.name} />
          </div>)
      }
    </div>
  )
}

const mapStateToProps = state => ({
  currDeck: state.currDeck,
})

export default connect(mapStateToProps, { removeFromDeck })(DeckList);
