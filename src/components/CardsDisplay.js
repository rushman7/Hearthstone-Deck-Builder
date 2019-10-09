import React from 'react';
import { connect } from 'react-redux'
import { addToDeck } from '../actions';
import PaginationPage from './PaginationPage';

const CardsDisplay = props => {
  let currPageCards = props.cards.Classic.slice((props.currPage * 10 ) - 10, props.currPage * 10)

  const addDefaultSrc = e => {
    e.target.src = 'https://i.imgur.com/NegDK4H.png'
  }

  const addToDeck = (e, card) => {
    e.preventDefault();
    let id = Date.now();
    props.addToDeck(card, id)
  }

  return (
    <div className="card-display-container">
      <div className="card-image-container">
        {
          currPageCards.map(card => 
          <img 
            onError={addDefaultSrc}
            src={card.img} 
            alt={card.name} 
            key={card.cardId}
            className="card-image"
            onClick={(e) => addToDeck(e, card)}
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
  currPage: state.currPage,
})

export default connect(mapStateToProps, { addToDeck })(CardsDisplay);
