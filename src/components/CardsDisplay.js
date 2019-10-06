import React from 'react';
import { connect } from 'react-redux'
import { addPlayerHand } from '../actions/index';
import PaginationPage from './PaginationPage';

const CardsDisplay = props => {
  const addPlayerHand = card => {
    if (props.playerHand.length >= 10 || props.playerHand.includes(card)) {
      alert('Your hand is full or card already exists!')
    } else {
      props.addPlayerHand(card)
    }
  }

  let currPageCards = props.cards.Classic.slice((props.currPage * 10 ) - 10, props.currPage * 10)

  const addDefaultSrc = e => {
    e.target.src = 'https://i.imgur.com/NegDK4H.png'
  }

  return (
    <div>
      <div className="card-image-container">
        {
          currPageCards.map(card => 
          <img 
            onError={addDefaultSrc}
            src={card.img} 
            alt={card.name} 
            key={card.cardId}
            onClick={() => addPlayerHand(card)}
            className="card-image"
          />)
        }
      </div>
      <PaginationPage classic={props.cards.Classic}/>
    </div>
  )
}

const mapStateToProps = state => ({
  cards: state.cards,
  error: state.error,
  playerHand: state.playerHand,
  currPage: state.currPage,
})

export default connect(mapStateToProps, { addPlayerHand })(CardsDisplay);
