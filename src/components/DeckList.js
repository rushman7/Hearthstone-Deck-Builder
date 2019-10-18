import React, { useState } from 'react';
import { connect } from 'react-redux'
import { removeFromDeck, saveDeck } from '../actions';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from 'glamor';
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
  const [successMessage, setSuccessMessage] = useState(false)

  const notify = () => toast(props.error ,{
    className: css({
      background: 'green'
    }),
    bodyClassName: css({
      fontSize: '1rem',
      color: 'white'
    }),
    progressClassName: css({
      background: "#ffb7b7"
    })
  });

  const removeFromDeck = (e, card) => {
    e.preventDefault();
    props.removeFromDeck(card)
  }

  const saveDeck = (deck, name, hero) => {
    props.saveDeck(deck, name, hero);
    setSuccessMessage(true)
    props.history.push('/Saved_Decks')
  }

  const changeName = (e) => {
    setDeckName(e.target.value)
  }

  return (
    <div className='deck-cont'>
      {successMessage && <p>{notify()}</p>}
      <ToastContainer autoClose={8000}/>
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
    </div>
  )
}

const mapStateToProps = state => ({
  currDeck: state.currDeck,
  currClass: state.currClass,
})

export default connect(mapStateToProps, { removeFromDeck, saveDeck })(DeckList);
