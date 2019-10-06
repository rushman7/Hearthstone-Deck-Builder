import React from 'react';
import { connect } from 'react-redux'
import PaginationPage from './PaginationPage';

const CardsDisplay = props => {
  // const allCards = () => {
  //   var total = [];
  //   for (let set in props.cards) {
  //     total = total.concat(props.cards[set])
  //   }
  //   console.log(total);
  //   return total;
  // }

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
  currPage: state.currPage,
})

export default connect(mapStateToProps, {})(CardsDisplay);
