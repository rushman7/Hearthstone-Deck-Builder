import React from 'react';
import { connect } from 'react-redux'

const DeckList = props => {

  return (
    <div className="deck-list-cont">
      {
        props.currDeck.map(card => 
          <div key={card.cardId}>
            <img src={card.img} alt={card.name} />
            <h2>{card.name}</h2>
          </div>)
      }
    </div>
  )
}

const mapStateToProps = state => ({
  currDeck: state.currDeck,
})

export default connect(mapStateToProps, {})(DeckList);
