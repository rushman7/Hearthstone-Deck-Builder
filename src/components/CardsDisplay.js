import React from 'react';
import { connect } from 'react-redux'
import { addToDeck } from '../actions';
import { makeStyles } from '@material-ui/core/styles';
import PaginationPage from './PaginationPage';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const CardsDisplay = props => {
  if (props.cards) {
    var currPageCards = props.cards.Classic.slice((props.currPage * 10 ) - 10, props.currPage * 10);
  }

  const addDefaultSrc = e => {
    e.target.src = 'https://i.imgur.com/NegDK4H.png'
  }

  const addToDeck = (e, card) => {
    e.preventDefault();
    let id = Date.now();
    props.addToDeck(card, id)
  }

  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  const classes = useStyles();

  return (
    <div className="card-display-container">
      <FormControl className={classes.formControl}>
        <InputLabel>Sort by Set</InputLabel>
          <Select>
            { 
              Object.keys(props.cards).map(function(keyName, keyIndex) {
                return <MenuItem value={keyName}>{keyName}</MenuItem>
              })
            }
        </Select>
      </FormControl>
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
  currPage: state.currPage,
})

export default connect(mapStateToProps, { addToDeck })(CardsDisplay);
