import React from 'react';
import { connect } from 'react-redux'
import { addToDeck } from '../actions';
import PaginationPage from './PaginationPage';
import SortBySet from './SortBySet';

const CardsDisplay = props => {
  if (props.currSet) {
    var currPageCards = props.currSet.slice((props.currPage * 10 ) - 10, props.currPage * 10);
  } 

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
      <SortBySet />
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
      <PaginationPage />
    </div>
  )
}

const mapStateToProps = state => ({
  currPage: state.currPage,
  currSet: state.currSet,
})

export default connect(mapStateToProps, { addToDeck })(CardsDisplay);
