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

  const saveDeck = (deck, name) => {
    props.saveDeck(deck, name);
  }

  const changeName = (e) => {
    setDeckName(e.target.value)
    console.log(deckName)
  }

  return (
    <div>
      <SavedDeckAmount currDeck={props.currDeck} />
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
      <input type="text" value={deckName} onChange={changeName}/>
      <button onClick={() => saveDeck(props.currDeck, deckName)}>Save Deck</button>
    </div>
  )
}

const mapStateToProps = state => ({
  currDeck: state.currDeck,
})

export default connect(mapStateToProps, { removeFromDeck, saveDeck })(DeckList);
