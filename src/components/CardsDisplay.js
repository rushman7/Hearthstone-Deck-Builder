import React, { useState } from 'react';
import { connect } from 'react-redux'
import { addPlayerHand } from '../actions/index';

const CardsDisplay = props => {
  const [pageState, setPageState] = useState({
    currPage: 1,
    totalPages: 25
  })

  const { Classic } = props.cards;

  let currPageCards = Classic.slice((pageState.currPage * 10 ) - 10, pageState.currPage * 10)

  const onNextChange = () => {
    setPageState(prevState => ({
      ...prevState,
      currPage: prevState.currPage + 1,
      totalPages: Math.ceil(Classic.length / 10)
    }))
  }

  const onPrevChange = () => {
    setPageState(prevState => ({
      ...prevState,
      currPage: prevState.currPage - 1,
      totalPages: Math.ceil(Classic.length / 10)
    }))
  }

  const addPlayerHand = card => {
    if (props.playerHand.length >= 10 || props.playerHand.includes(card)) {
      alert('Your hand is full or card already exists!')
    } else {
      props.addPlayerHand(card)
    }
  }

  return (
    <div>
      <div className="card-image-container">
        {
          currPageCards.map(card => 
          <img 
            src={card.img} 
            alt={card.name} 
            key={card.cardId}
            onClick={() => addPlayerHand(card)}
            className="card-image"
          />)
        }
      </div>
      <button onClick={onNextChange}> Next </button>
      <button onClick={onPrevChange}> Prev </button>
    </div>
  )
}

const mapStateToProps = state => ({
  cards: state.cards,
  error: state.error,
  playerHand: state.playerHand,
})

export default connect(mapStateToProps, { addPlayerHand })(CardsDisplay);
