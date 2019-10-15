import React, { useState } from 'react';
import { connect } from 'react-redux'
import { removeFromDeck, saveDeck } from '../actions';
import SavedDeckAmount from './SavedDeckAmount';

const DeckList = props => {
  const [deckName, setDeckName] = useState('');

  const removeFromDeck = (e, card) => {
    e.preventDefault();
    props.removeFromDeck(card)
  }

  const saveDeck = (deck, name, hero) => {
    props.saveDeck(deck, name, hero);
  }

  const changeName = (e) => {
    setDeckName(e.target.value)
  }

  return (
    <div className='deck-cont'>
      <div className="deck-top-cont">
        <div>
          <input type="text" value={deckName} onChange={changeName} placeholder='Set deck name...'/>
          <button onClick={() => saveDeck(props.currDeck, deckName, props.currClass)}>Save Deck</button>
        </div>
        <p className="deck-total">{props.currDeck.length} / 30</p>
      </div>
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
      <SavedDeckAmount currDeck={props.currDeck} />
    </div>
  )
}

const mapStateToProps = state => ({
  currDeck: state.currDeck,
  currClass: state.currClass,
})

export default connect(mapStateToProps, { removeFromDeck, saveDeck })(DeckList);
