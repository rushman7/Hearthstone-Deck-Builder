import React, { useState } from 'react';
import { connect } from 'react-redux'
import { removeFromDeck, saveDeck } from '../actions';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginBottom: theme.spacing(1),
  }
}));

const DeckList = props => {
  const classes = useStyles();
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
          <TextField 
            id="standard-name"
            type="text" 
            label="Deck Name"
            value={deckName} 
            onChange={changeName} 
            placeholder='Set deck name...'
            className={classes.textField}
          />
          <Button 
            variant="contained" 
            color="primary"
            className="saved-deck-button"
            onClick={() => saveDeck(props.currDeck, deckName, props.currClass)}>
            Save Deck
          </Button>
        </div>
        <p className="deck-total">Deck Total: {props.currDeck.length} / 30</p>
      </div>
      <div className="deck-list-cont">
        {
          props.currDeck.length === 0
          ? <p>Click on cards to add them to your deck</p>
          : props.currDeck
            .sort((a, b) => (a.cost > b.cost) ? 1 : -1)
            .map((card, index) => 
              <div key={index} className="deck-card-cont" onClick={(e) => removeFromDeck(e, card)}>
                <h2>{card.name}</h2>
                <img src={card.img} alt={card.name} />
              </div>)
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  currDeck: state.currDeck,
  currClass: state.currClass,
})

export default connect(mapStateToProps, { removeFromDeck, saveDeck })(DeckList);
